let randomNumber=Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(randomNumber)
const submit=document.querySelector("#submit");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult")
const lowOrHigh=document.querySelector(".lowOrHi")
const startOver=document.querySelector(".resultParas")

const p=document.createElement('p');

let numGuess=1
let playGame=true

if(playGame){
   submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess=parseInt(userInput.value) 
      console.log(guess)
      validateGuess(guess)
   })
}       

function validateGuess(guess){ 
 if(isNaN(guess))
 {
    alert('Please enter a valid number');
 }
 else if(guess<1)
 {
    alert('Please enter a number greater than 1')
 }
 else if(guess>100)
 {
    alert('Please enter a number less than 100');
 }
 else
 {
    if(numGuess===11)
    {
        displayGuess(guess);
        displayMessage(`Game over. The correct number was ${randomNumber}`);
        endGame();
    }
    else
    {
      displayGuess(guess);
      checkGuess(guess);
    }
 }
}
function checkGuess(guess){
   if(guess===randomNumber)
   {
    displayMessage(`You guessed it right`)
    endGame();
   }
   else if(guess<randomNumber)
   {
    displayMessage(`You guess is low than the number`)
   }
   else
   {
    displayMessage(`You guess is high than the number`)
   }
}
function displayGuess(guess){
    userInput.value='';
    console.log(guess);
    guessSlot.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}
function displayMessage(message){
   console.log(message)
    lowOrHigh.innerHTML=`<h3>${message}</h3>`;
}
function endGame(){
   userInput.value='';
   userInput.setAttribute('disabled','');
   p.classList.add('button')
   p.innerHTML=`<h2>Start new game</h2>`
   startOver.appendChild(p);
   playGame=false
   newGame();
}
function newGame(){
   const newGame=document.querySelector('.button')
   newGame.addEventListener('click',function(){
      userInput.removeAttribute('disabled');
      userInput.value='';
      randomNumber=Math.floor(Math.random() * (100 - 1 + 1) + 1);
      numGuess=1
      guessSlot.innerHTML=``;
      remaining.innerHTML=`${11-numGuess}`;
      startOver.removeChild(p)
   })   
}




