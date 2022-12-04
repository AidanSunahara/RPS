const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const resetButton = document.getElementById("reset")

const rounds = 10

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
const winnerHtml = document.getElementById("winner")
const resetMessageHtml = document.getElementById("resetMessage")

const resultStorage = localStorage.getItem('resultStorage')
outcomeHtml.innerHTML = resultStorage

if (winCondition()){
  updateScoreHtml()
}

rockButton.addEventListener("click", async event => {
  if(!winCondition()) {
    const randomNumber = Math.floor(Math.random()*3)
    outcomeHtml.hidden = false
    if (randomNumber == 0) {
      console.log("Computer Chose Rock - Tie")
      outcomeHtml.innerHTML = "You Chose Rock and Computer Chose Rock - Tie"
      localStorage.setItem('resultStorage', "You Chose Rock and Computer Chose Rock - Tie")
      ++tieScore
      updateScore()
      updateScoreHtml()
    }
    else if (randomNumber == 1) {
      console.log("Computer Chose Paper - Computer Wins")
      outcomeHtml.innerHTML = "You Chose Rock and Computer Chose Paper - Computer Wins"
      localStorage.setItem('resultStorage', "You Chose Rock and Computer Chose Paper - Computer Wins")
      ++computerScore
      updateScore()
      updateScoreHtml()
    }
    else if (randomNumber == 2) {
      console.log("Computer Chose Scissors - Player Wins")
      outcomeHtml.innerHTML = "You Chose Rock and Computer Chose Scissors - Player Wins"
      localStorage.setItem('resultStorage', "You Chose Rock and Computer Chose Scissors - Player Wins")
      ++playerScore
      updateScore()
      updateScoreHtml()
    }
  }
})

paperButton.addEventListener("click", async event => {
  if (!winCondition()) {
  const randomNumber = Math.floor(Math.random()*3)
  outcomeHtml.hidden = false
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Player Wins")
    outcomeHtml.innerHTML = "You Chose Paper and Computer Chose Rock - Player Wins"
    localStorage.setItem('resultStorage', "You Chose Paper and Computer Chose Rock - Player Wins")
    ++playerScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Tie")
    outcomeHtml.innerHTML = "You Chose Paper and Computer Chose Paper - Tie"
    localStorage.setItem('resultStorage', "You Chose Paper and Computer Chose Paper - Tie")
    ++tieScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Computer Wins")
    outcomeHtml.innerHTML = "You Chose Paper and Computer Chose Scissors - Computer Wins"
    localStorage.setItem('resultStorage', "You Chose Paper and Computer Chose Scissors - Computer Wins")
    ++computerScore
    updateScore()
    updateScoreHtml()
  }
}
})

scissorsButton.addEventListener("click", async event => {
  if (!winCondition()) {
  const randomNumber = Math.floor(Math.random()*3)
  outcomeHtml.hidden = false
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Computer Wins")
    outcomeHtml.innerHTML = "You Chose Scissors and Computer Chose Rock - Computer Wins"
    localStorage.setItem('resultStorage', "You Chose Scissors and Computer Chose Rock - Computer Wins")
    ++computerScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Player Wins")
    outcomeHtml.innerHTML = "You Chose Scissors and Computer Chose Paper - Player Wins"
    localStorage.setItem('resultStorage', "You Chose Scissors and Computer Chose Paper - Player Wins")
    ++playerScore
    updateScore()
    updateScoreHtml()
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Tie")
    outcomeHtml.innerHTML = "You Chose Scissors and Computer Chose Scissors - Tie"
    localStorage.setItem('resultStorage', "You Chose Scissors and Computer Chose Scissors - Tie")
    ++tieScore
    updateScore()
    updateScoreHtml()
  }
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

if (localStorage.getItem('resultStorage') === null) {
  console.log("Result is null")
  localStorage.setItem('resultStorage', "")
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

  if (playerScore === 10) {
    winnerHtml.innerHTML = "Winner: Player"
    winnerHtml.hidden = false
  }
  else if (computerScore === 10) {
    winnerHtml.innerHTML = "Winner: Computer"
    winnerHtml.hidden = false
  }

  else if(tieScore === 10) {
    winnerHtml.innerHTML = "Winner: Tie"
    winnerHtml.hidden = false
  }
}

function winCondition(){
  if (playerScore === rounds || computerScore === rounds || tieScore === rounds) {
    resetMessageHtml.hidden = false
    return true
  } 
  else { 
    return false
  }
}

resetButton.addEventListener("click", async event => {
  computerScore = 0
  playerScore = 0
  tieScore = 0
  winnerHtml.hidden = true
  winnerHtml.innerHTML = "Winner: "
  
  resetMessageHtml.hidden = true
  outcomeHtml.hidden = true
  outcomeHtml.innerHTML = "Results"
  localStorage.setItem('resultStorage', "")

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
})