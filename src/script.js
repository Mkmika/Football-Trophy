document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments du DOM
    const ballImage = document.getElementById('ballImage');
    const startGameButton = document.getElementById('startGame');
    const playGameButton = document.getElementById('playGame');
    const scoreElement = document.getElementById('score');
    const gameOverPopup = document.getElementById('gameOverPopup');
    const gameOverMessage = document.getElementById('gameOverMessage');
    const restartButton = document.getElementById('restartButton');

    // Variables du jeu
    let score = 0;
    let gamePlaying = false;
    let balls = []; // Liste pour gérer les balles
    let gameInterval;

    // Fonction pour démarrer le jeu
    startGameButton.addEventListener('click', () => {
        if (!gamePlaying) {
            // Afficher le ballon et le placer en bas au centre
            ballImage.style.display = 'block';
            ballImage.style.position = 'absolute';
            ballImage.style.bottom = '0';
            ballImage.style.left = '50%';
            ballImage.style.transform = 'translateX(-50%)';
        }
    });

    // Fonction pour commencer à jouer
    playGameButton.addEventListener('click', () => {
        if (gamePlaying) return;

        gamePlaying = true;

        // Initialiser les balles et démarrer le mouvement
        balls = [
            createBall(0), // Première colonne
            createBall(1), // Deuxième colonne
            createBall(2), // Troisième colonne
        ];

        // Animation des balles
        gameInterval = setInterval(moveBalls, 20);
    });

    // Créer une balle et la placer dans la colonne
    function createBall(columnIndex) {
        const ball = document.createElement('img');
        ball.src = '/ui_assets/ball.svg';
        ball.style.position = 'absolute';
        ball.style.top = '0px';
        ball.style.left = `${columnIndex * 100 + 50}%`;
        ball.style.transform = 'translateX(-50%)';
        ball.classList.add('ball');
        document.body.appendChild(ball);
        return ball;
    }

    // Déplacer les balles
    function moveBalls() {
        balls.forEach((ball, index) => {
            let currentTop = parseInt(ball.style.top, 10);
            ball.style.top = `${currentTop + 2}px`; // Vitesse de déplacement

            // Si la balle atteint le bas, afficher Game Over
            if (currentTop + 2 >= window.innerHeight - 100) { // 100px est l'espace réservé au bas de l'écran
                clearInterval(gameInterval); // Arrêter l'intervalle
                showGameOver();
            }
        });
    }

    // Afficher la popup Game Over
    function showGameOver() {
        gameOverMessage.textContent = `Le jeu est terminé ! Votre score est : ${score}`;
        gameOverPopup.classList.remove('hidden');
    }

    // Fonction pour recommencer le jeu
    restartButton.addEventListener('click', () => {
        // Réinitialiser l'état du jeu
        balls.forEach(ball => ball.remove()); // Supprimer les balles existantes
        score = 0;
        scoreElement.textContent = score;
        gameOverPopup.classList.add('hidden'); // Cacher la popup
        gamePlaying = false;
        balls = [];
    });
});
