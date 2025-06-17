// context/GameContext.tsx
import React, { createContext, useContext, useState } from 'react';

type Team = 'white' | 'black' | null;

type BoardState = (Team)[][];

const BOARD_SIZE = 9;

const createEmptyBoard = (): BoardState =>
  Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));

const GameContext = createContext<{
  board: BoardState;
  placePiece: (row: number, col: number, team: Team) => void;
}>({
  board: createEmptyBoard(),
  placePiece: () => {},
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [board, setBoard] = useState<BoardState>(createEmptyBoard());

  const placePiece = (row: number, col: number, team: Team) => {
    setBoard(prev =>
      prev.map((r, i) =>
        r.map((cell, j) => (i === row && j === col ? team : cell))
      )
    );
  };

  return (
    <GameContext.Provider value={{ board, placePiece }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
