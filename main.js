let leftAttempt = 2; 
let gameWon = false;
const gameEnded= document.querySelector("#end-game-failure")
const gameEndedWon= document.querySelector("#end-game-success")


function endGameMessage()  { 
    
    gameEndedWon.style.display="none"
    gameEnded.style.display="none"
    leftAttempt = 10;
        if (confirm("Would you like to player again ? ")) { 
            gameRunning();
        }

}
 


function verifyNumber(generatedNumber,answer) { 
    return generatedNumber == answer;

}
 function gameRunning() { 
    while (leftAttempt>0)
    { 
        const generatedNumber= Math.floor(Math.random() * 10);
         
        const response = prompt("insert a number between 1 and 10");
         if(parseInt(response) == NaN) { 
             continue;
        }
         else { 
             if (verifyNumber(generatedNumber, response)) { 
                 alert("Good job you have won"); 
                 gameEndedWon.style.display = "block";
                 break;
                 
            }
             else { 
                     leftAttempt--;
                 if (leftAttempt === 0) gameEnded.style.display = "block";
                     alert(`you have only ${leftAttempt} attempts left`)
            }
        }
        
    }


}

gameRunning();
setTimeout(endGameMessage, 10000);