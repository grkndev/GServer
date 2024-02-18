import { View, Text } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
import moment from "moment";

export default function StartedAtCard({
  lastUpdated = new Date(),
}: {
  lastUpdated: Date;
}) {
  return (
    <Card>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Icons.Clock />
        <Text className="text-white font-Bold">Started At</Text>
      </View>
      <View className="flex flex-col justify-center items-center p-1">
        <Text className="text-green-500 font-Semibold text-[10px] ">{
          moment(lastUpdated).format("hh:mm:ss")
        }</Text>
         <Text className="text-green-500 font-Regular text-[10px] ">{
          moment(lastUpdated).format("D/M/yyyy")
        }</Text>
      </View>
    </Card>
  );
}
