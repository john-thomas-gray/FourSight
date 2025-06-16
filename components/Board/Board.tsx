import Space from '@/components/Board/Space';
import React from 'react';
import { View } from 'react-native';

const BOARD_SIZE = 9;

const getOrientation = (row: number, col: number): string => {
  const last = BOARD_SIZE - 1;

  if (row === 0 && col === 0) return 'NW';
  if (row === 0 && col === last) return 'NE';
  if (row === last && col === 0) return 'SW';
  if (row === last && col === last) return 'SE';
  if (row === 0) return 'N';
  if (row === last) return 'S';
  if (col === 0) return 'W';
  if (col === last) return 'E';

  return 'C';
};

const Board = ({className} : {className?: string}) => {
  return (
    <View className={`flex-1 flex-col ${className}`}>
      {Array.from({ length: BOARD_SIZE }).map((_, row) => (
        <View key={row} style={{ flex: 1, flexDirection: 'row' }}>
          {Array.from({ length: BOARD_SIZE }).map((_, col) => {
            const isCorner =
              (row === 0 || row === BOARD_SIZE - 1) &&
              (col === 0 || col === BOARD_SIZE - 1);

            const isEdge =
              row === 0 || row === BOARD_SIZE - 1 || col === 0 || col === BOARD_SIZE - 1;

            const orientation = getOrientation(row, col);

            const type = isCorner ? 'corner' : isEdge ? 'slot' : 'space';

            return (
              <Space
                key={`${row}-${col}`}
                type={type}
                orientation={orientation}
                row={row}
                col={col}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default Board;
