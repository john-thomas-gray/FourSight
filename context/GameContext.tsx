import React, { createContext, useContext, useState } from 'react';

type Team = 'white' | 'black' | 'vacant';
type BoardState = Team[][];

type GameContextType = {
  boardState: BoardState;
  setBoardState: React.Dispatch<React.SetStateAction<BoardState>>;
  dropPiece: (row: number, col: number, team: 'white' | 'black') => void;
  dropPieceWithGravity: (
    startRow: number,
    startCol: number,
    orientation: 'N' | 'S' | 'E' | 'W',
    team: 'white' | 'black'
  ) => void;
  winStatus: string;
};


const GameContext = createContext<GameContextType | null>(null);

const BOARD_SIZE = 9; // Full board
const TRACKED_START = 1;
const TRACKED_END = 7; // Inclusive

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  // Create 9x9 board, but only inner 7x7 cells are stateful
  const [boardState, setBoardState] = useState<BoardState>(
    Array.from({ length: BOARD_SIZE }, (_, row) =>
      Array.from({ length: BOARD_SIZE }, (_, col) =>
        row >= TRACKED_START && row <= TRACKED_END &&
        col >= TRACKED_START && col <= TRACKED_END
          ? 'vacant'
          : 'vacant' // Edges could also be undefined if preferred
      )
    )
  );

  const [winStatus, setWinStatus] = useState<string>('pending');

  const dropPiece = (row: number, col: number, team: 'white' | 'black') => {
    // Only allow changes within 7x7 grid
    if (
      row < TRACKED_START || row > TRACKED_END ||
      col < TRACKED_START || col > TRACKED_END
    ) return;

    setBoardState((prev) => {
      const newBoard = prev.map((r) => [...r]);
      if (newBoard[row][col] === 'vacant') {
        newBoard[row][col] = team;
      }
      return newBoard;
    });
  };

  const dropPieceWithGravity = (
  startRow: number,
  startCol: number,
  orientation: 'N' | 'S' | 'E' | 'W',
  team: 'white' | 'black'
) => {
  const dirMap = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  const [dr, dc] = dirMap[orientation];

  let r = startRow + dr;
  let c = startCol + dc;
  let lastVacant: [number, number] | null = null;

  while (
    r >= 0 && r < BOARD_SIZE &&
    c >= 0 && c < BOARD_SIZE
  ) {
    if (r === 0 || r === 8 || c === 0 || c === 8) break; // Stop at next slot

    if (boardState[r][c] !== 'vacant') break;

    lastVacant = [r, c];
    r += dr;
    c += dc;
  }

  if (lastVacant) {
    const [targetRow, targetCol] = lastVacant;
    setBoardState((prev) => {
      const newBoard = prev.map((row) => [...row]);
      newBoard[targetRow][targetCol] = team;
      return newBoard;
    });
  }
};


  return (
    <GameContext.Provider
  value={{
    boardState,
    setBoardState,
    dropPiece,
    dropPieceWithGravity,
    winStatus,
  }}
>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
