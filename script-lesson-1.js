// QUIZ 1

let quesLetter = document.querySelector(".quizLeftBackground h1");
let optionBoxes1 = document.querySelectorAll(".q1-col1s-answerBoxes");
let optionBoxes2 = document.querySelectorAll(".q1-col2s-answerBoxes");
let allOptionBoxes = [...optionBoxes1, ...optionBoxes2];

let seikai = 0;

function correctAns(optionBox, optionText) {
    optionBox.style.backgroundColor = "greenyellow";
    optionText.style.color = "black";

    seikai = seikai + 1;
}

let mistakes = 0;

function incorrectAns(optionBox, optionText) {
    optionBox.style.backgroundColor = "#FF4C4C";
    optionText.style.color = "black";

    mistakes = mistakes + 1;
}

function revertBack(optionBox, optionText) {
    optionBox.style.backgroundColor = "#1C1C1C";
    optionText.style.color = "white";
}

document.addEventListener("DOMContentLoaded", () => {
    const syllablesOne = ['A', 'I', 'U', 'E'];
    const divsCol1 = document.querySelectorAll('.q1-col1s-answerBoxes h1');
    const syllablesTwo = ['O', 'NA'];
    const divsCol2 = document.querySelectorAll('.q1-col2s-answerBoxes h1');

    for (let i = syllablesOne.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [syllablesOne[i], syllablesOne[j]] = [syllablesOne[j], syllablesOne[i]];
    }

    for (let k = syllablesTwo.length - 1; k > 0; k--) {
        const l = Math.floor(Math.random() * (k + 1));
        [syllablesTwo[k], syllablesTwo[l]] = [syllablesTwo[l], syllablesTwo[k]];
    }

    divsCol1.forEach((divsCol1, index) => {
        divsCol1.textContent = syllablesOne[index];
    });

    divsCol2.forEach((divsCol2, index) => {
        divsCol2.textContent = syllablesTwo[index];
    });
});


allOptionBoxes.forEach((optionBox) => {
    optionBox.addEventListener('click', () => {
        let optionText = optionBox.querySelector('h1');
        if (optionText.textContent == "A" && quesLetter.textContent == "あ") {
            correctAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent !== "A" && quesLetter.textContent == "あ") {
            incorrectAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent == "I" && quesLetter.textContent == "い") {
            correctAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent !== "I" && quesLetter.textContent == "い") {
            incorrectAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent == "U" && quesLetter.textContent == "う") {
            correctAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent !== "U" && quesLetter.textContent == "う") {
            incorrectAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent == "E" && quesLetter.textContent == "え") {
            correctAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent !== "E" && quesLetter.textContent == "え") {
            incorrectAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent == "O" && quesLetter.textContent == "お") {
            correctAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        } else if (optionText.textContent !== "O" && quesLetter.textContent == "お") {
            incorrectAns(optionBox, optionText);
            setTimeout(()=>{
                revertBack(optionBox, optionText);
            }, 1000)
        }
        let barOne = document.querySelector("#bar3");
        let barTwo = document.querySelector("#bar2");
        let barThree = document.querySelector("#bar1");
        let hpNumber = document.querySelector(".hpNum h1");
        if (mistakes == 1) {
            barOne.style.backgroundColor = "#1C1C1C";
            hpNumber.textContent = "HP: 200/300";
        } else if (mistakes == 2) {
            barTwo.style.backgroundColor = "#1C1C1C";
            hpNumber.textContent = "HP: 100/300";
        } else if (mistakes == 3) {
            barThree.style.backgroundColor = "#1C1C1C"
            hpNumber.textContent = "HP: 0/300";
            setTimeout(()=>{
                alert("uh oh! you're out of HP. Refresh the page for another try!");
            }, 500);
        }

        if (seikai == 1) {
            quesLetter.textContent = "う"
        } else if (seikai == 2) {
            quesLetter.textContent = "い"
        } else if (seikai == 3) {
            quesLetter.textContent = "お"
        } else if (seikai == 4) {
            quesLetter.textContent = "え"
        } else if (seikai == 5) {
            setTimeout(()=>{
                alert("Good Job! You passed the Quiz 1, continue to the next page! :D");
            }, 500);
        }
    });
});


// QUIZ 2

let quesLetterFour = document.querySelector(".quizLeftBackground4 h1");
let optionBoxes1Four = document.querySelectorAll(".q1-col1s-answerBoxes4");
let optionBoxes2Four = document.querySelectorAll(".q1-col2s-answerBoxes4");
let allOptionBoxesFour = [...optionBoxes1Four, ...optionBoxes2Four];

let seikaiFour = 0;

function correctAnsFour(optionBoxFour, optionTextFour) {
    optionBoxFour.style.backgroundColor = "greenyellow";
    optionTextFour.style.color = "black";

    seikaiFour = seikaiFour + 1;
}

