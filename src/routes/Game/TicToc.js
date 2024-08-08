import { useState } from "react";
import "./TicToc.css";

function Square({ player, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {player}
    </button>
  );
}

function Board({ board, player, onPlay }) {
  function handleClick(position) {
    const nextSquare = [...board];
    if (board[position]) return;
    nextSquare[position] = player;
    onPlay(nextSquare);
  }

  return (
    <>
      <div className="board-row">
        <Square player={board[0]} onSquareClick={() => handleClick(0)} />
        <Square player={board[1]} onSquareClick={() => handleClick(1)} />
        <Square player={board[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square player={board[3]} onSquareClick={() => handleClick(3)} />
        <Square player={board[4]} onSquareClick={() => handleClick(4)} />
        <Square player={board[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square player={board[6]} onSquareClick={() => handleClick(6)} />
        <Square player={board[7]} onSquareClick={() => handleClick(7)} />
        <Square player={board[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function TicToc() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const player = currentMove % 2 ? "O" : "X";
  const actualBoard = history[currentMove];

  function handlePlay(nextSquare) {
    const newHistory = history.slice(0, currentMove + 1);
    setHistory([...newHistory, nextSquare]);
    setCurrentMove(newHistory.length);
  }

  function goToMove(key) {
    setCurrentMove(key);
    setHistory(history.slice(0, key + 1));
  }

  const gameInfo = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => goToMove(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div class="game">
      <div class="board-game">
        Au tour du joueur : {player}
        <Board board={actualBoard} player={player} onPlay={handlePlay} />
      </div>
      <div class="game-info">
        <ol>{gameInfo}</ol>
      </div>
    </div>
  );
}
