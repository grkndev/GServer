import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
export default function ConsoleCard() {
  const [power, setPower] = React.useState(true);
  const [shutdown, setShutdown] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  return (
    <Card width="w-full" height="h-[96px]">
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Icons.Activity />
        <Text className="text-white font-Bold">Console</Text>
      </View>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <TouchableOpacity
          disabled={power}
          className={`text-black  ${
            power ? "bg-white/25" : "bg-white"
          } p-2 rounded-lg w-[118px] items-center justify-center flex flex-row space-x-1 font-Regular`}
        >
          <Icons.Play />
          <Text className="font-Semibold">Power</Text>
        </TouchableOpacity>

        <TouchableOpacity className="text-black bg-white p-2 rounded-lg w-[118px] items-center justify-center flex flex-row space-x-1 font-Regular">
          <Icons.MinusCircle />
          <Text className="font-Semibold">Shutdown</Text>
        </TouchableOpacity>

        <TouchableOpacity className="text-black bg-white p-2 rounded-lg w-[118px] items-center justify-center flex flex-row space-x-1 font-Regular">
          <Icons.SyncRetry />
          <Text className="font-Semibold">Reset</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}
