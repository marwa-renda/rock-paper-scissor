let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userScorePare = document.querySelector("#user-score");
const compScorePare = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=> {
    msg.innerText = "Game draw!, Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePare.innerText = userScore;
        msg.innerText = `You Win!🙄 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePare.innerText = compScore;
        msg.innerText = `You Lose!😂 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
            }
              showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener(("click"), ()=>{
        const userChoice = choice.querySelector("img").getAttribute("id");
        playGame(userChoice);
    })
})