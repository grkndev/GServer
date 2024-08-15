import { View, Text } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
import moment from "moment";

export default function GitUpdateCard({
  lastUpdated = new Date(),
}: {
  lastUpdated: Date;
}) {
  return (
    <Card>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Text className="text-white font-Bold">Git Update</Text>
      </View>
      <View className="flex flex-row justify-center items-center p-1 space-x-1">
        <Text className="text-green-500 font-Regular text-[10px] ">
          {moment(lastUpdated).fromNow()}
        </Text>
      </View>
    </Card>
  );
}
