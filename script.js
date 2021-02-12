function myFunction() {
    var y = document.getElementById("lineContainer")
    var x = document.getElementById("myTopNav");
    var z = document.getElementById("navbar")
    var a = document.getElementById("midNav")

    y.classList.toggle("change");

    if (x.className === "nav-block") {
        x.className += " responsive";
        z.className += " responsive";
        a.className += " loading";
    } else {
        x.className = "nav-block";
        z.className = "nav";
        a.className = "nav-links";
    }
}

function copyToClipboard(element) {
    console.log("copied!");
    let clipText = element.parentNode.innerText;
    console.log(clipText)
    navigator.clipboard.writeText(clipText)
}