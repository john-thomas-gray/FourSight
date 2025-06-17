import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Piece from './Piece';
import WellSpace from './WellSpace';

const ROWS = 7;
const COLS = 4;
const CELL_SIZE = 40;

type PieceState = { row: number; col: number };

const PiecePile = ({ team }: { team: string }) => {
  const [pieces, setPieces] = useState<PieceState[]>(
    Array.from({ length: ROWS * COLS }, (_, i) => ({
      row: Math.floor(i / COLS),
      col: i % COLS,
    }))
  );

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragEnd = (dx: number, dy: number) => {
    if (draggingIndex === null) return;

    const origin = pieces[draggingIndex];
    const newCol = Math.round(origin.col + dx / CELL_SIZE);
    const newRow = Math.round(origin.row + dy / CELL_SIZE);

    // Snap to bounds
    const clampedCol = Math.max(0, Math.min(COLS - 1, newCol));
    const clampedRow = Math.max(0, Math.min(ROWS - 1, newRow));

    // Check if spot is taken
    const isOccupied = pieces.some(
      (p, idx) =>
        idx !== draggingIndex && p.row === clampedRow && p.col === clampedCol
    );

    const newPieces = [...pieces];
    if (!isOccupied) {
      newPieces[draggingIndex] = { row: clampedRow, col: clampedCol };
    } // else keep it in original position

    setPieces(newPieces);
    setDraggingIndex(null);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: ROWS }).map((_, row) => (
        <View key={row} style={styles.row}>
          {Array.from({ length: COLS }).map((_, col) => {
            const pieceIndex = pieces.findIndex(p => p.row === row && p.col === col);
            const isDragging = pieceIndex === draggingIndex;
            return (
              <WellSpace
                key={`${row}-${col}`}
                row={row}
                col={col}
                backgroundColor="#065f46"
              >
                {pieceIndex !== -1 && (
                  <Piece
                    team={team}
                    isDragging={isDragging}
                    onDragStart={() => handleDragStart(pieceIndex)}
                    onDragEnd={handleDragEnd}
                  />
                )}
              </WellSpace>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: 'black',
    padding: 4,
    width: COLS * 40,
    backgroundColor: '#065f46',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
});

export default PiecePile;
