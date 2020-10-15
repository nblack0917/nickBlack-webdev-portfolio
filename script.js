function myFunction() {
    var y = document.getElementById("lineContainer")
    var x = document.getElementById("myTopNav");
    var z = document.getElementById("navbar")

    y.classList.toggle("change");

    if (x.className === "nav-block") {
        x.className += " responsive";
        console.log(y)
        console.log(x)
        console.log(z)
        z.className += " responsive";
    } else {
        x.className = "nav-block";
        z.className = "nav";
        console.log(y)
        console.log(x)
        console.log(z)
    }
}