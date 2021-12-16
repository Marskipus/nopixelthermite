let size = 6
let maxWidth = 600
let allBoxes = []
let unchangedAllBoxes = []
const startBtn = document.querySelector('[data-start-button]')
const gridContainer = document.querySelector('[data-grid-container]')
startBtn.addEventListener('click', playRound)

function playRound() {
    //reset everything and then generate a board
    allBoxes = []
    unchangedAllBoxes = []
    selectedBoxes = []
    gridContainer.textContent = ""
    makeBlocks()
    selectBoxes(10)
    classes()
}


function makeBlocks() {

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";

        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.className = `box-${i}${j}`
            box.classList.add('box')
            allBoxes.push(`box-${i}${j}`)
            unchangedAllBoxes.push(`box-${i}${j}`)
            row.appendChild(box);
            box.addEventListener('click', selectBox)
        }
        document.getElementById('grid-container').appendChild(row);

        var boxes = document.getElementsByClassName("box");
        for (let k = 0; k < boxes.length; k++) {
            boxes[k].style.width = maxWidth / size + "px";
            boxes[k].style.height = maxWidth / size + "px";
        }
    }
    return [allBoxes]
}

function selectBox() {

}

function random(num) {
    return Math.floor(Math.random() * num)
}
let selectedBoxes = []

function selectBoxes(difficulty) {

    for (let i = 0; i < difficulty; i++) {
        selectedBoxes.push(allBoxes[random(allBoxes.length)])
        document.querySelector(`.${selectedBoxes[i]}`).classList.add('selected')
        allBoxes.splice(i, 1)
    }
    return selectedBoxes
}

function classes() {
    console.log(selectedBoxes)
    for (let i = 0; i < unchangedAllBoxes.length; i++) {
        let thebox = document.querySelector(`.${unchangedAllBoxes[i]}`)
        document.querySelector(`.${unchangedAllBoxes[i]}`).addEventListener('click', () => {
            
            if (thebox.classList.contains('selected')) {
            console.log('this was selected')
            choose(thebox)
            } else {
                console.log('this was not selected')
                wrongChoice(thebox)
            }
        })
    }
}
function choose(el) {
    el.classList.add("selected1");

}
function wrongChoice(el){
    el.classList.add('wrongchoice')
}