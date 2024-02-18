import { View, Text } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
export default function LoginedCard({
  username = "Discord User#0001",
}: {
  username: string;
}) {
  return (
    <Card>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Icons.Person />
        <Text className="text-white font-Bold">Logined</Text>
      </View>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Text className="text-green-500 font-Regular text-[10px] ">
          {username}
        </Text>
      </View>
    </Card>
  );
}
