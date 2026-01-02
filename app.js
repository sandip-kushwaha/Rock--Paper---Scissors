
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
      msg.innerText = "Game was draw. play again.";
      msg.style.backgroundColor= "#412785";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win🏅.Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose😔. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
     const compChoice = genCompChoice();

     if(userChoice === compChoice){
        // Draw Game
        drawGame();
     }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper , scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // paper, rock
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
     }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

});