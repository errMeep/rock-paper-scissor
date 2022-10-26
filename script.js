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
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        return "You Win! Rock beats Scissor";
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection.toLowerCase() == "scissor" && computerSelection == "paper"){
        return "You Win! Scissor beats Paper";
    }else if(playerSelection.toLowerCase() == "scissor" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissor";
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissor"){
        return "You Lose! Scissor beats Paper";
    }else return "It's a Draw!";
}