document.getElementById('toss').onclick = toss;

var heads = 0;
var tails = 0;
function toss() {
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("heads");
    }else{
        flip("tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};