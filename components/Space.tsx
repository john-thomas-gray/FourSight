import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useGame } from '../context/GameContext';

export type SpaceProps = {
  row: number;
  col: number;
  backgroundColor?: string;
  children?: React.ReactNode;
};

const Space: React.FC<SpaceProps> = ({ row, col, backgroundColor, children }) => {
  const { boardState } = useGame();

  const isEven = (row + col) % 2 === 0;
  const bg = backgroundColor ?? (isEven ? '#d1fae5' : '#ffffff');

  const style: ViewStyle = {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bg,
  };

  return (
    <View style={style}>
      {children}
    </View>
  );
};

export default Space;
