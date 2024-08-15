import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
export default function ConsoleCard() {
  const [power, setPower] = React.useState(true);
  return (
    <View className="bg-card w-full rounded-2xl p-4 m-4">
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Text className="text-white font-Bold">Console</Text>
      </View>
      <View className="flex flex-row justify-center items-center p-2 space-x-2">
        <TouchableOpacity
          disabled={power}
          className={`text-black  ${
            power ? "bg-white/25" : "bg-white"
          } p-2 rounded-lg w-1/3 items-center justify-center flex flex-row space-x-1 font-Regular`}
        >
          <Text className="font-Semibold">Power</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!power}
          className={`text-black  ${
            !power ? "bg-white/25" : "bg-white"
          } p-2 rounded-lg w-1/3 items-center justify-center flex flex-row space-x-1 font-Regular`}
        >
          <Text className="font-Semibold">Shutdown</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!power}
          className={`text-black  ${
            !power ? "bg-white/25" : "bg-white"
          } p-2 rounded-lg w-1/3 items-center justify-center flex flex-row space-x-1 font-Regular`}
        >
          <Text className="font-Semibold">Reboot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
