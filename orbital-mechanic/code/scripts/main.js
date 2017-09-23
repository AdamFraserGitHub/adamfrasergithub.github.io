var canvas = document.getElementById("mainCanvas"),
    ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var width = 2000,
    height = 1000;

var cycleCount = 0;

var boddies = simulations[4];
window.alert("hi this program only really works on desktops at the moment if you are on desktop press f12 go to the console tab and type halpPlz(); to get info about the program and how to use it. if you're almost as wierd as me and would love to see this (when its finished) as an app don't wory there will be an app        (nur android weil android ist uber alles!)");

setInterval(loop, 1000/30);


function loop() {
    update();
    render();
}




function update() {
    //calls method to calculate and apply forces due to gravity
    applyForceFromGravity(boddies);

    //cycles through each body and applys acceleration and velocity
    for(var i = 0; i < boddies.length; i++) {
        applyAcceleration(boddies[i]);
        applyVelocity(boddies[i]);
    }
    
}




function render() {
    if (cycleCount > 150) {
        ctx.clearRect(0,0,width,height);
        ctx.fillStyle = "rgb(50,50,50)";
        ctx.rect(0,0,width,height);
        ctx.fill();
        cycleCount = 0;
    }
    ctx.fillStyle = "rgba(50,50,50,0.4)";
    ctx.rect(0,0,width,height);
    ctx.fill();
    for(var i = 0; i < boddies.length; i++) {

        ctx.beginPath();
            ctx.arc(boddies[i].x, boddies[i].y, boddies[i].m * 2, Math.PI * 2, false);
            ctx.fillStyle = boddies[i].color;
            ctx.fill();
        ctx.closePath();
    
        //if uncommented draws text at center of body denoting its ID
        // ctx.beginPath();
        //     ctx.font = "12px Arial";
        //     ctx.fillStyle = "rgb(0,0,0)";
        //     ctx.fillText(i, boddies[i].x - 2.5, boddies[i].y + 2.5);
        // ctx.closePath();
    }

    cycleCount++;
}

function halpPlz() {
    console.log("this is the pre-beta in-dev version of a program which will be called orbital mechanic which will allow people to mess around with orbits with others over the internet and learn about orbital and celestial mechanics to a high degree");
    console.log("in the end the program will not only simulate simple phenomena like gravity and tidal heating but complex ones too such as time dilation, radiation pressure, extreme spacial distortion and the effect of advanced civilisations on celestial objects");
    console.log("");
    console.log("but right now its just a simulator engine for 6 hard-coded scenarios");
    console.log("to open a simulation type boddies = simulation[NUM]        where num is the simulation number you want to luanch");
    console.log("");
    console.log("theese are a list of simulations you can watch");
    console.log("===============================================");
    console.log("[0] - 5 boddies in a \"die\" arangement");
    console.log("[1] - 2 small planets around a larger one");
    console.log("[2] - 3 perfectly spaced planets with 2 in a binary arangement and one at the barycenter, this simulation should be stable indefinatly but isn't due to the way javascript handles floating point numbers");
    console.log("[3] - 2 planets in a stable binary orbit");
    console.log("[4] - a simple trinary system which should be stable (same story as [2])");
    console.log("[5] - 4 boddies (moons?) orbiting a larger boddy (planet?) of equal distance, velocity (magnitude) and mass");
    console.log("");
    console.log("a note to any other code junkies: yes i know that you can solve JS's floating point problem with dedicated classes and yes i know my code is horrificly inefficient so dont cruicify me.");
    console.log("");
    console.log("the code (and dev logs) for this project are available on github under the GNU v3.0 license https://github.com/AdamFraserGitHub/Orbital-Mechanic")
}