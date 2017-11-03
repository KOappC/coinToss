var heads = 1;
var tails = 2;
var floops = 0;
var correct = 0;

function toss() {
    coin = (Math.floor(Math.random() * 2) + 1);
    if(coin === 1){
        flip("heads");
    } else if (coin === 2) {
        flip("tails");
    }
}

function flip(coin) {
    document.getElementById("result").innerHTML = coin;
}

function headsChoice() {
    toss();
    document.getElementById("guess").innerHTML = "heads";
    document.getElementById("result");
    if (heads = true) {
        console.log("yay");
    }
}

function tailsChoice() {
    toss();
    document.getElementById("guess").innerHTML = "tails";
    document.getElementById("result");
}

var psyPercent = ((correct / floops) * 100);

function updateCounter() {
    document.getElementById("")
}

function totalFloops() {
    floops += 1;
    document.getElementById("totalFloops").innerHTML = floops;
}


/*

    Need to:

        1.)

*/