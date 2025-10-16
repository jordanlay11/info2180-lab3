document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board > div');
  squares.forEach(sq => sq.classList.add('square'));
});

document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    const squares = Array.from(document.querySelectorAll('#board div'));

    let board = Array(9).fill(null); // track state: 'X', 'O' or null
    let currentPlayer = 'X';

    squares.forEach((sq, idx) => {
        sq.addEventListener('click', () => {
            board[idx] = currentPlayer;
            sq.textContent = currentPlayer;
            sq.classList.add(currentPlayer);

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s turn.`;
        });
    });

});
