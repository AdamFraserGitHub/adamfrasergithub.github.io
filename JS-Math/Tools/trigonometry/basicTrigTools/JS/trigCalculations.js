/*
finds the seccond (Partner) angle from the first
e.g. seccondAngle(Math.PI*0.25, 'sin', 'rad'){
    ...
}
would return Math.PI*0.75
*/

function seccondAngle(firstAngle, trigFunction, units) {
    
    
    //sine calculator
    if (trigFunction == "sin") {
        if (units == "deg") {
            if (firstAngle >= 0 && firstAngle <= 180) {
                return 180 - firstAngle; 
            } else if (firstAngle < 0 || firstAngle > 180) {
                return 360 - (firstAngle - 180);
            }
        } else if (units == "rad") {
            if (firstAngle >= 0) {
                return Math.PI - firstAngle;
            } else if (firstAngle < 0) {
                return Math.PI + firstAngle;
            }
        }
    }


    //cosine calculator
    else if (trigFunction == "cos") {
        if (units == "deg") {
            if (firstAngle >= 0) {
                return 180 - firstAngle;
            } else if (firstAngle < 0) {
                return 180 + firstAngle;
            }
        } else if (units == "rad") {
            if (firstAngle >= 0) {
                return Math.PI - firstAngle;
            } else if (firstAngle < 0) {
                return Math.PI + firstAngle;
            }
         }
    }

    //tangent calculator
    else if (trigFunction == "tan") {
        if (units == "deg") {
            if (firstAngle >= 0) {
                return 180 - firstAngle; 
            } else if (firstAngle < 0) {
                return 180 + firstAngle;
            }
        } else if (units == "rad") {
            if (firstAngle >=0 ) {
                return Math.PI - firstAngle;
            } else if (firstAngle < 0) {
                return Math.PI + firstAngle;
            }
        }
    }
}