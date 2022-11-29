const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
rockButton.addEventListener("click", async event => {

  const randomNumber = Math.floor(Math.random()*3)
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Tie")
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Computer Wins")
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Player Wins")
  }
})

paperButton.addEventListener("click", async event => {
  const randomNumber = Math.floor(Math.random()*3)
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Player Wins")
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Tie")
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Computer Wins")
  }
})

scissorsButton.addEventListener("click", async event => {
  const randomNumber = Math.floor(Math.random()*3)
  if (randomNumber == 0) {
    console.log("Computer Chose Rock - Computer Wins")
  }
  else if (randomNumber == 1) {
    console.log("Computer Chose Paper - Player Wins")
  }
  else if (randomNumber == 2) {
    console.log("Computer Chose Scissors - Tie")
  }
})




// for (const detail of details) {
//   detail.addEventListener('toggle', async event => {
//     if (detail.open) {
//       const asides = detail.getElementsByTagName('aside')
//       const commentsWereDownloaded = asides.length > 0
//       if (!commentsWereDownloaded) {
//         const articleId = getArticleId(detail)
//         const comments = await downloadComments(articleId)
//         console.log(comments)
//       }
//     }
//   })
// }