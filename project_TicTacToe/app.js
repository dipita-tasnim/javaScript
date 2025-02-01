let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newGameBtnForDraw = document.querySelector("#new-btn-forDraw");
let msgContainer = document.querySelector(".msg-container");
let msgContainerDraw = document.querySelector(".msg-container-draw");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#draw");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turn0 == true) { // turn for player 0
            box.innerText = "O";
            box.style.color  = "#a36a3e";
            turn0 = false;
        }else{
            box.innerText = "X";
            box.style.color  = "#b0413e";
            turn0 = true;
        }
        box.disabled = true; //ekta button ekbar 0/x diye fillup hoye gele abar click korle jeno kono kaj na hoy/change na hoy.
        
        checkWinner();
        checkDraw();
    })
})

const checkWinner = () => {
    for (let arr of winPatterns) {
        let pos1Val = boxes[arr[0]].innerText;
        let pos2Val = boxes[arr[1]].innerText;
        let pos3Val = boxes[arr[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") { //box e X/O thakte hobe, khali thaka jabe na.
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }

    }
}

const checkDraw = () => {
    let count = 0;
    for (let box of boxes) {
        if (box.innerText != "") {
            count++;
        }
    }
    if (count == 9) {
        //console.log("Draw");
        showDraw();
    }
}
     
const showDraw = () => {  
    draw.innerText = "Draw!";
    msgContainerDraw.classList.remove("hide");
    msgContainer.classList.add("hide");
    disableBoxes(); //ekbar draw hoye gele then kono box e click korle jeno kono kaj na hoy. New game e jete hobe.
}
const showWinner = (winner) => {  //pos1Val ta winner e pass hobe.
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainerDraw.classList.add("hide");
    disableBoxes(); //ekbar winner peye gele then kono box e click korle jeno kono kaj na hoy. New game e jete hobe.
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}

newGameBtn.addEventListener("click", () => {
    resetGame();
})

newGameBtnForDraw.addEventListener("click", () => {
    resetGame();
})

resetBtn.addEventListener("click", () => {
    resetGame();
})

const resetGame = () => {
    for (let box of boxes) {
        box.innerText = "";    
    }
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainerDraw.classList.add("hide");
}