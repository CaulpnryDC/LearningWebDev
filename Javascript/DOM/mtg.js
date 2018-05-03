var p1HealthDisplay = document.getElementById("p1Health");
var p2HealthDisplay = document.getElementById("p2Health");
var p1Health = 20;
var p2Health = 20;
var p1MinusButton = document.getElementById("p1Minus");
var p1GainButton = document.getElementById("p1Gain");
var p2MinusButton = document.getElementById("p2Minus");
var p2GainButton = document.getElementById("p2Gain");
var p1Score = 0;
var p2Score = 0;
var p1WinsButton = document.getElementById("p1Wins");
var p2WinsButton = document.getElementById("p2Wins");
var p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
var p2ScoreDisplay = document.getElementById("p2ScoreDisplay");
var resetHealthButton = document.getElementById("resetHealth");
var newRoundButton = document.getElementById("resetGame");
var gameOver = false;
var winningScore = 0;
var roundWin = 2;
var roundOver = false;

p1MinusButton.addEventListener("click", function(){
  if(!gameOver){
    p1Health--;
    if(p1Health === winningScore){
      p2HealthDisplay.classList.add("winner");
      gameOver = true;
      if(!roundOver){
        p2Score++;
        if(p2Score === roundWin){
          p2ScoreDisplay.classList.add("winner");
          roundOver = true;
        }
        p2ScoreDisplay.textContent = p2Score;
      }
    }
    p1HealthDisplay.textContent = p1Health;
  }
});

p1GainButton.addEventListener("click", function(){
  if(!gameOver){
    p1Health++;
    p1HealthDisplay.textContent = p1Health;
  }
});

p2MinusButton.addEventListener("click", function(){
  if(!gameOver){
    p2Health--;
    if(p2Health === winningScore){
      p1HealthDisplay.classList.add("winner");
      gameOver = true;
      if(!roundOver){
        p1Score++;
        if(p1Score === roundWin){
          p1ScoreDisplay.classList.add("winner");
          roundOver = true;
        }
        p1ScoreDisplay.textContent = p1Score;
      }
    }
    p2HealthDisplay.textContent = p2Health;
  }
});

p2GainButton.addEventListener("click", function(){
  if(!gameOver){
    p2Health++;
    p2HealthDisplay.textContent = p2Health;
  }
});


// p1WinsButton.addEventListener("click", function(){
//   if(!roundOver){
//     p1Score++;
//     if(p1Score === roundWin){
//       p1ScoreDisplay.classList.add("winner");
//       roundOver = true;
//     }
//     p1ScoreDisplay.textContent = p1Score;
//   }
// })
//
// p2WinsButton.addEventListener("click", function(){
//   if(!roundOver){
//     p2Score++;
//     if(p2Score == roundWin){
//       p2ScoreDisplay.classList.add("winner");
//       roundOver = true;
//     }
//     p2ScoreDisplay.textContent = p2Score;
//   }
// })

function resetGame(){
  p1Health = 20;
  p2Health = 20;
  p1HealthDisplay.textContent = p1Health;
  p2HealthDisplay.textContent = p2Health;
  p1HealthDisplay.classList.remove("winner");
  p2HealthDisplay.classList.remove("winner");
  gameOver = false;
}

resetHealthButton.addEventListener("click", function(){
  resetGame();
})

function newRound(){
  p1Health = 20;
  p2Health = 20;
  p1HealthDisplay.textContent = p1Health;
  p2HealthDisplay.textContent = p2Health;
  p1HealthDisplay.classList.remove("winner");
  p2HealthDisplay.classList.remove("winner");
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = p1Score;
  p2ScoreDisplay.textContent = p2Score;
  p1ScoreDisplay.classList.remove("winner");
  p2ScoreDisplay.classList.remove("winner");
  roundOver = false;
}

newRoundButton.addEventListener("click", function(){
  newRound();
})
