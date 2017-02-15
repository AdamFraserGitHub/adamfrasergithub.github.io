var value = [2], yValue = [], quadrant = [];

value[0] = document.getElementById("angle1ValueOutput");
value[1] = document.getElementById("angle2ValueOutput");
yValue[0] = document.getElementById("angle1YValueOutput");
yValue[1] = document.getElementById("angle2YValueOutput");
quadrant[0] = document.getElementById("angle1QuadrantOutput");
quadrant[1] = document.getElementById("angle2QuadrantOutput");

setInterval(update, 1000/30);

function update() {
    value[0].innerHTML = (theta).toFixed(2);
    value[1].innerHTML = (seccondAngle(theta,trigFunction,units)).toFixed(2);
    yValue[0].innerHTML = (Math.sin(theta/180 * Math.PI)).toFixed(4);
    yValue[1].innerHTML = (Math.sin(theta/180 * Math.PI)).toFixed(4);
    
    if (theta <= 90) {
        quadrant[0].innerHTML = "1";
        quadrant[1].innerHTML = "2";
    } else if (theta > 90 && theta <= 180) {
        quadrant[0].innerHTML = "2";
        quadrant[1].innerHTML = "1";
    } else if (theta > 180 && theta <= 270) {
        quadrant[0].innerHTML = "3";
        quadrant[1].innerHTML = "4";
    } else {
        quadrant[0].innerHTML = "4";
        quadrant[1].innerHTML = "3";
    }
}