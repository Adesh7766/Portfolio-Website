import React, { useMemo, useState } from 'react';

type Player = 'X' | 'O';
type Cell = Player | null;

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getWinner = (board: Cell[]): Player | 'draw' | null => {
  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }
  return board.every(Boolean) ? 'draw' : null;
};

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<Player>('X');

  const winner = useMemo(() => getWinner(board), [board]);
  const finished = winner !== null;

  const status = winner === 'draw'
    ? "It's a draw."
    : winner
      ? `${winner} takes the round.`
      : `${turn}'s turn`;

  const play = (index: number) => {
    if (board[index] || finished) return;
    const next = [...board];
    next[index] = turn;
    setBoard(next);
    if (!getWinner(next)) {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
  };

  return (
    <div className="tictactoe">
      <div className="tictactoe__top">
        <div>
          <span className="tictactoe__label">Arcade corner</span>
          <h3 className="tictactoe__title">Tic-Tac-Toe</h3>
        </div>
        <span
          className={`tictactoe__status ${winner ? 'is-finished' : ''}`}
          aria-live="polite"
        >
          {status}
        </span>
      </div>

      <div className="tictactoe__board" role="group" aria-label="Tic Tac Toe board">
        {board.map((cell, index) => (
          <button
            type="button"
            key={index}
            className={`tictactoe__cell ${cell ? `is-${cell.toLowerCase()}` : ''}`}
            onClick={() => play(index)}
            aria-label={
              cell ? `Cell ${index + 1}, ${cell}` : `Play cell ${index + 1}`
            }
            disabled={Boolean(cell) || finished}
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="tictactoe__bottom">
        <span className="tictactoe__hint">
          Two players, one keyboard, zero stakes.
        </span>
        <button type="button" className="btn btn--small" onClick={reset}>
          Reset board
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
