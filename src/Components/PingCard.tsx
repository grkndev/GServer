import { View, Text } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";

export default function PingCard({ ping = 1 }: { ping: number }) {
  return (
    <View className="bg-card w-1/3 rounded-2xl m-1 p-2">
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Text className="text-white font-Bold">Ping</Text>
      </View>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <StatusCircle pingStatus={pingStatus(ping)} />
        <Text className={`font-Regular ${pingColor(ping)}`}>{ping}ms</Text>
      </View>
    </View>
  );
}

function StatusCircle({ pingStatus }: { pingStatus: PingType }) {
  switch (pingStatus) {
    case PingTypes.Good:
      return <View className="bg-green-500 w-3 h-3 rounded-full" />;
    case PingTypes.Average:
      return <View className="bg-yellow-500 w-3 h-3 rounded-full" />;
    case PingTypes.Bad:
      return <View className="bg-red-500 w-3 h-3 rounded-full" />;

    default:
      return <View className="bg-gray-500 w-3 h-3 rounded-full" />;
  }
}
function pingColor(ping: number) {
  if (ping < 40) {
    return "text-green-500";
  } else if (ping < 100) {
    return "text-yellow-500";
  } else {
    return "text-red-500";
  }
}
function pingStatus(ping: number) {
  if (ping < 40) {
    return PingTypes.Good;
  } else if (ping < 100) {
    return PingTypes.Average;
  } else {
    return PingTypes.Bad;
  }
}
type PingType =
  | PingTypes.Good
  | PingTypes.Bad
  | PingTypes.Average
  | PingTypes.Unknown;

enum PingTypes {
  Good = "Good",
  Bad = "Bad",
  Average = "Average",
  Unknown = "Unknown",
}
