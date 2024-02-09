// Script to dynamically create the Tic Tac Toe board
document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');

    // Create cells for the board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        board.appendChild(cell);
    }
});
