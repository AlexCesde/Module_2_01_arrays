function example() {
    const books = ["Personal", "Development"];
    let out = "";

    // in keyword (index)
    for (item in books) {
        out += `<h1>Data: ${item}</h1>`;
    }

    // of keyword (value)
    for (item of books) {
        out += `<h1>Data: ${item}</h1>`;
    }

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);