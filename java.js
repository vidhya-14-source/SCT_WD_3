let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const cellElements = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver || cell.textContent !== '') {
            return;
        }

        cell.textContent = currentPlayer;
        gameBoard[index] = currentPlayer;

        if (checkWin()) {
            gameOver = true;
            alert(`Player ${currentPlayer} wins!`);
        } else if (checkDraw()) {
            gameOver = true;
            alert('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

resetButton.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    cellElements.forEach(cell => cell.textContent = '');
});

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winConditions.some(condition => {
        return condition.every(index => gameBoard[index] === currentPlayer);
    });
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}
