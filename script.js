let humanScore = 0;  // player's score
let computerScore = 0;  // computer score

document.querySelectorAll('button').forEach(button => {
    button.onclick = () => play(button.id);  // play function 
});

function play(humanPlay) {
    const computerPlay = getComputerPlay();  // computers choice
    const result = determineOutcome(humanPlay, computerPlay);  // the outcome
    
    // Update scores based on the result
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    updateScoreboard();  // Update the displayed scores
    // Display the game status
    document.getElementById('status').innerHTML = `<p>You played <strong>${humanPlay}</strong>. The bot played <strong>${computerPlay}</strong>.</p><p>${getResultMessage(result)}</p>`;
}

function getComputerPlay() {
    // random choice from rock, paper, or scissors
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function determineOutcome(humanPlay, computerPlay) {
    // the outcome based on the rules 
    if (humanPlay === computerPlay) return "tie";
    if (
        (humanPlay === 'rock' && computerPlay === 'scissors') ||
        (humanPlay === 'paper' && computerPlay === 'rock') ||
        (humanPlay === 'scissors' && computerPlay === 'paper')
    ) return "win";  // Player wins
    return "lose";  // Player loses
}

function getResultMessage(result) {
    // Return the appropriate message based on the result
    switch (result) {
        case "win": return "You win! :)";
        case "lose": return "You lose. :(";
        case "tie": return "It's a tie! :|";
    }
}

function updateScoreboard() {
    // Update the displayed scores
    document.getElementById('humanScore').innerText = humanScore;
    document.getElementById('computerScore').innerText = computerScore;
}
