import React from 'react';
import { Text, View } from 'react-native';
import icons from '@constants/images';

type SpaceProps = {
  type?: 'space' | 'slot' | 'corner';
  orientation?: 'N' | 'S' | 'E' | 'W';
};

import React from 'react';
import { Image, Text, View } from 'react-native';
import { icons } from '@/constants/icons'; // adjust this path to match your project

type SpaceProps = {
  type?: 'space' | 'slot' | 'corner';
  orientation?: 'N' | 'S' | 'E' | 'W' | 'NE' | 'NW' | 'SE' | 'SW';
  row?: number;
  col?: number;
};

const Space: React.FC<SpaceProps> = ({
    type = 'space',
    orientation = 'N',
    row = 0,
    col = 0
  }) => {
    const isEven = (row + col) % 2 === 0;

    const renderContent = () => {
      if (type === 'corner') {
        const src = icons.corner[orientation as 'NE' | 'NW' | 'SE' | 'SW'];
        return <Image source={src} style={{ width: '80%', height: '80%', resizeMode: 'contain' }} />;
      }

      if (type === 'slot') {
        const team = 'black'; // or pass this as a prop if it changes
        const dir = orientation.toLowerCase() as 'north' | 'south' | 'east' | 'west';
        const src = icons.slot[dir][team];
        return <Image source={src} style={{ width: '80%', height: '80%', resizeMode: 'contain' }} />;
      }

      // space checkerboard
      return (
        <View
          style={{
            backgroundColor: isEven ? '#d1fae5' : '#ffffff', // green-100 or white
            width: '100%',
            height: '100%',
          }}
        />
      );
    };

    return (
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {renderContent()}
      </View>
    );
  };

export default Space;


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
      {renderContent()}
    </View>
  );
};

export default Space;
