'use strict';
//const number = parseInt(Math.random());

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
let  secretNumber=Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=secretNumber;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess, secretNumber,typeof(guess));
    if(!guess){
        displayMessage('No number!');
        // document.querySelector('.message').textContent=;
       
    }
    else if(secretNumber==parseInt(guess))
    {
        displayMessage('Ur Guess is corrrect !');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if(score>highscore){
            highscore=score;
        document.querySelector('.highscore').textContent= highscore;
        }

    }
    else if(parseInt(guess)!=secretNumber)
    {
        displayMessage(parseInt(guess)>secretNumber?'Higher Number !':'Lower Number !');
        if(score>0){
        score--;
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor = 'orange';
        }
        else{
            document.querySelector('body').style.backgroundColor = 'red';
             displayMessage("You Lost the game!");
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.highscore').textContent=highscore;
     score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent='?';
   document.querySelector('.score').textContent=score;
   document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value='';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width='15rem';
   
  });