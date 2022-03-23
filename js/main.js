const handOptions = {
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "images/Scissors.png"
}

let SCORE = 0;
let SCORE2 = 0

const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userPickImage").src = handOptions[hand];

    pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let bot = hands[Math.floor(Math.random() * hands.length)];

    document.getElementById("computerPickImage").src = handOptions[bot]

    referee(hand, bot);
};

const referee = (userHand, bot) => {
    if (userHand == "paper" && bot == "scissors") {
        setDecision("YOU LOSE!");
        botscore(SCORE2 + 1);
    }
    if (userHand == "paper" && bot == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "paper" && bot == "paper") {
        setDecision("The Same!");
    }
    if (userHand == "rock" && bot == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && bot == "paper") {
        setDecision("YOU LOSE!");
        botscore(SCORE2 + 1);
    }
    if (userHand == "rock" && bot == "rock") {
        setDecision("The Same!");
    }
    if (userHand == "scissors" && bot == "scissors") {
        setDecision("The Same!");
    }
    if (userHand == "scissors" && bot == "rock") {
        setDecision("YOU LOSE!");
        botscore(SCORE2 + 1);
    }
    if (userHand == "scissors" && bot == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }

};

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}

const botscore = (botscore) => {
    SCORE2 = botscore;
    document.querySelector(".score2 h1").innerText = botscore;
}