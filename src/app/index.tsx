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

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background px-2">
      <StatusBar style="light" backgroundColor="#030303" />
      <View className="flex flex-row flex-wrap w-full items-center justify-center ">
        <SystemStatusCard />
        <StatusCard status="online" />
        <LoginedCard username="SGAT Funny#9869" />
        <LastUpdateCard lastUpdated={new Date("2024-02-18")} />
        <GitUpdateCard lastUpdated={new Date("2024-02-18")} />
        <StartedAtCard lastUpdated={new Date("2024-02-18")} />
        <PingCard ping={30} />
        <ConsoleCard />
      </View>
    </SafeAreaView>
  );
}
