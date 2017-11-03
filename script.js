document.getElementById("headsChoice").onclick = headsChoice;
document.getElementById("tailsChoice").onclick = tailsChoice;

var heads = 0;
var tails = 0;
function toss() {
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("heads");
    }else{
        flip("tails");
    }
}

function flip(coin) {
    document.getElementById("result").innerHTML = coin;
}

/*

    Need to:

        1.) heads or tails selection connects to the buttons

*/