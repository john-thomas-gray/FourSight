import React from 'react';
import { Image } from 'react-native';
import { icons } from '../constants/images';
import Space from './Space';

type SlotProps = {
  orientation: 'N' | 'S' | 'E' | 'W';
  team?: 'black' | 'white';
  row?: number;
  col?: number;
};

const Slot: React.FC<SlotProps> = ({
  orientation,
  team = 'black',
  row = 0,
  col = 0,
}) => {
  const dirMap: Record<string, 'north' | 'south' | 'east' | 'west'> = {
    N: 'north',
    S: 'south',
    E: 'east',
    W: 'west',
  };

  const dir = dirMap[orientation];
  console.log('icon source:', icons.slot[dir][team]);

  return (
    <>

    <Space row={row} col={col} backgroundColor="silver">
      <Image
        source={icons.slot[dir][team]}
        style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
      />
    </Space>
    </>
  );
};

export default Slot;
