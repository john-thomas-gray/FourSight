import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Space, { SpaceProps } from './Space';

type WellSpaceProps = SpaceProps & {
  onSnap?: (centerX: number, centerY: number) => void;
};

const WellSpace: React.FC<WellSpaceProps> = ({ children, onSnap, ...rest }) => {
  const [layout, setLayout] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

  const handleLayout = (e: LayoutChangeEvent) => {
    const { x, y, width, height } = e.nativeEvent.layout;
    setLayout({ x, y, width, height });
  };

  useEffect(() => {
    if (layout && onSnap) {
      const centerX = layout.x + layout.width / 2;
      const centerY = layout.y + layout.height / 2;
      onSnap(centerX, centerY);
    }
  }, [layout, onSnap]);

  return (
    <View onLayout={handleLayout} style={{ flex: 1 }}>
      <Space {...rest}>{children}</Space>
    </View>
  );
};

export default WellSpace;
