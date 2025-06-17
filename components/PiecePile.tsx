import React from 'react';
import { StyleSheet, View } from 'react-native';
import Piece from './Piece';
import WellSpace from './WellSpace';

type PiecePileProps = {
  team: string;
};

const ROWS = 7;
const COLS = 4;

const PiecePile = ({ team }: PiecePileProps) => {
  const borderColor = team === 'white' ? 'white' : 'black';

  // Create grid data
  const grid = Array.from({ length: ROWS }, (_, row) =>
    Array.from({ length: COLS }, (_, col) => ({ row, col }))
  );

  return (
    <View
      style={[
        styles.container,
        {
          borderColor,
          width: '20%',
        },
      ]}
    >
      {grid.map((rowArr, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {rowArr.map(({ row, col }) => (
            <WellSpace
              key={`wellspace-${row}-${col}`}
              row={row}
              col={col}
              backgroundColor="#065f46"
            >
              <Piece team={team} />
            </WellSpace>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    margin: 15,
    marginVertical: '5%',
    padding: 4,
    backgroundColor: '#065f46',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  }
});

export default PiecePile;
