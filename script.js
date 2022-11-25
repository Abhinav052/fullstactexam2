function addColor1() {
    document.body.style.backgroundColor = "aqua";
    localStorage.setItem(json.stringify({ color: "aqua" }))
}

function addColor2() {
    document.body.style.backgroundColor = "pink";

    localStorage.setItem({ color: "pink" })
}

function addColor3() {
    document.body.style.backgroundColor = "blue";
}

function addColor4() {
    document.body.style.backgroundColor = "green";
}

function addColor5() {
    document.body.style.backgroundColor = "grey";
}