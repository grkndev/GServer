import { View, Text, Pressable, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icons from "../Icons";
import Card from "./Card";
import { StatusCircle } from "./StatusCard";
import InfoCard from "./InfoCard";
import moment from "moment";
import Info from "../Icons/Info";
export default function DiscordCard() {
  const [power, setPower] = React.useState(true);
  const [shutdown, setShutdown] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  return (
    <Card
      width="w-full"
      height="h-[36vh] aling-start selft-start items-start justify-between p-4"
      className=""
    >
      <View className="flex ">
        <View className="flex flex-row self-start items-center p-1 space-x-1">
          <Icons.Discord />
          <Text className="text-white font-Bold">Discord</Text>
        </View>
        <View className="flex flex-col justify-center items-center p-1 mt-2 space-y-1">
          {/* USER INFO */}
          <View className="flex flex-row items-center justify-center gap-x-4">
            <View className="flex items-center justify-center">
              <Image
                source={require("../../assets/botLogo.jpeg")}
                className="w-24 h-24 rounded-full "
              />
            </View>
            <View className="flex flex-col items-start justify-center">
              <Text className="text-white font-semibold text-lg">
                SGAT Funny#9869
              </Text>
              <View className="flex flex-row justify-center items-center gap-x-2">
                <Text className="text-white font-semibold">Idle</Text>
                <View>
                  <StatusCircle status="offline" />
                </View>
                <Text className="text-white font-semibold">
                  Playing Sanalika
                </Text>
              </View>
            </View>
          </View>
          {/* CONTENT */}
          <View className="flex flex-row justify-between items-start py-4">
            <InfoCard title="Guilds" description="1 Guild" />
            <InfoCard title="Users" description="1 User" />
            <InfoCard title="Shards" description="1 Shard" />
          </View>
        </View>
      </View>
    </Card>
  );
}
