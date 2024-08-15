import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
export default function SystemStatusCard() {
  const [power, setPower] = React.useState(true);
  const [shutdown, setShutdown] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  return (
    <View className="w-full bg-card p-4 rounded-2xl m-1">
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Icons.Check />
        <Text className="text-green-500 font-Semibold">All systems normal</Text>
      </View>
    </View>
  );
}
