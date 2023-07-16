/* Rock, Paper, Scissors
Created on July 16, 2023
By Samuel Johnson 
For The Odin Project */

let computerChoice
let playerChoice
let result

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors']
    computerChoice = Math.floor(Math.random() * computerOptions.length)

    return computerChoice
}

function getPlayerChoice() {
    playerChoice = prompt("Make your selection: ")

    if (playerChoice.toUpperCase() === "ROCK") {
        console.log("You selected Rock.")
    }

    else if (playerChoice.toUpperCase() === "PAPER") {
        console.log("You selected Paper.")
    }

    else if (playerChoice.toUpperCase() === "SCISSORS") {
        console.log("You selected Scissors.")
    }

    else {
        console.log("You need to select either Rock, Paper, or Scissors. Try again.")
        getPlayerChoice()
    }

    playerChoice = playerChoice.toUpperCase()

    return playerChoice
}

function runGame(computerChoice, playerChoice) {
    if (computerChoice === 0 && playerChoice === "ROCK") {
        result = 0
        console.log("It's a tie!")
    }

    else if (computerChoice === 0 && playerChoice === "PAPER") {
        result = 1
        console.log("Player wins! Paper beats Rock.")
    }

    else if (computerChoice === 0 && playerChoice === "SCISSORS") {
        result = -1
        console.log("Computer wins! Rock beats Scissors.")
    }

    else if (computerChoice === 1 && playerChoice === "ROCK") {
        result = -1
        console.log("Computer wins! Paper beats Rock.")
    }

    else if (computerChoice === 1 && playerChoice === "PAPER") {
        result = 0
        console.log("It's a tie!")
    }

    else if (computerChoice === 1 && playerChoice === "SCISSORS") {
        result = 1
        console.log("Player wins! Scissors beats Paper.")
    }

    else if (computerChoice === 2 && playerChoice === "ROCK") {
        result = 1
        console.log("Player wins! Rock beats Scissors.")
    }

    else if (computerChoice === 2 && playerChoice === "PAPER") {
        result = -1
        console.log("Computer wins! Scissors beats Paper.")
    }

    else if (computerChoice === 2 && playerChoice === "SCISSORS") {
        result = 0
        console.log("It's a tie!")
    }

    else {
        console.log("An error occured.")
    }

    return result
}

function game() {
    let computerWinCount = 0
    let playerWinCount = 0

    for (i = 0; i < 5; i++) {
        getComputerChoice()
        getPlayerChoice()
        runGame(computerChoice, playerChoice)

        if (result === -1) {
            computerWinCount += 1
            console.log("Computer: " + computerWinCount + " Player: " + playerWinCount)
        }

        else if (result === 0) {
            console.log("Computer: " + computerWinCount + " Player: " + playerWinCount)
        }

        else if (result === 1) {
            playerWinCount += 1
            console.log("Computer: " + computerWinCount + " Player: " + playerWinCount)
        }

        else {
            console.log("Not sure how we even got here.")
        }
    }

    if (computerWinCount > playerWinCount) {
        console.log("Computer wins with a score of " + computerWinCount + " to " + playerWinCount + ".")
    }

    else if (computerWinCount < playerWinCount) {
        console.log("Player wins with a score of " + playerWinCount + " to " + computerWinCount + ".")
    }

    else {
        console.log("The game has ended in a tie.")
    }
}

game()
