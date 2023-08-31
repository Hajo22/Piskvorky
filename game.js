console.log("Piskvorky");

//Premeny
const p1 = "X", p2 = "O"; //p1 = hráč | p2 = počítač
let moves = 0; //Počet ťahov
let moveComputer = false; //Zisti kto je na rade
let isWinner = false; //Skontroluje či už existuje víťaz

let score = {
    player: 0,
    ai: 0
};

const scoreText = document.getElementById("score");
let buttons = document.getElementsByTagName("button");

//Vytvorenie hracieho poľa
let board = [
    "","","",
    "","","",
    "","",""
];

//Funkcia pre hranie hráča
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

    //Funkcia pre hranie počítača
    function playPc(){
        let rnd = Math.floor(Math.random() * 9);
        if(!board[rnd]){
            board[rnd] = p2;
            buttons[rnd].innerHTML = p2;
            buttons[rnd].style.backgroundColor = "brown";
            moveComputer = false;
            moves++;
            checkWin();
        }else{
            playPc();
        }
    }
}

//Funkcia pre zistenie výhry alebo remízy
function checkWin(){
    if(moves >= 5){
        //Overenie výhry hráča
        if(
            board[0] == p1 && board[1] == p1 && board[2] == p1 ||
            board[3] == p1 && board[4] == p1 && board[5] == p1 ||
            board[6] == p1 && board[7] == p1 && board[8] == p1 ||
            board[0] == p1 && board[3] == p1 && board[6] == p1 ||
            board[1] == p1 && board[4] == p1 && board[7] == p1 ||
            board[2] == p1 && board[5] == p1 && board[8] == p1 ||
            board[0] == p1 && board[4] == p1 && board[8] == p1 ||
            board[2] == p1 && board[4] == p1 && board[6] == p1
        ){
            isWinner = true;
            score.player++;
            updateScore();
        }
        //Overenie výhry počítača
        else if(
            board[0] == p2 && board[1] == p2 && board[2] == p2 ||
            board[3] == p2 && board[4] == p2 && board[5] == p2 ||
            board[6] == p2 && board[7] == p2 && board[8] == p2 ||
            board[0] == p2 && board[3] == p2 && board[6] == p2 ||
            board[1] == p2 && board[4] == p2 && board[7] == p2 ||
            board[2] == p2 && board[5] == p2 && board[8] == p2 ||
            board[0] == p2 && board[4] == p2 && board[8] == p2 ||
            board[2] == p2 && board[4] == p2 && board[6] == p2
        ){
            isWinner = true;
            score.ai++;
            updateScore();
        }else{
            if(moves >= 9){
                isWinner = true;
                alert("Remíza!");
            }
        }
    }
}

//Funkcia pre resetovanie hry
function resetGame(){
    for(let i = 0; i < board.length; i++){
        board[i] = "";
        buttons[i].innerHTML = "-";
        buttons[i].style.backgroundColor = "gray";
    }
    moves = 0;
    moveComputer = false;
    isWinner = false;
}

//Funkcia pre aktualizovanie skóre
function updateScore(){
    scoreText.innerHTML = `Hráč: ${score.player} Počítač: ${score.ai}`;
}
