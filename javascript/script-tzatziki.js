const zutaten = [
    { id: "zutA", base: 100, gram: true }, //Gurke
    { id: "zutB", base: 150, gram: true }, //Joghurt
    { id: "zutC", base: 0.5, comma: true }, // Knoblauch
    { id: "zutD", base: 0.5, comma: true }, // Öl
    { id: "zutE", base: 0.5, comma: true }, // Zitrone
    { id: "zutF", base: 0.5, comma: true }, // Dill
];
function rezept() { 
    const portionsGröße = Number(document.getElementById("portion").value);

    if (portionsGröße >= 1 && portionsGröße <= 20) {
        zutaten.forEach(z => {
            let value = z.base * portionsGröße;
            if (z.comma) value = value.toString().replace(".", ",");
            document.getElementById(z.id).textContent = value;

        });
        convertGtoKg(); // HIER: nach dem Rechnen g->kg prüfen
    }
}

function convertGtoKg() {
    const gUnits = document.querySelectorAll(".gToKg");

    gUnits.forEach(span => {
        const valueSpan = span.previousElementSibling;
        if (!valueSpan) return;

        // berechneten Wert holen (kann z.B. "1200" oder "1200,5" sein)
        let value = Number(valueSpan.textContent.replace(",", "."));

        if (value > 999) {
            let KgValue = (value / 1000).toString().replace(".", ",");
            valueSpan.textContent = KgValue;
            span.textContent = " kg"
        } else {
            span.textContent = " g";
        }
    })
}
