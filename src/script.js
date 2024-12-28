document.addEventListener('DOMContentLoaded', () => {
   
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
    let balls = [];
    let gameInterval;

    startGameButton.addEventListener('click', () => {
        if (!gamePlaying) {
           
            ballImage.style.display = 'block';
            ballImage.style.position = 'absolute';
            ballImage.style.bottom = '0';
            ballImage.style.left = '50%';
            ballImage.style.transform = 'translateX(-50%)';
        }
    });

    
    playGameButton.addEventListener('click', () => {
        if (gamePlaying) return;

        gamePlaying = true;

      
        balls = [
            createBall(0), 
            createBall(1), 
            createBall(2),
        ];

        gameInterval = setInterval(moveBalls, 20);
    });

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

    function moveBalls() {
        balls.forEach((ball, index) => {
            let currentTop = parseInt(ball.style.top, 10);
            ball.style.top = `${currentTop + 2}px`; 

            if (currentTop + 2 >= window.innerHeight - 100) {
                clearInterval(gameInterval); 
                showGameOver();
            }
        });
    }

 
    function showGameOver() {
        gameOverMessage.textContent = `Le jeu est terminé ! Votre score est : ${score}`;
        gameOverPopup.classList.remove('hidden');
    }

    
    restartButton.addEventListener('click', () => {
        // Réinitialiser l'état du jeu
        balls.forEach(ball => ball.remove()); 
        score = 0;
        scoreElement.textContent = score;
        gameOverPopup.classList.add('hidden'); 
        gamePlaying = false;
        balls = [];
    });
});
