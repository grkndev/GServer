import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "../Icons";

import StatusCard from "../Components/StatusCard";
import Card from "../Components/Card";
import LoginedCard from "../Components/LoginedCard";
import LastUpdateCard from "../Components/LastUpdateCard";
import GitUpdateCard from "../Components/GitUpdateCard";
import StartedAtCard from "../Components/StartedAtCard";
import PingCard from "../Components/PingCard";
import ConsoleCard from "../Components/ConsoleCard";
import SystemStatusCard from "../Components/SystemStatusCard";
import DiscordCard from "../Components/DiscordCard";

export default function Bot() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background px-4">
      <View className="flex flex-col w-full items-center justify-center">
        <SystemStatusCard />
        <View className="flex flex-row mx-2 mt-4">
          <StatusCard status="online" />
          <StartedAtCard lastUpdated={new Date("2024-02-18")} />
          <PingCard ping={30} />
        </View>
        <ConsoleCard />
        <DiscordCard />
      </View>
    </SafeAreaView>
  );
}
