let h1= document.querySelector("h1");
let turnindecator= document.querySelector("#turnindicator");
let winner= document.querySelector("#winner");
let gamestartsection= document.querySelector("#gamestart");
let gameplaysection= document.querySelector("#gameplay");
let gameendsection= document.querySelector("#gameend");

// SOME IMPORTANT EVENTS IN GAME -----------------------------------------------------------------------

function startgame(){
    h1.style.display="none";
    turnindecator.style.display="flex";
    gamestartsection.style.display="none";
    gameplaysection.style.display="flex";
}

function returntohome(){
    resetgame();
    h1.style.display="flex";
    turnindecator.style.display="none";
    gamestartsection.style.display="flex";
    gameplaysection.style.display="none";
    gameendsection.style.display="none";
}

function playagain(){
    resetgame();
    turnindecator.style.display="flex";
    gameplaysection.style.display="flex";
    gameendsection.style.display="none";
}

function endgame(){
    turnindecator.style.display="none";
    gameplaysection.style.display="none";
    gameendsection.style.display="flex";
}

// CHOOSING FIRST PLAYER ----------------------------------------------------------------------------

let startingplayer="X";
let turn= document.querySelector("#turn");

let xinputbtn= document.querySelector("#Xoption");
let oinputbtn= document.querySelector("#Ooption");

xinputbtn.addEventListener("click", ()=>{
    startingplayer="X";
    turn.textContent= startingplayer;
})
oinputbtn.addEventListener("click", ()=>{
    startingplayer="O";
    turn.textContent= startingplayer;
})
turn.textContent= startingplayer;

// WINNING COMBINATIONS ----------------------------------------------------------------------------

let winningcombinations= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// CLICKING EVENT OF THE GAME BUTTONS ----------------------------------------------------------------

let gameboxes= document.querySelectorAll(".XObtn");

gameboxes.forEach((XObtn) => {
    XObtn.addEventListener("click", ()=>{
        if(startingplayer==="X"){
            XObtn.style.color="red";
            XObtn.textContent="X";
            startingplayer="O";
            turn.textContent= startingplayer;
        }
        else{
            XObtn.style.color="black";
            XObtn.textContent="O";
            startingplayer="X";
            turn.textContent= startingplayer;
        }
        XObtn.disabled= true;
        checkwinner();
    })
});

// RESET BUTTON -----------------------------------------------------------------------------------------------

const resetgame = () => {
    gameboxes.forEach((XObtn) => {
        XObtn.textContent = "";
        enablebtn();
    })
}

let resetbtn = document.querySelector("#resetbtn");

resetbtn.addEventListener("click", resetgame);

//CHECK WINNER FUNCTION ----------------------------------------------------------------------------------------

function checkwinner() {
    for (const value of winningcombinations) {

        let position1 = gameboxes[value[0]].textContent;
        let position2 = gameboxes[value[1]].textContent;
        let position3 = gameboxes[value[2]].textContent;

        if(position1 !="" && position2 !="" && position3 !=""){
            if(position1 === position2 && position2 ===position3){
                if(position1=="X"){
                    winner.style.color="red";
                }
                else{
                    winner.style.color="black";
                }
                winner.textContent= position1;
                disablebtn();
                endgame();
            }
        }

    }
}

// ENABLE AND DISABLE BUTTON FUNCTIONS------------------------------------------------------------------------------

const disablebtn= ()=>{
    gameboxes.forEach((XObtn)=>{
        XObtn.disabled=true;
    })
}
const enablebtn= ()=>{
    gameboxes.forEach((XObtn)=>{
        XObtn.disabled=false;
    })
}