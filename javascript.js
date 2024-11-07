const choice = ["Rock", "Paper", "Scissors"];
const choiceLength = choice.length;


function getHumanChoice ()
{
    
    let askAnswer = prompt("Rock, Paper, or Scissors?");
    
    let answer = askAnswer.toLowerCase();
    let humanAnswer;

    if (answer == "rock")
    {
        humanAnswer = choice[0];
    }

    if (answer == "paper")
    {
        humanAnswer = choice[1];
    }

    if (answer == "scissors")
    {
        humanAnswer = choice[2];
    }
    return humanAnswer;
}

function getComputerChoice ()
{

    let random = Math.floor(Math.random()*choiceLength);
    let compAnswer = choice[random];
    return compAnswer;
}


function playGame ()
{
    let round = 1;

    let humanScore = 0;
    let computerScore = 0;
    function playRound( humanChoice, compChoice)
    {
        console.log(" You chose " + humanChoice);
        console.log(" I chose " + compChoice);

        if (humanChoice == compChoice)
        {
            console.log("It's a tie!");
        }
        else if (humanChoice == "Rock" && compChoice == "Paper")
        {
            console.log("Ha! I win!");
            computerScore ++;
        }
        else if (humanChoice == "Rock" && compChoice == "Scissors")
        {
            console.log("Boo! I lost!");
            humanScore ++;
        }
        else if (humanChoice == "Paper" && compChoice == "Scissors")
        {
            console.log("Ha! I win!");
            computerScore ++;
        }
        else if (humanChoice == "Paper" && compChoice == "Rock")
        {
            console.log("Boo! I lost!");
            humanScore ++;
        }
        else if (humanChoice == "Scissors" && compChoice == "Rock")
        {
            console.log("Ha! I win!");
            computerScore ++;
        }
        else if (humanChoice == "Scissors" && compChoice == "Paper")
        {
            console.log("Boo! I lost!");
            humanScore ++;
        }
        else if (humanChoice == null)
        {
            console.log("Did you spell your answer correctly? I guess I won't take a point...");
        }
    }
    
    while (round < 6)
    {
        console.log("Round " + round);
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Scores: My Score - " + computerScore + " Your Score: " + humanScore);
        if (round == 5)
            {
                console.log("Final Score: " + computerScore + " - " + humanScore);
                if (computerScore > humanScore)
                    {
                        console.log("Eat my gigahertz human!")
                    }
                if (computerScore < humanScore)
                    {
                        console.log("This is why I'm only a computer...")
                    }
                if (computerScore == humanScore)
                    {
                        console.log("Rematch! We must see who is better!")
                    }
            }
        round ++;
    } 
}

playGame();
