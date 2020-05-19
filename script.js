

let playerWins=0;
function computerPlay(){
    switch(Math.floor(Math.random()*2)){
        case 0: return "rock" ;break;
        case 1: return "paper";break;
        case 2: return "scissors";break;
    }

function play(playerChoice, computerChoice){

    if(playerChoice!="rock"||playerChoice!="paper"||playerChoice!="scissors"){
        return 2;
    }
    playerWin= false;
    
    let msg = `[PLAYER] ${playerChoice} vs. ${computerChoice} [COMPUTER]`
    console.log(msg);
    if(playerChoice==computerChoice){
        return 2;
    }

    if (computerChoice=="rock"){
        if(playerChoice=="paper"){
        playerWin=true;
        }
    }

    if(computerChoice=="paper"){
        if(playerChoice=="scissors"){
            playerWin=true;
        }
    }

    if(computerChoice=="scissors"){
        if(playerChoice =="rock"){
            playerWin=true;
        }
    }

    if(playerWin){
        console.log("YOU WIN") 
        return 0;
    }else{console.log("YOU LOSE")
    return 1;}

}

function round(){
    
    const pChoice = prompt("enter choice (rock/paper/scissors)");
    const cChoice = computerPlay();

    switch(play(pChoice,cChoice)){
        case 0: playerWins++; break;
        case 1: break;
        case 2: round();
    };
}

function game(){
    for(i=0;i<5;i++){
        round();
    }

    if(playerWins>=3){
        console.log("PLAYER WINS");
    }else{
        console.log("COMPUTER WINS");
    }
}

function testcall(){
    let msg = prompt("hello");
    console.log(msg);
}
}



