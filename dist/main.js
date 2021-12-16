/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.querySelector('[data-start-button]').addEventListener('click', test)\n\nfunction test() {\n    let size = 6\n    let maxWidth = 600\n    let allBoxes = []\n    let unchangedAllBoxes = []\n    let uniqueArray = []\n    let selectedBoxes = []\n    const log = console.log\n    const startBtn = document.querySelector('[data-start-button]')\n    const gridContainer = document.querySelector('[data-grid-container]')\n    startBtn.addEventListener('click', playRound)\n\n    function playRound() {\n        //reset everything and then generate a board\n        allBoxes = []\n        unchangedAllBoxes = []\n        selectedBoxes = []\n        uniqueArray = []\n        gridContainer.textContent = \"\"\n        makeBlocks()\n        selectBoxes(10)\n        classes()\n        check()\n    }\n\n    function makeBlocks() {\n\n        for (let i = 0; i < size; i++) {\n            let row = document.createElement('div');\n            row.className = \"row\";\n\n            for (let j = 0; j < size; j++) {\n                let box = document.createElement('div');\n                box.className = `box-${i}${j}`\n                box.classList.add('box')\n                allBoxes.push(`box-${i}${j}`)\n                unchangedAllBoxes.push(`box-${i}${j}`)\n                row.appendChild(box);\n                box.addEventListener('click', selectBox)\n            }\n            document.getElementById('grid-container').appendChild(row);\n\n            var boxes = document.getElementsByClassName(\"box\");\n            for (let k = 0; k < boxes.length; k++) {\n                boxes[k].style.width = maxWidth / size + \"px\";\n                boxes[k].style.height = maxWidth / size + \"px\";\n            }\n        }\n        //console.log(allBoxes)\n        return allBoxes\n    }\n    //allBoxes = makeBlocks()\n\n    function selectBox() {\n\n    }\n\n    function random(num) {\n        return Math.floor(Math.random() * num)\n    }\n\n\n    function selectBoxes(difficulty) {\n\n        for (let i = 0; i < difficulty; i++) {\n            selectedBoxes.push(allBoxes[random(allBoxes.length)])\n\n            document.querySelector(`.${selectedBoxes[i]}`).classList.add('selected')\n            allBoxes.splice(i, 1)\n\n        }\n        return selectedBoxes\n    }\n\n    //remove duplicates in selectedBoxes\n    uniqueArray = [...new Set(selectedBoxes)]\n\n    function classes() {\n        log(unchangedAllBoxes)\n        for (let i = 0; i < unchangedAllBoxes.length; i++) {\n            let thebox = document.querySelector(`.${unchangedAllBoxes[i]}`)\n            document.querySelector(`.${unchangedAllBoxes[i]}`).addEventListener('click', () => {\n                if (thebox.classList.contains('selected')) {\n                    console.log('this was selected')\n                    choose(thebox)\n                    check()\n                } else if (thebox.classList.contains('selected1')) {\n                    console.log('this was already selected')\n                } else {\n                    console.log('this was not selected')\n                    wrongChoice(thebox)\n                }\n            })\n        }\n\n\n        //return uniqueArray\n    }\n\n    function choose(el) {\n        el.classList.add(\"selected1\");\n        el.classList.remove('selected')\n    }\n\n    function wrongChoice(el) {\n        el.classList.add('wrongchoice')\n    }\n    \n\n    function check() {\n        //checks the classes on all boxes, returns if one still has the selected class. and announces winner if it can finish the loop\n        for (let i = 0; i < unchangedAllBoxes.length; i++) {\n            if (document.querySelector(`.${unchangedAllBoxes[i]}`).classList.contains('selected')) {\n                return false\n            }\n        }\n        console.log('winner')\n    }\n    \n}\n\ntest()\n\n//# sourceURL=webpack://nopixelthermite/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;