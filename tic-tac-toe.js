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

            const winner = checkWinner();
            if (winner) {
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add('you-won');
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s turn.`;
        });

        sq.addEventListener('mouseenter', () => {
            sq.classList.add('hover');
        });
        sq.addEventListener('mouseleave', () => {
            sq.classList.remove('hover');
        });
    });

    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function checkWinner() {
        for (const [a, b, c] of winningCombos) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }
});

