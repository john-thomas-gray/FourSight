import { Link } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 border-2 border-red-50 items-center justify-evenly">
      <Text className="text-black font-bold text-8xl">FourSight</Text>
      <View className="flex-col items-center">
        <Link href="/twoPlayer" className="text-lg">Two Player</Link>
        <Link href="/fourPlayer" className="text-lg">Four Player</Link>
        <Link href="/settings" className="text-lg">Settings</Link>
        <Link href="/howToPlay" className="text-lg">How to Play</Link>
      </View>
    </SafeAreaView>
  );
}
