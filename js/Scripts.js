// JavaScript source code
turn = 1;
x_counter = 0;
winner = false;
turns = 0;

function gotoPage(x) {
    if (x == 1) location.href = "home.html";
    if (x == 2) location.href = "xo.html";
    if (x == 3) location.href = "thanks.html";
}

function makeMenu() {
    s = "<div class='oneMenuItem' onclick='gotoPage(1)'>Home</div>";
    s = s + "<div class='oneMenuItem' onclick='gotoPage(2)'>Game</div>";
    s = s + "<div class='oneMenuItem' onclick='gotoPage(3)'>Thanks</div>";
    document.getElementById("menu").innerHTML = s;
}

function anotherGame() {
    location.reload();
}
function play(x) {
    if (turn == 1) {
        if (document.getElementById(x).innerHTML == "") {
            document.getElementById(x).innerHTML = "X";
            turn = 2;
            turns++;
        }
    }
    else {
        if (document.getElementById(x).innerHTML == "") {
            document.getElementById(x).innerHTML = "O";
            turn = 1;
            turns++;
        }
    }
    for (i = 1; i <= 3; i++) {
        if (document.getElementById("a1" + i).innerHTML != "" && document.getElementById("a1" + i).innerHTML == document.getElementById("a2" + i).innerHTML && document.getElementById("a2" + i).innerHTML == document.getElementById("a3" + i).innerHTML) {
            document.getElementById("winner").innerHTML = "the Winner is " + document.getElementById("a1" + i).innerHTML
            winner = true;
        }
        if (document.getElementById("a" + i + "1").innerHTML != "" && document.getElementById("a" + i + "1").innerHTML == document.getElementById("a" + i + "2").innerHTML && document.getElementById("a" + i + "2").innerHTML == document.getElementById("a" + i + "3").innerHTML) {
            document.getElementById("winner").innerHTML = "the Winner is " + document.getElementById("a" + i + "1").innerHTML
            winner = true;
        }
        if (document.getElementById("a11").innerHTML != "" && document.getElementById("a11").innerHTML == document.getElementById("a22").innerHTML && document.getElementById("a22").innerHTML == document.getElementById("a33").innerHTML) {
            winner = true;
            document.getElementById("winner").innerHTML = "the Winner is " + document.getElementById("a11").innerHTML
        }
        if (document.getElementById("a31").innerHTML != "" && document.getElementById("a31").innerHTML == document.getElementById("a22").innerHTML && document.getElementById("a22").innerHTML == document.getElementById("a13").innerHTML) {
            winner = true;
            document.getElementById("winner").innerHTML = "the Winner is " + document.getElementById("a31").innerHTML
        }

    }
    if (winner == false && turns == 9)
        document.getElementById("winner").innerHTML = "There is a tie"
    console.log(turns, winner);

}
