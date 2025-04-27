 
let playerScore = 0;
let computerScore = 0;



function getComputerChoice(){
    num = Math.floor(Math.random() * 3) + 1;
    console.log("Computer Number: " + num);
    return num;

}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener("click", function(){
    let userInput = 1;
    console.log("User Number: " + userInput);
    let computerCoice = getComputerChoice();
    compareInput(userInput, computerCoice);
    return userInput;

});
paperButton.addEventListener("click", function(){
    let userInput = 2;
    console.log("User Number: " + userInput);
    let computerCoice = getComputerChoice();
    compareInput(userInput, computerCoice);
    return userInput;
 });
scissorsButton.addEventListener("click", function(){
    let userInput = 3;
    console.log("User Number: " + userInput);
    let computerCoice = getComputerChoice();
    compareInput(userInput, computerCoice);
    return userInput;
});


function compareInput(userInput, num){
    switch(true){
        case (userInput == 1 && num == 1):
        case (userInput == 2 && num == 2):
        case (userInput == 3 && num == 3):
            document.getElementById("commentary").innerHTML = "No one won";
            console.log("No one Won");
            break;
        case (userInput == 1 && num == 3):
        case (userInput == 2 && num == 1):
        case (userInput == 3 && num == 2):
            document.getElementById("commentary").innerHTML = "You Won!";
            console.log("You Won");
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
            break;
        case (userInput == 1 && num == 2):
        case (userInput == 2 && num == 3):
        case (userInput == 3 && num == 1):
            document.getElementById("commentary").innerHTML = "You Lost!";
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
            console.log("You Lost");
            break;
        default:
            console.log("hi how are you here?");
            break;

    }
    if (playerScore == 3 ){
        document.getElementById("commentary").innerHTML = "You won the Game!";
        computerScore = 0;
        playerScore = 0;
    }
    if (computerScore == 3){
        document.getElementById("commentary").innerHTML = "You lost the Game!";
        computerScore = 0;
        playerScore = 0;
    }
}


 
