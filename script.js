function getComputerChoice(){
    let selection = Math.floor(Math.random()*3);
    switch(selection){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissor";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissor"){
        return "You Win! Rock beats Scissor";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        return "You Win! Scissor beats Paper";
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissor";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        return "You Lose! Scissor beats Paper";
    }else return "It's a Draw!"; // Tie scenario
}

function game(){
    let playerPoint = 0;
    let computerPoint = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        playerSelection = playerSelection.toLowerCase();
        let result = playRound(playerSelection,getComputerChoice());
        console.log(result);
        if (result.split(' ').slice(0,2).join(' ') == "You Win!"){
            playerPoint++;
        }else computerPoint++;
    }
    if (playerPoint > computerPoint){
        console.log("YOU WIN THE GAME");
    }else console.log("YOU LOSE THE GAME");
}