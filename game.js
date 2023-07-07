let playerCount=0;
let computerCount=0;
function getComputerChoice(computerChoice) //get the choice of computer
{
    let aRandomNumber=Math.floor(Math.random()*3);
    if(aRandomNumber=="0")
    {
        computerChoice= "Rock";
    }
    else if(aRandomNumber=="1")
    {
        computerChoice= "Paper";
    }
    else
    {
        computerChoice= "Scissors";
    }
    console.log(`The Computer's choice is ${computerChoice}`);
    return computerChoice.toLowerCase();
}

function getPlayerChoice(playerChoice) // get the choice of player
{
    playerChoice=prompt("What is your choice among Rock, Paper and Scissors?");
    console.log(`Your choice is ${playerChoice}`);
    return playerChoice.toLowerCase();
}

function playRound(playerSelection,computerSelection) // a play between computer and player for 1 round
{
    playerSelection=getPlayerChoice();
    computerSelection=getComputerChoice();

    if(playerSelection=="rock")
    {
        if(computerSelection=="rock")
         console.log("Its a draw");
        else if(computerSelection=="paper"){
         console.log("You lose! Paper beats Rock");computerCount+=1;}
        else{
         console.log("You win! Rock beats Scissors");playerCount+=1;}
    }

    if(playerSelection=="paper")
    {
        if(computerSelection=="rock"){
         console.log("You win! Paper beats rock");playerCount+=1;}
        else if(computerSelection=="paper"){
         console.log("Its a draw");
         }
        else{
         console.log("You lose! Scissors beats Rock");computerCount+=1;}
    }

    if(playerSelection=="scissors")
    {
        if(computerSelection=="rock"){
         console.log("You lose! Rock beats Scissors");computerCount+=1;}
        else if(computerSelection=="paper"){
         console.log("You win! Scissors beats Paper");playerCount+=1;}
        else
         console.log("Its a draw")
    }

}
function game() //loop the playRound() for 5 times and report the winner
{
    for(let i=0;i<3;i++)
    {
     playRound();  
    }
    if (playerCount>computerCount)
     console.log("Congratualtions! You Won the match!");
    else if(playerCount==computerCount){console.log("Its a draw match");}
    else
     console.log("You lost the match!")
    
}
game();