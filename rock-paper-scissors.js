let playerScore = 0;
let computerScore = 0;

const WINNING_SCORE = 3

const WIN = 1;
const TIE = 0;
const LOSS = -1;

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const CHOICES = [ROCK, PAPER, SCISSORS];

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

function playRound(playerSelection, computerSelection) { 
    if (Math.max(playerScore, computerScore) >= WINNING_SCORE) {
        return
    } 
    const playerChoiceLower = playerSelection.toLowerCase();
    const computerChoiceLower = computerSelection.toLowerCase();

    if (WINNING_RULES[playerSelection][computerSelection] === LOSS) {
        computerScore += 1;
        return `You Lose! ${toProperNoun(computerChoiceLower)} beats ${toProperNoun(playerChoiceLower)}.`;
    } else if (WINNING_RULES[playerSelection][computerSelection] === WIN) {
        playerScore += 1;
        return `You Win! ${toProperNoun(playerChoiceLower)} beats ${toProperNoun(computerChoiceLower)}.`;
    } else if (WINNING_RULES[playerSelection][computerSelection] === TIE) {
        playerScore += 1;
        computerScore += 1;
        return `It's a Tie! You both chose ${toProperNoun(playerChoiceLower)}.`
    }
}

function updateResults(playerResults, computerResults) {
    document.getElementById("player-score").textContent = `Player Score: ${playerResults}`
    document.getElementById("computer-score").textContent = `Computer Score: ${computerResults}`

    if (playerResults === WINNING_SCORE && computerResults === WINNING_SCORE) {
        document.getElementById("winner").textContent = "TIE!"
    } else if (playerResults === WINNING_SCORE) {
        document.getElementById("winner").textContent = "Player Wins!"
    } else if (computerResults === WINNING_SCORE) {
        document.getElementById("winner").textContent = "Computer Wins!"
    }
}

updateResults(0,0)
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const computerChoice = getComputerChoice(CHOICES)
        console.log(playRound(e.target.getAttribute("data-value"), computerChoice))
        updateResults(playerScore, computerScore)
    });
})
