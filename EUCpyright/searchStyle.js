var pallets = [
                {name:'crimson & sulu', bg:'rgb(255,21,67)', main:'rgb(193,247,107)'},
                {name:'spring green & red ribbon', bg:'rgb(0, 255, 128)', main:'rgb(235, 16, 47)'},
                {name:'Bright Turquoise & Persian Rose ', bg:'rgb(8,232,222)', main:'rgb(254,40,162)'},
                {name:'Violet Red & Reef', bg:'rgb(199, 21, 133)', main:'rgb(255, 127, 80)'},
                {name:'Pink rose & puke green', bg:'rgb(241, 53, 150)', main:'rgb(181, 253, 150)'},
                {name:'pure red & perfect orange', bg:'rgb(150, 0, 255)', main:'rgb(255, 0, 150)'}
            ];

var palletSelect = pallets[Math.floor(Math.random() * pallets.length)];

var sheet = document.createElement('style')
sheet.innerHTML = 'html,body {background-color:' + palletSelect.bg + '} .mainColor {color:' + palletSelect.bg + '; background-color:' + palletSelect.main + ';} ::placeholder {color:' + palletSelect.bg + ';opacity:1;} h1,h2,.clock{color:' + palletSelect.main + ';}';
document.body.appendChild(sheet);


function startTime() {
    var today = new Date();
    var h = today.getHours() + 1;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeywoo').innerHTML = "Current CEST: " +
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}