import { View, Text } from "react-native";
import React from "react";
import Icons from "../Icons";

export default function InfoCard({
  title,
  description,
  
}: {
  title: string;
  description: string;
  
}) {
  return (
    <View className="flex flex-col justify-center items-center m-1">
      <View className="flex flex-row justify-center items-center space-x-1">
      
        <Text className="text-white font-Semibold">{title}</Text>
      </View>
      <Text className="text-white font-Regular text-[12px] w-[108px] text-center">{description}</Text>
    </View>
  );
}
