/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying, winningScore;


//winningScore = document.getElementById("winningScore").value;
init()

function init(){
    scores = [0, 0];

 roundScore = 0;
        
    
    ////document.querySelector('#winningScore').style.display = 'none';
    //winningScore = document.getElementById("winningScore").value;


 activePlayer = 0;

    gamePlaying = true;
document.querySelector('.dice-0').style.display = 'none';
document.querySelector('.dice-1').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 1";
        document.querySelector('.player-0-panel').classList.remove('winner')
        document.querySelector('.player-1-panel').classList.remove('winner')
        document.querySelector('.player-0-panel').classList.remove('active')
        document.querySelector('.player-1-panel').classList.remove('active')
        document.querySelector('.player-0-panel').classList.add('active')

}

document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlaying){
    // random number
       
       var prevDice0 = dice0;
       var prevDice1 = dice1;
       var dice0 = Math.floor(Math.random()* 6) + 1;
       var dice1 = Math.floor(Math.random()* 6) + 1;
       
        winningScore =(document.querySelector('.final-score').value)? (document.querySelector('.final-score').value): 100;
    // display result
        var dice0DOM = document.querySelector('.dice-0');
       var dice1DOM = document.querySelector('.dice-1');
        dice0DOM.style.display = 'block';
        dice0DOM.src = 'dice-' + dice0 + '.png';
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';
       
    // round score if ! 1
        if(dice0 !== 1 && dice1 !== 1){
            roundScore += dice0 + dice1;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
            console.log(prevDice0 + ' ' + prevDice1)
            
            if(((prevDice0 === 6) && (dice0 === 6)) || ((prevDice1 === 6) && (dice1 === 6))){
                nextPlayer()
            }
        }
        else{
            nextPlayer()
        }
   }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-'+activePlayer).textContent = "WINNER";
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
            gamePlaying =false;
        }else{
            nextPlayer() 
        }
    }
   

});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
        
    roundScore = 0;
    
    //winningScore = document.getElementById("winningScore").value;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer = (activePlayer === 1)? 0:1;
    
}