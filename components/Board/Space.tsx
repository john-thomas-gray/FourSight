import React from 'react';
import { Text, View } from 'react-native';

type SpaceProps = {
  type?: 'space' | 'slot' | 'corner';
  orientation?: 'N' | 'S' | 'E' | 'W';
};

const Space: React.FC<SpaceProps> = ({
  type = 'space',
  orientation = 'N'
}) => {
  const renderContent = () => {
    switch (type) {
      case 'corner':
        return <Text>Corner ({orientation})</Text>;
      case 'slot':
        return <Text>Slot ({orientation})</Text>;
      default:
        return <View className="bg-red-100"></View>;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
      {renderContent()}
    </View>
  );
};

export default Space;
