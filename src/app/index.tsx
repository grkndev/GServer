import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background px-2">
      <StatusBar style="light" backgroundColor="#030303" />
      <View className="">
        <Text className="text-white font-Bold">Status</Text>
        <Link href="/bot">
          <Text className="text-white">Add Bot</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
