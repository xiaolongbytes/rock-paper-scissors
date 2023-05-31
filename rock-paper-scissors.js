const WIN = 1;
const TIE = 0;
const LOSS = -1;

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const CHOICES = [ROCK, PAPER, SCISSORS];
const ROUNDS = 5;

const WINNING_RULES = {
    [ROCK]: {
        [ROCK]: TIE,
        [PAPER]: LOSS,
        [SCISSORS]: WIN,
    },
    [PAPER]: {
        [ROCK]: WIN,
        [PAPER]: TIE,
        [SCISSORS]: LOSS,
    },
    [SCISSORS]: {
        [ROCK]: LOSS,
        [PAPER]: WIN,
        [SCISSORS]: TIE,
    },
}

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

function toProperNoun(noun) {
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
        if (result === LOSS) {
            console.log(`You Lose! ${toProperNoun(computerChoiceLower)} beats ${toProperNoun(playerChoiceLower)}.`);
            computerScore += 1;
        } else if (result === WIN) {
            console.log(`You Win! ${toProperNoun(playerChoiceLower)} beats ${toProperNoun(computerChoiceLower)}.`);
            playerScore += 1;
        } else if (result === TIE) {
            console.log(`It's a Tie! You both chose ${toProperNoun(playerChoiceLower)}.`);
            playerScore += 1;
            computerScore += 1;
        }
        console.log('----------------');
    }
    console.log(`Player's score: ${playerScore}`);
    console.log(`Computer's score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else if (playerScore === computerScore) {
        console.log("Tie!")
    } else {
        console.log("Computer wins!")
    }
}

game()