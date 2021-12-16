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

eval("let size = 6\nlet maxWidth = 600\nlet allBoxes = []\nlet unchangedAllBoxes = []\nconst startBtn = document.querySelector('[data-start-button]')\nconst gridContainer = document.querySelector('[data-grid-container]')\nstartBtn.addEventListener('click', playRound)\n\nfunction playRound() {\n    //reset everything and then generate a board\n    allBoxes = []\n    unchangedAllBoxes = []\n    selectedBoxes = []\n    gridContainer.textContent = \"\"\n    makeBlocks()\n    selectBoxes(10)\n    classes()\n}\n\n\nfunction makeBlocks() {\n\n    for (let i = 0; i < size; i++) {\n        let row = document.createElement('div');\n        row.className = \"row\";\n\n        for (let j = 0; j < size; j++) {\n            let box = document.createElement('div');\n            box.className = `box-${i}${j}`\n            box.classList.add('box')\n            allBoxes.push(`box-${i}${j}`)\n            unchangedAllBoxes.push(`box-${i}${j}`)\n            row.appendChild(box);\n            box.addEventListener('click', selectBox)\n        }\n        document.getElementById('grid-container').appendChild(row);\n\n        var boxes = document.getElementsByClassName(\"box\");\n        for (let k = 0; k < boxes.length; k++) {\n            boxes[k].style.width = maxWidth / size + \"px\";\n            boxes[k].style.height = maxWidth / size + \"px\";\n        }\n    }\n    return [allBoxes]\n}\n\n\n//makeBlocks()\n\nfunction selectBox() {\n\n}\n\nfunction random(num) {\n    return Math.floor(Math.random() * num)\n}\nlet selectedBoxes = []\n\nfunction selectBoxes(difficulty) {\n\n    for (let i = 0; i < difficulty; i++) {\n        selectedBoxes.push(allBoxes[random(allBoxes.length)])\n        document.querySelector(`.${selectedBoxes[i]}`).classList.add('selected')\n        allBoxes.splice(i, 1)\n    }\n    return selectedBoxes\n}\n//selectBoxes(10)\n\nfunction classes() {\n    console.log(selectedBoxes)\n    for (let i = 0; i < unchangedAllBoxes.length; i++) {\n        let thebox = document.querySelector(`.${unchangedAllBoxes[i]}`)\n        document.querySelector(`.${unchangedAllBoxes[i]}`).addEventListener('click', () => {\n            \n            if (thebox.classList.contains('selected')) {\n            console.log('this was selected')\n            choose(thebox)\n            } else {\n                console.log('this was not selected')\n                wrongChoice(thebox)\n            }\n        })\n        //     if (e.target.classList.contains('selected')) {\n        //         console.log('this was selected')\n        //         choose(this)\n        //     } else {\n        //         console.log('this was not selected')\n        //         //incorrectClick()\n        //     }\n        // })\n    }\n}\nfunction choose(el) {\n    el.classList.add(\"selected1\");\n\n}\nfunction wrongChoice(el){\n    el.classList.add('wrongchoice')\n}\n\n//# sourceURL=webpack://nopixelthermite/./src/index.js?");

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