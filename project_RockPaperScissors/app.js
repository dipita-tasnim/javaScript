let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); //console.log(choice.id); eta likhleo jeta te click korbo id chole ashe
        //test
        //console.log("choices was clicked", userChoice);
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"]; //idx 0,1,2--total 3 ta
    const randIdx = Math.floor(Math.random() * 3); //so 3 diye gun
    return option[randIdx]; //idx 0,1,2 er value(rock/paper/scissors) return kore dibo
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if (userChoice ===compChoice) {
        //draw game
        drawGame();
    }else{
        let userWin = true; //true-->suppose user win
        if (userChoice === "rock") {
            //paper, scissors (two options for computer)
            //if comp choose paper? then user lose(false) otherwise or by choosing scissors user win(true)
            compChoice ==="paper" ? (userWin = false) : (userWin = true);
        }else if (userChoice === "paper") {
            //scissors, rock (two options for computer)
            //if comp choose rock? then user lose(false) otherwise or by choosing scissors user win(true)
            compChoice ==="scissors" ? (userWin = false) : (userWin = true);
        }else if (userChoice === "scissors") {
            //rock, paper (two options for computer)
            //if comp choose paper? then user lose(false) otherwise or by choosing rock user win(true)
            compChoice ==="rock" ? (userWin = false) : (userWin = true);
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {
    //console.log("Game is draw")
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
