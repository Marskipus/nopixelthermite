document.querySelector('[data-start-button]').addEventListener('click', test)

function test() {
    let size = 6
    let maxWidth = 600
    let allBoxes = []
    let unchangedAllBoxes = []
    let uniqueArray = []
    let selectedBoxes = []
    const log = console.log
    const startBtn = document.querySelector('[data-start-button]')
    const gridContainer = document.querySelector('[data-grid-container]')
    startBtn.addEventListener('click', playRound)

    function playRound() {
        //reset everything and then generate a board
        allBoxes = []
        unchangedAllBoxes = []
        selectedBoxes = []
        uniqueArray = []
        gridContainer.textContent = ""
        makeBlocks()
        selectBoxes(10)
        classes()
        check()
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
        //console.log(allBoxes)
        return allBoxes
    }
    //allBoxes = makeBlocks()

    function selectBox() {

    }

    function random(num) {
        return Math.floor(Math.random() * num)
    }


    function selectBoxes(difficulty) {

        for (let i = 0; i < difficulty; i++) {
            selectedBoxes.push(allBoxes[random(allBoxes.length)])
            document.querySelector(`.${selectedBoxes[i]}`).classList.add('red')
            sleep(1000).then(() => {
                document.querySelector(`.${selectedBoxes[i]}`).classList.remove('red')
                document.querySelector(`.${selectedBoxes[i]}`).classList.add('selected')
                allBoxes.splice(i, 1)
            })
            

        }
        return selectedBoxes
    }

    //remove duplicates in selectedBoxes
    uniqueArray = [...new Set(selectedBoxes)]

    function classes() {
        let score = 3
        log(unchangedAllBoxes)
        for (let i = 0; i < unchangedAllBoxes.length; i++) {
            let thebox = document.querySelector(`.${unchangedAllBoxes[i]}`)
            document.querySelector(`.${unchangedAllBoxes[i]}`).addEventListener('click', () => {
                if (thebox.classList.contains('selected')) {
                    console.log('this was selected')
                    choose(thebox)
                    check()
                } else if (thebox.classList.contains('selected1')) {
                    console.log('this was already selected')
                } else {
                    score -= 1
                    console.log('this was not selected')
                    wrongChoice(thebox)
                    if (score <= 0) {
                        sleep(500).then(() => {
                            alert('you failed')
                        })
                        //make start screen show up here
                    }
                }
            })
        }


        //return uniqueArray
    }

    function choose(el) {
        el.classList.add("selected1");
        el.classList.remove('selected')
    }

    function wrongChoice(el) {
        el.classList.add('wrongchoice')
    }
    

    function check() {
        //checks the classes on all boxes, returns if one still has the selected class. and announces winner if it can finish the loop
        for (let i = 0; i < unchangedAllBoxes.length; i++) {
            if (document.querySelector(`.${unchangedAllBoxes[i]}`).classList.contains('selected')) {
                return false
            }
        }
        console.log('winner')
    }
    
}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

test()