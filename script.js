// BUTTONS
let newBtn = document.querySelector('.btn--new')
let rollBtn = document.querySelector('.btn--roll')
let holdBtn = document.querySelector('.btn--hold')
// TEXTCONTENT
let scorePlayer1 = document.querySelector('#score--0')
let currentPlayer1 = document.querySelector('#current--0')

let scorePlayer2 = document.querySelector('#score--1')
let currentPlayer2 = document.querySelector('#current--1')
// RANDOM IMG
let dice = document.querySelector('.dice')
dice.style.display = 'none'

// CHANGES
let currentScore = 0
let activePlayer = 0
let score = [0, 0]

// EVENTS
rollBtn.addEventListener('click', rollDice)
holdBtn.addEventListener('click', hold)

// FUNCTIONS
function rollDice() {
    dice.style.display = 'block'
    let randomNumber = Math.floor(Math.random() * 6  + 1)
    dice.src = `dice-${randomNumber}.png `  

    if(randomNumber != 1){
        currentScore += randomNumber
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else{
        changePlayer()
    }
}

function hold(){
    score[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
    changePlayer()
}

function changePlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = "0"
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
}



// NIMAGA TEVADA CHAQIRIB OLINGAN ID NI PASTDA YANA CHAQIRIB OLDIK??????????????????????????????????????????????????????????????????????????????????????
// document.querySelector(`#score--${activePlayer}`).textContent = currentScore bunga mas score[activePlayer] bunga tenglemiz








