import { View, Text } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
type Status = "online" | "dnd" | "idle" | "offline";
export default function StatusCard({ status = "online" }: { status: Status }) {
  return (
    <View className="bg-card rounded-2xl w-1/2 m-1 p-2">
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Text className="text-white font-Bold">Status</Text>
      </View>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <StatusCircle status={status} />
        <Text className="text-white font-Regular">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Text>
      </View>
    </View>
  );
}

export function StatusCircle({ status }: { status: Status }) {
  switch (status.toLowerCase()) {
    case "online":
      return <View className="bg-green-500 w-3 h-3 rounded-full" />;
    case "dnd":
      return <View className="bg-red-500 w-3 h-3 rounded-full" />;
    case "idle":
      return <View className="bg-yellow-500 w-3 h-3 rounded-full" />;

    default:
      return <View className="bg-gray-500 w-3 h-3 rounded-full" />;
  }
}
