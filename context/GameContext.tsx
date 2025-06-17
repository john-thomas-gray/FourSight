import React, { createContext, useContext, useState } from 'react';

type BoardState = { [key: string]: string }; // e.g., "3-4": "white"
type PiecePileState = { [key: string]: string[] };

const GameContext = createContext<{
  boardState: BoardState;
  piecePileState: PiecePileState;
  placePiece: (row: number, col: number, team: string) => void;
  placeInPile: (pileId: string, team: string) => void;
  removeFromPile: (pileId: string, team: string) => void;
}>({
  boardState: {},
  piecePileState: {},
  placePiece: () => {},
  placeInPile: () => {},
  removeFromPile: () => {},
});

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [boardState, setBoardState] = useState<BoardState>({});
  const [piecePileState, setPiecePileState] = useState<PiecePileState>({});


  // Place piece on the board (row, col)
  const placePiece = (row: number, col: number, team: string) => {
    setBoardState((prev) => ({ ...prev, [`${row}-${col}`]: team }));
  };

  // Place a piece into a pile (e.g., "pile-0")
  const placeInPile = (pileId: string, team: string) => {
    setPiecePileState((prev) => {
      const pile = prev[pileId] || [];
      return { ...prev, [pileId]: [...pile, team] };
    });
  };

  // Remove a piece from a pile (by team, removes one occurrence)
  const removeFromPile = (pileId: string, team: string) => {
    setPiecePileState((prev) => {
      const pile = prev[pileId] || [];
      const index = pile.indexOf(team);
      if (index === -1) return prev;
      const newPile = [...pile];
      newPile.splice(index, 1);
      return { ...prev, [pileId]: newPile };
    });
  };

  return (
    <GameContext.Provider
      value={{
        boardState,
        piecePileState,
        placePiece,
        placeInPile,
        removeFromPile,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
