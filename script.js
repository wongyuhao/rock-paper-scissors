
window.onload= function(){
let round =0;
let playerWins=0;
let computerWins =0;


const buttons = Array.from(document.querySelectorAll(".clickme"))
const resultslog = document.querySelector("#resultslog");
const rounds = document.querySelector("#rounds");
const score = document.querySelector("#running-score");
const wl = document.querySelector("#wl");

buttons.forEach(button => 
    button.addEventListener('click',function(e){
        let pChoice = e.target.value;
        console.log(`player chose ${pChoice}`);
        let cChoice = computerPlay();
        
        play(pChoice,cChoice);
        }
    )
    
)

function updateScreen(result){
    updateLog(playerWin);

    score.textContent= `player wins:   ${playerWins} // computer wins: ${computerWins}`;
    rounds.textContent=`${round}/5 rounds.`;
    


    
    if(round>=5){
        if(playerWins>=3){
            alert("YOU WON THE GAME");
        }else{
            alert("YOU LOST THE GAME");
        }
        resetGame();
        updateScreen();
    }
    
}

function resetGame(){
    round=0;
    playerWins=0;
    computerWins=0;
    match.textContent=""
    wl.textContent="";
    document.getElementById('resultslog').innerHTML = 'Results:';

    
}

function computerPlay(){
    let num = Math.floor(Math.random()*3);
    let selection =""
    if(num===0){
        selection = "rock";
    }else if(num ===1){
        selection = "paper";
    }else if(num ===2){
        selection = "scissors";
    }

    console.log(`computer chose ${selection}`);
    return selection
}

function play(playerChoice, computerChoice){
    console.log("play() is called")
   while(playerChoice===computerChoice){
       console.log("tie! rerolling");
        computerChoice=computerPlay();
   }
    playerWin= false;
   round++;
    match.textContent=`${playerChoice} vs. ${computerChoice}`;
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
        
        playerWins++;
        
        
        
    }else{
       
        computerWins++;
      
    }

    updateScreen(playerWin);

    

    
}

function updateLog(result){
    if(round ===0){
        return;
    }
    const child = document.createElement("p");
    if(result){
        wl.textContent="YOU BEAT COMPUTER"
        child.textContent=`${round}. Player Wins`
    }else{
        wl.textContent="COMPUTER BEAT YOU"
        child.textContent=`${round}. Computer Wins`
    }
    resultslog.appendChild(child);
}





}



