'use strict';

let secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
        document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
 const guess = Number(document.querySelector('.guess').value); 
 console.log(guess); 

 if(!guess){
         document.querySelector('.message').textContent = "No Number!";
 } else if(guess === secretnumber){         
         displayMessage('Correct Number!');
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').textContent = secretnumber;
         document.querySelector('.number').style.width = '30rem';             
         
         if ( score > highscore ){
                 highscore = score;
                 document.querySelector('.highscore').textContent = highscore;
         }

 } else if(guess!== secretnumber){
        if(score > 1){
                document.querySelector('.message').textContent = guess > secretnumber ?'Too High': 'Too Low';
                score--;
                document.querySelector('.score').textContent = score;
         }else{
                displayMessage('You lost the Game. Try Again!');
                
                document.querySelector('.score').textContent = 0;
         }

}
});




 document.querySelector('.again').addEventListener('click', function(){
         score = 20;
         secretnumber = Math.trunc(Math.random()*20)+1;
         document.querySelector('.number').textContent = secretnumber;
         displayMessage('Start Guessing!');
         
         document.querySelector('.score').textContent = score;
         document.querySelector('.number').textContent = '?';
         document.querySelector('.guess').value='';
         document.querySelector('body').style.backgroundColor = '#222';
         document.querySelector('.number').style.width = '15rem';
         
});