let mistakesFour = 0;

function incorrectAnsFour(optionBoxFour, optionTextFour) {
    optionBoxFour.style.backgroundColor = "#FF4C4C";
    optionTextFour.style.color = "black";

    mistakesFour = mistakesFour + 1;
}

function revertBackFour(optionBoxFour, optionTextFour) {
    optionBoxFour.style.backgroundColor = "#1C1C1C";
    optionTextFour.style.color = "white";
}

document.addEventListener("DOMContentLoaded", () => {
    const syllablesOneFour = ['KA', 'A', 'U', 'KE'];
    const divsCol1Four = document.querySelectorAll('.q1-col1s-answerBoxes4 h1');
    const syllablesTwoFour = ['KI', 'I', 'KO', 'KU'];
    const divsCol2Four = document.querySelectorAll('.q1-col2s-answerBoxes4 h1');

    for (let i = syllablesOneFour.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [syllablesOneFour[i], syllablesOneFour[j]] = [syllablesOneFour[j], syllablesOneFour[i]];
    }

    for (let k = syllablesTwoFour.length - 1; k > 0; k--) {
        const l = Math.floor(Math.random() * (k + 1));
        [syllablesTwoFour[k], syllablesTwoFour[l]] = [syllablesTwoFour[l], syllablesTwoFour[k]];
    }

    divsCol1Four.forEach((divsCol1Four, index) => {
        divsCol1Four.textContent = syllablesOneFour[index];
    });

    divsCol2Four.forEach((divsCol2Four, index) => {
        divsCol2Four.textContent = syllablesTwoFour[index];
    });
});


allOptionBoxesFour.forEach((optionBoxFour) => {
    optionBoxFour.addEventListener('click', () => {
        let optionTextFour = optionBoxFour.querySelector('h1');
        if (optionTextFour.textContent == "A" && quesLetterFour.textContent == "あ") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "A" && quesLetterFour.textContent == "あ") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent == "I" && quesLetterFour.textContent == "い") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "I" && quesLetterFour.textContent == "い") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent == "U" && quesLetterFour.textContent == "う") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "U" && quesLetterFour.textContent == "う") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent == "KA" && quesLetterFour.textContent == "か") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "KA" && quesLetterFour.textContent == "か") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        }
        else if (optionTextFour.textContent == "KI" && quesLetterFour.textContent == "き") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "KI" && quesLetterFour.textContent == "き") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        }
        else if (optionTextFour.textContent == "KU" && quesLetterFour.textContent == "く") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "KU" && quesLetterFour.textContent == "く") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        }
        else if (optionTextFour.textContent == "KE" && quesLetterFour.textContent == "け") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "KE" && quesLetterFour.textContent == "け") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        }
        else if (optionTextFour.textContent == "KO" && quesLetterFour.textContent == "こ") {
            correctAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        } else if (optionTextFour.textContent !== "KO" && quesLetterFour.textContent == "こ") {
            incorrectAnsFour(optionBoxFour, optionTextFour);
            setTimeout(()=>{
                revertBack(optionBoxFour, optionTextFour);
            }, 1000)
        }
        let barOneFour = document.querySelector("#bar3-4");
        let barTwoFour = document.querySelector("#bar2-4");
        let barThreeFour = document.querySelector("#bar1-4");
        let hpNumberFour = document.querySelector(".hpNum4 h1");
        if (mistakesFour == 1) {
            barOneFour.style.backgroundColor = "#1C1C1C";
            hpNumberFour.textContent = "HP: 200/300";
        } else if (mistakesFour == 2) {
            barTwoFour.style.backgroundColor = "#1C1C1C";
            hpNumberFour.textContent = "HP: 100/300";
        } else if (mistakesFour == 3) {
            barThreeFour.style.backgroundColor = "#1C1C1C"
            hpNumberFour.textContent = "HP: 0/300";
            setTimeout(()=>{
                alert("uh oh! you're out of HP. Refresh the page for another try!");
            }, 500);
        }

        if (seikaiFour == 1) {
            quesLetterFour.textContent = "う"
        } else if (seikaiFour == 2) {
            quesLetterFour.textContent = "い"
        } else if (seikaiFour == 3) {
            quesLetterFour.textContent = "き"
        } else if (seikaiFour == 4) {
            quesLetterFour.textContent = "け"
        } else if (seikaiFour == 5) {
            quesLetterFour.textContent = "く"
        } else if (seikaiFour == 6) {
            quesLetterFour.textContent = "か"
        } else if (seikaiFour == 7) {
            quesLetterFour.textContent = "こ"
        }
         else if (seikaiFour == 8) {
            setTimeout(()=>{
                alert("Good Job! You passed the Quiz 2, continue to the next page! :D");
            }, 500);
        }
    });
});