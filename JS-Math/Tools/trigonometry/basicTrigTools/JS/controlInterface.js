var trigFunction = "sin",
    units = "deg";

var functionTitle = document.getElementById("functionTitle"),
    unitsTitle = document.getElementById("unitsTitle");

//trigonometric function controls
function sineSelected(){
    trigFunction = "sin";
    functionTitle.innerHTML = "function: sine";
}
function cosineSelected(){
    trigFunction = "cos";
    functionTitle.innerHTML = "function: cosine";
}
function tangentSelected(){
    trigFunction = "tan";
    functionTitle.innerHTML = "function: tangent";
}


//units controls
function degreesSelected(){
    units = "deg";
    unitsTitle.innerHTML = "units: degrees";
}
function radiansSelected(){
    units = "rad";
    unitsTitle.innerHTML = "units: radians";
}