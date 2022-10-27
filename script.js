function getComputerChoice(){
    let selection = Math.floor(Math.random()*3);
    console.log(selection);
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
        return true;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return false;
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        return true;
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        return false;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return true;
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        return false;
    }else return "null"; // Tie scenario
}

/*function game(){
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
}*/


buttons = document.querySelectorAll("button");
buttons.computerPoint = 0;
buttons.playerPoint = 0;
function game(){
    let resu = playRound(this.id, getComputerChoice());
    if(resu === true){
        buttons.playerPoint++;
        document.getElementsByClassName("playerScore")[0].innerHTML = `Player: ${buttons.playerPoint}`;
    }else if(resu === false){
        buttons.computerPoint++;
        document.getElementsByClassName("computerScore")[0].innerHTML = `Computer: ${buttons.computerPoint}`;
    }
    if(buttons.playerPoint == 5){
        document.getElementsByClassName("playerScore")[0].innerHTML = "You Win !";
        document.getElementsByClassName("computerScore")[0].innerHTML = "";
    }else if(buttons.computerPoint == 5){
        document.getElementsByClassName("playerScore")[0].innerHTML = "You Lose !";
        document.getElementsByClassName("computerScore")[0].innerHTML = "";
    }
    
}


buttons.forEach(button => button.addEventListener('click', game));


/*buttons.forEach(button => button.addEventListener('click', () => {
    console.log(playRound(button.id, getComputerChoice()));
}));*/

console.log(buttons);
