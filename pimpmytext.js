function pimp() {
    document.getElementById("demo").style.fontSize = "24pt";
}

function myFunction(checkbox) {
    if (checkbox.checked) {
        document.getElementById("demo").style.fontWeight = "bold";
        document.getElementById("demo").style.textDecoration = "underline";
        document.getElementById("demo").style.color = "green";
        document.getElementById("demo").style.textDecoration = "blink";
    }
    else {
      document.getElementById("demo").style.fontWeight = "normal";
    }
}
