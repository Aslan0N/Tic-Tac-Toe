const playerRow = document.querySelector("#player");
const boxes = document.querySelectorAll(".box");
const errorBox = document.querySelector("#error");
let player = "X";
let gameOver = false
let winner;


const startGame = () => {
  playerRow.textContent = `${player}'s turn!`;
  boxes.forEach((box) => {
    box.addEventListener("click", () => writtenArea(box));
  });
};

const writtenArea = (box) => {
  if (box.textContent === "") {
    box.textContent = player;
    changePlayer();
  } else {
    errorBox.textContent = "This box is already full !";
      box.style.borderColor = "red"
    setTimeout(() => {
      errorBox.textContent = "";
      box.style.borderColor = ""
    }, 2000);
  }

  win();
  checkTie();
  if(gameOver){
    playerRow.textContent = `${winner} Game is  won!`
    boxes.forEach(block => block.style.pointerEvents = 'none');
  }
};
const changePlayer = () => {
  if (player === "X") {
    player = "O";
    playerRow.textContent = `${player}'s turn!`;
  } else if (player === "O") {
    player = "X";
    playerRow.textContent = `${player}'s turn!`;
  }
};

const win = () => {
  checkRow()
  checkCol()
  checkDiagonal()
};

const checkRow = ()=>{
  let row1 = boxes[0].textContent == boxes[1].textContent && 
  boxes[0].textContent == boxes[2].textContent && boxes[0].textContent !== "";
  let row2 = boxes[3].textContent == boxes[4].textContent &&
  boxes[3].textContent == boxes[5].textContent && boxes[3].textContent !== ""
  let row3 = boxes[6].textContent == boxes[7].textContent &&
  boxes[6].textContent == boxes[8].textContent && boxes[6].textContent !== ""

    if(row1 || row2 || row3){
      gameOver= true
    }
    if(row1) return winner = boxes[0].textContent
    if(row2) return winner = boxes[3].textContent
    if(row3) return winner = boxes[6].textContent
}

const checkCol = ()=>{
  let col1 = boxes[0].textContent == boxes[3].textContent &&
  boxes[0].textContent == boxes[6].textContent && boxes[0].textContent !== ''
  let col2 = boxes[1].textContent == boxes[4].textContent &&
  boxes[1].textContent == boxes[7].textContent && boxes[1].textContent !== ''
  let col3 = boxes[2].textContent == boxes[5].textContent &&
  boxes[2].textContent == boxes[8].textContent && boxes[2].textContent !== ''
  
 if(col1 || col2 || col3){
  gameOver=true
 }
 if(col1) return winner = boxes[0].textContent
 if(col2) return winner = boxes[1].textContent
 if(col3) return winner = boxes[2].textContent
}

const checkDiagonal = ()=>{
  let diag1 = boxes[0].textContent == boxes[4].textContent && 
  boxes[0].textContent == boxes[8].textContent && boxes[0].textContent !== ''
  let diag2 = boxes[2].textContent == boxes[4].textContent && 
  boxes[2].textContent == boxes[6].textContent && boxes[2].textContent !== ''
  if(diag1 || diag2)  {
    gameOver=true
  }
  if(diag1) return winner = boxes[0].textContent
  if(diag2) return winner = boxes[2].textContent
}

function checkTie() {
    // tie
    // const values = [];
    // boxes.forEach(block => values.push(block.textContent))
    // if (!values.includes("")) {
    //     playerRow.textContent = "Tie !";
    //     boxes.forEach(block => block.style.pointerEvents = 'none');
    // }
    // ================
    let row1 = boxes[0].textContent == boxes[1].textContent && 
    boxes[0].textContent == boxes[2].textContent && boxes[0].textContent !== "";
    let row2 = boxes[3].textContent == boxes[4].textContent &&
    boxes[3].textContent == boxes[5].textContent && boxes[3].textContent !== ""
    let row3 = boxes[6].textContent == boxes[7].textContent &&
    boxes[6].textContent == boxes[8].textContent && boxes[6].textContent !== ""

    let col1 = boxes[0].textContent == boxes[3].textContent &&
    boxes[0].textContent == boxes[6].textContent && boxes[0].textContent !== ''
    let col2 = boxes[1].textContent == boxes[4].textContent &&
    boxes[1].textContent == boxes[7].textContent && boxes[1].textContent !== ''
    let col3 = boxes[2].textContent == boxes[5].textContent &&
    boxes[2].textContent == boxes[8].textContent && boxes[2].textContent !== ''

    let diag1 = boxes[0].textContent == boxes[4].textContent && 
    boxes[0].textContent == boxes[8].textContent && boxes[0].textContent !== ''
    let diag2 = boxes[2].textContent == boxes[4].textContent && 
    boxes[2].textContent == boxes[6].textContent && boxes[2].textContent !== ''
    // boxes.forEach(box=>{

    // })
    if(!row1 && !row2 && !row3 && !col1 && !col2 && !col3 && !diag1 && !diag2 &&
        boxes[0].textContent !== '' && boxes[1].textContent !== '' &&
         boxes[2].textContent !== '' && boxes[3].textContent !== '' && 
          boxes[4].textContent !== '' && boxes[5].textContent !== '' &&
          boxes[6].textContent !== '' && boxes[7].textContent !== '' && boxes[8].textContent !== '' ){
        playerRow.textContent = 'Tie !'
        boxes.forEach(block => block.style.pointerEvents = 'none');
    }
    
}
startGame();

// ======================================================
