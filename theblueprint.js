let getComputerChoice = function () {
    function randomNumber() {
     return Math.floor(Math.random() * 3) + 1;
 }
     if (randomNumber() === 1)
         return 'rock';
     else if (randomNumber() === 2)
         return 'paper';
     else (randomNumber() === 3)
     return 'scissors';
 }
 let playerSelection = function() {
    return prompt('What is your choice?');
}

let playRound = function () {
    let player = playerSelection().toLowerCase();
    let computer = getComputerChoice();
    if (player == 'paper' && computer == 'rock') {
        alert('Jarvis chose ROCK. Point, you!')
        return 'Jarvis chose ROCK. Point, you!'
    }
    else if (player == 'scissors' && computer == 'rock') {
        alert('Jarvis chose ROCK. Point, Jarvis!')
        return 'Jarvis chose ROCK. Point, Jarvis!'
    }
    else if (player == 'scissors' && computer == 'paper') {
        alert('Jarvis chose PAPER. Point, you!')
        return 'Jarvis chose PAPER. Point, you!'
    }
    else if (player == 'rock' && computer == 'paper') {
        alert('Jarvis chose PAPER. Point, Jarvis!')
        return 'Jarvis chose PAPER. Point, Jarvis!'
    }
    else if (player == 'rock' && computer == 'scissors') {
        alert('Jarvis chose SCISSORS. Point, you!')
        return 'Jarvis chose SCISSORS. Point, you!'
    }
    else if (player == 'paper' && computer == 'scissors') {
        alert('Jarvis chose SCISSORS. Point, Jarvis!')
        return 'Jarvis chose SCISSORS. Point, Jarvis!'
    }
    else if (player === computer) {
        alert('You picked the same thing as Jarvis! Hit OK to replay the round.')
        return playRound()
    }
    else {
        alert('Your options are Rock, Paper, or Scissors!')
        return playRound()
    }
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    let scoreCalc = function() {
        if (playRound().at(-2) === 'u') {
            playerScore = ++playerScore }
        else computerScore = ++computerScore
    }
alert('Welcome to Ultimate RPS! You will be playing against Jarvis. Best of 5 wins the game!')
scoreCalc();
    console.log(`You: ${playerScore}`)
    console.log(`Jarvis: ${computerScore}`)
scoreCalc();
    console.log(`You: ${playerScore}`)
    console.log(`Jarvis: ${computerScore}`)
scoreCalc();
    console.log(`You: ${playerScore}`)
    console.log(`Jarvis: ${computerScore}`)
scoreCalc();
    console.log(`You: ${playerScore}`)
    console.log(`Jarvis: ${computerScore}`)
scoreCalc();
    console.log(`You: ${playerScore}`)
    console.log(`Jarvis: ${computerScore}`)
}
  function winner() {
        if (playerScore > computerScore) {
            console.log('You win! You beat Jarvis!')
            console.log('Final Score:')
            console.log(`You - ${playerScore}`)
            console.log(`Jarvis - ${computerScore}`)
            alert('You win! You beat Jarvis! Hit OK to see results.')
        }
        else { 
            console.log('You lose! Jarvis beat you!')
            console.log('Final Score:')
            console.log(`You - ${playerScore}`)
            console.log(`Jarvis - ${computerScore}`)
            alert('You lose! Jarvis beat you! Hit OK to see results.')
        }
    }

 winner();
