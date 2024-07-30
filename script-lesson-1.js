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
