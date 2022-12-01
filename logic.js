const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const resetButton = document.getElementById("reset")


const computerScoreStorage = Number(localStorage.getItem('computerScoreStorage'))
const playerScoreStorage = Number(localStorage.getItem('playerScoreStorage'))
const tieScoreStorage = Number(localStorage.getItem('tieScoreStorage'))
var computerScore = computerScoreStorage
var playerScore = playerScoreStorage
var tieScore = tieScoreStorage

const playerScoreHtml = document.getElementById("playerScore")
playerScoreHtml.innerHTML = "Player Score: " + playerScore

const computerScoreHtml = document.getElementById("computerScore")
computerScoreHtml.innerHTML = "Computer Score: " + computerScore

const tieScoreHtml = document.getElementById("tieScore")
tieScoreHtml.innerHTML = "Tie Score: " + tieScore

const outcomeHtml = document.getElementById("outcome")

rockButton.addEventListener("click", async event => {
  const randomNumber = Math.floor(Math.random()*3)
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Tie")
    outcomeHtml.innerHTML = "You Chose Rock and Computer Chose Rock - Tie"
    ++tieScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Computer Wins")
    outcomeHtml.innerHTML = "You Chose Rock and Computer Chose Paper - Computer Wins"
    ++computerScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Player Wins")
    outcomeHtml.innerHTML = "You Chose Rock and Computer Chose Scissors - Player Wins"
    ++playerScore
    updateScore()
    updateScoreHtml()
  }
})

paperButton.addEventListener("click", async event => {
  const randomNumber = Math.floor(Math.random()*3)
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Player Wins")
    outcomeHtml.innerHTML = "You Chose Paper and Computer Chose Rock - Player Wins"
    ++playerScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Tie")
    outcomeHtml.innerHTML = "You Chose Paper and Computer Chose Paper - Tie"
    ++tieScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Computer Wins")
    outcomeHtml.innerHTML = "You Chose Paper and Computer Chose Scissors - Computer Wins"
    ++computerScore
    updateScore()
    updateScoreHtml()
  }
})

scissorsButton.addEventListener("click", async event => {
  const randomNumber = Math.floor(Math.random()*3)
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Computer Wins")
    outcomeHtml.innerHTML = "You Chose Scissors and Computer Chose Rock - Computer Wins"
    ++computerScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Player Wins")
    outcomeHtml.innerHTML = "You Chose Scissors and Computer Chose Paper - Player Wins"
    ++playerScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Tie")
    outcomeHtml.innerHTML = "You Chose Scissors and Computer Chose Scissors - Tie"
    ++tieScore
    updateScore()
    updateScoreHtml()
  }
})

if (localStorage.getItem('playerScoreStorage') === null) {
  console.log("Player is null")
  localStorage.setItem('playerScoreStorage', "0")
}

if (localStorage.getItem('computerScoreStorage') === null) {
  console.log("Computer is null")
  localStorage.setItem('computerScoreStorage', "0")
}

if (localStorage.getItem('tieScoreStorage') === null) {
  console.log("Tie is null")
  localStorage.setItem('tieScoreStorage', "0")
}

function updateScore(){
  const playerScoreString = playerScore.toString()
  const computerScoreString = computerScore.toString()
  const tieScoreString = tieScore.toString()
  console.log("Player: " + playerScoreString)
  console.log("Computer: " + computerScoreString)
  console.log("Tie: " + tieScoreString)

  localStorage.setItem('playerScoreStorage', playerScoreString)
  localStorage.setItem('computerScoreStorage', computerScoreString)
  localStorage.setItem('tieScoreStorage', tieScoreString)
}

function updateScoreHtml(){
  playerScoreHtml.innerHTML = "Player Score: " + playerScore

  computerScoreHtml.innerHTML = "Computer Score: " + computerScore

  tieScoreHtml.innerHTML = "Tie Score: " + tieScore
}

resetButton.addEventListener("click", async event => {
  computerScore = 0
  playerScore = 0
  tieScore = 0

  localStorage.setItem('playerScoreStorage', "0")
  localStorage.setItem('computerScoreStorage', "0")
  localStorage.setItem('tieScoreStorage', "0")

  const playerScoreString = playerScore.toString()
  const computerScoreString = computerScore.toString()
  const tieScoreString = tieScore.toString()

  updateScoreHtml()

  console.log("Resetted Scores")
  console.log("Player: " + playerScoreString)
  console.log("Computer: " + computerScoreString)
  console.log("Tie: " + tieScoreString)


  const settingsButton = document.getElementById("settings")
    settingsButton.addEventListener("click", settings);

    function settings() {
      document.getElementById("background").style.color = "white";
    }





})