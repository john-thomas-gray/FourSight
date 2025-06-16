import React from 'react'
import { Pressable, Text } from 'react-native'

const PiecePile = () => {
  return (
    <Pressable
      className="border border-red-500 m-10 py-48 px-5 bg-black"
      onPressIn={() => {}}
    >
      <Text>PiecePile</Text>
    </Pressable>
  )
}

export default PiecePile
