// WellSpace.tsx
import React from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';

type WellSpaceProps = {
  row: number;
  col: number;
  children?: React.ReactNode;
  backgroundColor?: string;
  onLayout?: (event: LayoutChangeEvent, row: number, col: number) => void;
};

const WellSpace = ({ row, col, children, backgroundColor = '#065f46', onLayout }: WellSpaceProps) => {
  const style: ViewStyle = {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'silver',
  };

  return (
    <View
      style={style}
      onLayout={(e) => onLayout?.(e, row, col)}
    >
      {children}
    </View>
  );
};

export default WellSpace;
