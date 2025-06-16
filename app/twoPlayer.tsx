import Board from '@/components/Board/Board';
import PiecePile from '@/components/PiecePile';
import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');
const BOARD_MAX_SIZE = width * 0.45;



const TwoPlayer = () => {
  const [spawnedPiece, setSpawnedPiece] = useState<null | { x: number; y: number }>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  return (
    <View className="flex-1 mx-20 bg-green-700">
      <View className="flex-1 flex-row justify-between items-center px-4">
        <PiecePile />

        <View
          style={{
            width: BOARD_MAX_SIZE,
            aspectRatio: 1,
          }}
        >
          <Board className=""/>
        </View>

        <PiecePile />
      </View>
    </View>
  );
};

export default TwoPlayer;
