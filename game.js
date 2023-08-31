console.log("Piskvorky");

//Premeny
const p1 = "X", p2 = "O";
let moves = 0;
let moveComputer = false;
let isWinner = false;

let score = {
    player: 0,
    ai: 0
};

const scoreText = document.getElementById("score");
let buttons = document.getElementsByTagName("button");

let board = [
    "","","",
    "","","",
    "","",""
];

function play(pos){
    if(moveComputer == false){
        if(!board[pos] && isWinner == false){
            board[pos] = p1;
            buttons[pos].innerHTML = p1;
            buttons[pos].style.backgroundColor = "green";
            moveComputer = true;
            moves++;
            checkWin();
            if(isWinner == false){
                playPc();
            }
        }
    }

    

}
