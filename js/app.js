const playerRow = document.querySelector("#player");
const boxes = document.querySelectorAll(".box");
const errorBox = document.querySelector("#error")

let gameOver = false;
let winner = '';

let player= 'X';


const startGame = ()=>{
    playerRow.textContent = `${player}'s turn!`
    boxes.forEach(box =>{
        box.addEventListener('click', ()=> writtenArea(box))
    })
}
startGame()

const writtenArea=(box)=>{
    if(box.textContent === ''){
        box.textContent = player
        changePlayer()
    }else{
        errorBox.textContent = "This box is already full !"
        setTimeout(()=>{
            errorBox.textContent = ''
        }, 2000)
    }
    
    win()
    if(gameOver == true){
        playerRow.textContent = `Game is over, ${winner} Won`
    }
}
const changePlayer = ()=>{
    if(player === 'X'){
        player = 'O'
        playerRow.textContent = `${player}'s turn!`
    }else if(player === 'O'){
        player = 'X'
        playerRow.textContent = `${player}'s turn!`
    }
}

const win = ()=>{
    checkRows()
    // checkColumn()
}

const checkRows = ()=>{
    // let rows1 = boxes[0].textContent == boxes[1].textContent && boxes[0].textContent == boxes[2].textContent && boxes[0] !== '';
    // if (rows1) console.log('Restart');
    // let rows2 = boxes[3].textContent == boxes[4].textContent && boxes[3].textContent == boxes[5].textContent && boxes[3] !== '';
    // if (rows2) console.log('Restart');
    let rows3 = boxes[6].textContent == boxes[7].textContent && boxes[6].textContent == boxes[8].textContent && boxes[6] !== '';
    if (rows3) console.log('Restart');
    if(rows3 ){
        gameOver = true
    }
    if(rows3) {
        winner = boxes[6].textContent
    } 
        
    // if(rows2) return winner = boxes[3].textContent
    // if(rows3) return winner = boxes[6].textContent
}
// const checkColumn = ()=>{
//     let column1 = boxes[0].textContent == boxes[3].textContent && boxes[0].textContent == boxes[6].textContent;
//     if(column1) console.log('Restart game');
// }