const CHOICES = ["rock", "paper", "scissors"];
const ROUNDS = 5

// 0 means that the first choice loses, 1 means that the first choice wins, -1 means tie
const WINNING_RULES = {
    "rock": {
        "rock": -1,
        "paper": 0,
        "scissors": 1,
    },
    "paper": {
        "rock": 1,
        "paper": -1,
        "scissors": 0,
    },
    "scissors": {
        "rock": 0,
        "paper": 1,
        "scissors": -1,
    },
}

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

function properNoun(noun) {
    const firstCharacterCap = noun.charAt(0).toUpperCase();
    const remainingCharacters = noun.slice(1).toLowerCase();
    return `${firstCharacterCap}${remainingCharacters}`;

}

function scoreRockPaperScissors(playerSelection, computerSelection) {
    return WINNING_RULES[playerSelection][computerSelection];
    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= ROUNDS; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?" );
        const computerSelection = getComputerChoice(CHOICES);

        const playerChoiceLower = playerSelection.toLowerCase();
        const computerChoiceLower = computerSelection.toLowerCase();
        
        console.log(`Round ${i}:`);
        const result = (scoreRockPaperScissors(playerChoiceLower,computerChoiceLower));
        if (result === 0) {
            console.log(`You Lose! ${properNoun(computerChoiceLower)} beats ${properNoun(playerChoiceLower)}.`);
            computerScore += 1;
        } else if (result === 1) {
            console.log(`You Win! ${properNoun(playerChoiceLower)} beats ${properNoun(computerChoiceLower)}.`);
            playerScore += 1;
        } else if (result === -1) {
            console.log(`It's a Tie! You both chose ${properNoun(playerChoiceLower)}.`);
            playerScore += 1;
            computerScore += 1;
        }
        console.log('----------------');
    }
    console.log(`Player's score: ${playerScore}`);
    console.log(`Computer's score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else if (playerScore == computerScore) {
        console.log("Tie!")
    } else {
        console.log("Computer wins!")
    }
}

game()