let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let mgsContainer = document.querySelector(".mgs-container");
let mgs = document.querySelector("#mgs");

let turnO = true; //PlayerX, PlayerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//reset game
const resetGame = () => {
  turnO = true;
  enableBoxes();
  mgsContainer.classList.add("hide");
};

//adding boxes to event listener
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

//to make btn disable after winner announce
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//to make btn enable after started new game
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//to display winner on screen
const showWinner = (winner) => {
  mgs.innerText = `Congratulations, Winner is ${winner}`;
  mgsContainer.classList.remove("hide");
  disableBoxes();
};

//checking winning condition
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner");
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
