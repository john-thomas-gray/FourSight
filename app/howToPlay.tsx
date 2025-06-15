import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HowToPlay = () => {
  const [twoPlayerSelected, setTwoPlayerSelected] = useState(true)

  const handleSelectTwoPlayer = () => {
    if (twoPlayerSelected) return null;
    setTwoPlayerSelected(true);
  };

  const handleSelectFourPlayer = () => {
    if (!twoPlayerSelected) return null;
    console.log("four")
    setTwoPlayerSelected(false);
  };


  return (
    <SafeAreaView className="flex-1 border-2 border-red-50 items-center">
      <Text className="text-black font-bold text-6xl">How to Play</Text>
      <View className="flex-col">
        <View className="flex-row justify-evenly">
          <Pressable className="flex" onPress={() => {handleSelectTwoPlayer()}}>
            <Text className={`${twoPlayerSelected ? "font-bold" : "font-regular"} text-3xl text-black`}>Two Player</Text>
          </Pressable>
          <Pressable className="flex" onPress={() => {handleSelectFourPlayer()}}>
            <Text className={`${!twoPlayerSelected ? "font-bold" : "font-regular"} text-3xl text-black`}>Four Player</Text>
          </Pressable>

        </View>
        {
        twoPlayerSelected ?
        <Text className="leading-10">
          Each player takes a turn dropping a piece into the board.{"\n"}
          Pieces can be dropped from any side of the board and fall to the board&apos;s opposite edge or another piece.{"\n"}
          The first player to place four pieces in a row (horizontally, vertically or diagonally) wins the game.{"\n"}
          But here&apos;s the twist...{"\n"}
          A player may forfeit placing a piece to shift gravity and pull all pieces to one side of the board!
        </Text> :
        <Text className="leading-10">
          Players are on teams of two. Your partner is the person seated across the board from you.{"\n"}
          You may only drop pieces from your side of the board. They fall to the board&apos;s opposite edge or another piece.{"\n"}
          The first team to place four pieces in a row (horizontally, vertically or diagonally) wins the game.{"\n"}
          But here&apos;s the twist...{"\n"}
          A player may forfeit placing a piece to either pull all pieces to their side of the board or rotate the board 90°!

        </Text>
        }
      </View>
    </SafeAreaView>
  )
}

export default HowToPlay
