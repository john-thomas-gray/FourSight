// Space.tsx
import React from 'react'
import { LayoutChangeEvent, Pressable, View, ViewStyle } from 'react-native'

export type SpaceProps = {
  row?: number
  col?: number
  backgroundColor?: string
  children?: React.ReactNode
  onPress?: () => void
  onLayout?: (event: LayoutChangeEvent) => void   // ← add this
}

const Space: React.FC<SpaceProps> = ({
  row = 0,
  col = 0,
  backgroundColor,
  children,
  onPress,
  onLayout,
}) => {
  const isEven = (row + col) % 2 === 0
  const bg = backgroundColor ?? (isEven ? '#d1fae5' : '#ffffff')

  const style: ViewStyle = {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bg,
  }

  if (onPress) {
    return (
      <Pressable
        style={style}
        onPress={onPress}
        onLayout={onLayout}
      >
        {children}
      </Pressable>
    )
  }

  return (
    <View style={style} onLayout={onLayout}>
      {children}
    </View>
  )
}

export default Space
