const zutaten = [
    { id: "zutA", base: 150 },
    { id: "zutB", base: 1 },
    { id: "zutC", base: 15 },
    { id: "zutD", base: 0.5, comma: true },
    { id: "zutE", base: 1 },
    { id: "zutF", base: 2 },
]

function rezept() {
    let portionSize = (document.getElementById("portion").value);
    portionSize = Number(portionSize.replace(",", "."));
    if (portionSize >= 1 && portionSize <= 20) {
        zutaten.forEach(lebensmittel => {
            let value = lebensmittel.base * portionSize;
            let output = value;

            let unitSpan = document.querySelector(`#${lebensmittel.id} + .mlToL`);
            if (unitSpan) {
                if (value >= 1000) {
                    output = (value / 1000).toString().replace(".", ",");
                    unitSpan.textContent = "L"
                } else {
                    output = value;
                    unitSpan.textContent = "ml";
                }
            }
            let convertKg = document.querySelector(`#${lebensmittel.id} + .gToKg`);
            if (convertKg) {
                if (value >= 1000) {
                    output = (value / 1000).toString().replace(".", ",");
                    convertKg.textContent = " Kg"
                } else {
                    output = value;
                    convertKg.textContent = " g";
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

        const countText = countSpan.textContent.replace(",", ".");

        if (countText >= 2) {
            word.textContent = word.dataset.plural;
        } else {
            word.textContent = word.dataset.singular;
        }
    });
}