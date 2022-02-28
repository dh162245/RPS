const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const computerScoreDisplay = document.querySelector('#computer-score')
const userScoreDisplay = document.querySelector('#user-score')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
const infoDisplay = document.querySelector('#info')
let userChoice
let computerChoice
let s
let pcCount = 0
let userCount = 0

function selected(){
    if(s5.checked == true){
        s = 5;
    }
    if(s10.checked == true){
        s = 10;
    }
    if(s15.checked == true){
        s = 15;
    }
    if(s20.checked == true){
        s = 20;
    }
}


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }
    // computerChoiceDisplay.innerHTML = computerChoice
    computerScoreDisplay.innerHTML = pcCount
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'Draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'Win'
        userCount ++
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'Lost'
        pcCount ++
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'Win'
        userCount ++
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'Lose'
        pcCount++
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'Win'
        userCount ++
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'Lose'
        pcCount ++
    }
    resultDisplay.innerHTML = result
}

let j = 0;
for (let i = 0; i < possibleChoices.length; i++) {
    possibleChoices[i].addEventListener('click', function () {
        j++
        if (j > s) {
            infoDisplay.innerHTML = 'Game Over'
            if (pcCount > userCount) {
                resultDisplay.innerHTML = 'You lost homie'
            } else if (userCount > pcCount) {
                resultDisplay.innerHTML = 'OMG You WON !!!'
            } else if (userCount = pcCount) {
                resultDisplay.innerHTML = "Even if it's a draw you still lost"
            }
            return
        } else { 
            selected(); 
            userChoice = this.id;
            infoDisplay.innerHTML = `Rounds: ${j} / ${s}`
            generateComputerChoice();
            getResult();
            userScoreDisplay.innerHTML = userCount
            // userChoiceDisplay.innerHTML = userChoice 
        }
    })
}

