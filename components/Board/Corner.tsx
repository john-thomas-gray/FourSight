import React from 'react';
import { Image } from 'react-native';
import { icons } from '../../constants/images';
import Space from './Space';

type CornerProps = {
  orientation: 'NE' | 'NW' | 'SE' | 'SW';
  row?: number;
  col?: number;
};

const Corner: React.FC<CornerProps> = ({ orientation, row = 0, col = 0 }) => {
  const src = icons.corner[orientation];

  return (
    <Space row={row} col={col} backgroundColor="gold">
      <Image
        source={src}
        style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
      />
    </Space>
  );
};

export default Corner;
