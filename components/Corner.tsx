import React from 'react';
import { Image } from 'react-native';
import { icons } from '../constants/images';
import Space from './Space';

type CornerProps = {
  orientation: 'NE' | 'NW' | 'SE' | 'SW';
  row?: number;
  col?: number;
};

const Corner: React.FC<CornerProps> = ({ orientation, row = 0, col = 0 }) => {

  return (
    <Space row={row} col={col} backgroundColor="pink">
      <Image
        source={icons.corner[orientation]}
        style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
      />
    </Space>
  );
};

export default Corner;
