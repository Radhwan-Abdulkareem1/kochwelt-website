const zutaten = [
    { id: "zutA", base: 2 },
    { id: "zutB", base: 1 },
    { id: "zutC", base: 2 },
    { id: "zutD", base: 500 },
    { id: "zutE", base: 1 }
]

function rezept() {
    let portionSize = Number(document.getElementById("portion").value);

    if (portionSize >= 1 && portionSize <= 20) {
        zutaten.forEach(lebensmittel => {
            let value = lebensmittel.base * portionSize;
            // unitSpan existiert NUR bei zutD, weil nur dort .mlToL direkt daneben steht
            let unitSpan = document.querySelectorAll(`#${lebensmittel.id} + .mlToL`);

            let output = value;

            // Nur wenn es eine mlToL-Einheit gibt, machen wir ml->L Logik
            if (unitSpan) {
                if (value >= 1000) {
                    output = (value / 1000).toString().replace(".", ",");
                    unitSpan.textContent = "L";
                } else {
                    output = value;
                    unitSpan.textContent = "ml";
                }
            }
            document.getElementById(lebensmittel.id).textContent = output;
        });
        updatePlurals()
    }
}


function updatePlurals() {
    const pluralWords = document.querySelectorAll(".plural");

    pluralWords.forEach(word => {
        const zutatenZahlenID = word.dataset.countId;
        const countSpan = document.getElementById(zutatenZahlenID);
        if (!countSpan) return;

        const countText = Number(countSpan.textContent.replace(",", "."));

        if (countText >= 2) {
            word.textContent = word.dataset.plural;
        } else {
            word.textContent = word.dataset.singular;
        }
    });
}