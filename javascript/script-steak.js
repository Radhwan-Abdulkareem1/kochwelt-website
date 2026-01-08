let recipies = [
    {
        name: "Rindersteak",
        ingredients: [
            {
                name: "Rindersteak",
                id: "zutA",
                amount: 1
            },
            {
                name: "Öl",
                id: "zutB",
                amount: 0.5,
                comma: true
            },
            {
                name: "Petersilie",
                id: "zutC",
                amount: 0.5,
                comma: true
            },
            {
                name: "Chilliflocken",
                id: "zutD",
                amount: 1
            },
            {
                name: "Knoblauch",
                id: "zutE",
                amount: 1
            },
            {
                name: "Olivenöl",
                id: "zutF",
                amount: 2
            },
            {
                name: "Salz",
                id: "zutG",
                amount: 1
            },
            {
                name: "Maiskolben",
                id: "zutH",
                amount: 1
            }
        ]

    }
]

function rezept() {
    let portionSize = Number(document.getElementById("portion").value);
    if (portionSize >= 1 && portionSize <= 20) {
        recipies[0].ingredients.forEach(s => {
            let value = s.amount * portionSize;
            if (s.comma) value = value.toString().replace(".", ",");
            document.getElementById(s.id).textContent = value;
        });


        updatePlurals()
    }
}

function updatePlurals() {
    const Pluralwords = document.querySelectorAll(".plural"); // hol alle Wörter mit der Class "plural"

    Pluralwords.forEach(word => {
        const ingredientNumberId = word.dataset.countId;
        const countSpan = document.getElementById(ingredientNumberId);
        if (!countSpan) return;

        const countText = countSpan.textContent.replace(",", ".");

        if (countText >= 2) {
            word.textContent = word.dataset.plural;
        } else {
            word.textContent = word.dataset.singular;
        }
    });
}




