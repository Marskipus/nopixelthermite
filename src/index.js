let size = 6
let maxWidth = 600
let allBoxes = []
let unchangedAllBoxes = []
function makeBlocks() {

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";

        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.className = `box-${i}${j}`
            box.classList.add('box')
            allBoxes.push(`box-${i}${j}`)
            row.appendChild(box);
            box.addEventListener('click',selectBox)
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

//since boxes are removed from allBoxes if they are selected, i need an unchanged array to add the event listeners
unchangedAllBoxes = allBoxes

makeBlocks()
function selectBox(){

}
function random(num){
    return Math.floor(Math.random()*num)
}
let selectedBoxes = []
function selectBoxes(difficulty){

    for(let i = 0; i < difficulty; i++){
        selectedBoxes.push(allBoxes[random(allBoxes.length)])
        document.querySelector(`.${selectedBoxes[i]}`).classList.add('selected')
        allBoxes.splice(i,1)
    }
    return selectedBoxes
}
selectBoxes(10)

function classes() {
    console.log(unchangedAllBoxes)
    for(let i = 0; i < unchangedAllBoxes.length; i++) {
        document.querySelector(`.${unchangedAllBoxes[i]}`).addEventListener('click', () => {
            if (document.querySelector(`.${unchangedAllBoxes[i]}`).classList.contains('selected')) {
                console.log('this was selected')
            } else {
                console.log('this was not selected')
            }
        })
    }
}
classes()




