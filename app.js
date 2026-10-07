let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["ROCK" , "PAPER", "SCISSOR"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const draw = () => {
    console.log('game draw.');
    msg.innerText = "GAME DRAW. PLAY AGAIN!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++ ;
        userScorePara.innerText = userScore;
        console.log("YOU WIN!!");
        msg.innerText = `YOU WIN!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++ ;
        compScorePara.innerText = compScore;
        console.log("OOPS, YOU LOSE!!");
        msg.innerText = `OOPS, YOU LOSE!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    //generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice);

    if(userChoice === compChoice) {
        draw();
    }else{
        let userWin = true ;
        if(userChoice === "ROCK"){
            userWin = compChoice === "PAPER" ? false: true;
        }else if(userChoice === "PAPER"){
            userWin = compChoice === "SCISSOR" ? false: true;
        }else{
            userWin = compChoice === "ROCK" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
} 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})