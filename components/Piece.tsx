import React, { useRef, useState } from 'react';
import { Animated, PanResponder, ViewStyle } from 'react-native';

const Piece = ({ team }: { team: string }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [isDragging, setIsDragging] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        setIsDragging(true);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),

      onPanResponderRelease: () => {
        pan.flattenOffset();
        setIsDragging(false);
      },

      onPanResponderTerminate: () => {
        pan.flattenOffset();
        setIsDragging(false);
      },
    })
  ).current;

  const baseStyle: ViewStyle = {
    transform: pan.getTranslateTransform(),
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: team === 'white' ? 'white' : 'black',
    borderWidth: 2,
    borderColor: '#9CA3AF',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const draggingStyle: ViewStyle = {
    height: 48,
    width: 48,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 16,
    elevation: 8, // Android drop shadow
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[baseStyle, isDragging && draggingStyle]}
    />
  );
};

export default Piece;
