import React from 'react'
import { View } from 'react-native'

const Piece = ({ team }: { team: number }) => {
  return (
    <View className={`${team === 1 ? "bg-white border-black" : "bg-black border-white"} border-2 h-8 w-8 rounded-full`} />
  )
}

export default Piece
