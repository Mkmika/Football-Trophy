// script.js

// Sélecteurs
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const playButton = document.getElementById('play-btn');
const player = document.getElementById('player');
const ball = document.getElementById('ball');

let score = 0;
let gameInterval;

// Fonction pour démarrer le jeu
startButton.addEventListener('click', () => {
    score = 0;
    scoreElement.textContent = score;
    startGame();
});

// Fonction pour mettre en pause le jeu
pauseButton.addEventListener('click', () => {
    clearInterval(gameInterval);
});

// Fonction pour reprendre le jeu
playButton.addEventListener('click', () => {
    startGame();
});

// Fonction principale du jeu
function startGame() {
    gameInterval = setInterval(() => {
        const ballY = parseInt(window.getComputedStyle(ball).top);
        const playerY = parseInt(window.getComputedStyle(player).top);

        // Simulation simple du mouvement de la balle
        ball.style.top = (ballY + 5) + 'px';

        // Si la balle atteint le bas, réinitialise la position
        if (ballY > 400) {
            ball.style.top = '50px';
            score++;
            scoreElement.textContent = score;
        }
    }, 50);
}
document.getElementById("startGame").addEventListener("click", function() {
    // Logique pour démarrer le jeu
    document.getElementById("score").innerText = "0";
    // Mettre à jour les autres boutons
});

document.getElementById("pauseGame").addEventListener("click", function() {
    // Logique pour mettre en pause
});

document.getElementById("playGame").addEventListener("click", function() {
    // Logique pour reprendre le jeu
});
