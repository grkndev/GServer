import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StatusCard from "../Components/StatusCard";
import StartedAtCard from "../Components/StartedAtCard";
import PingCard from "../Components/PingCard";
import ConsoleCard from "../Components/ConsoleCard";
import SystemStatusCard from "../Components/SystemStatusCard";
import DiscordCard from "../Components/DiscordCard";
import { useEffect, useState } from "react";
import { sys } from "typescript";

var ws = new WebSocket("ws://192.168.1.111:8080");
export default function Bot() {
  const [wsStatus, setWsStatus] = useState<
    "Online" | "Offline" | "Reconnecting"
  >("Offline");

  const [status, setStatus] = useState({
    canPower: false,
    canShutdown: false,
    canReboot: false,
  });
  const [bot, setBot] = useState({
    avatar: "",
    username: "",
  });
  const [systemInfo, setSystemInfo] = useState({
    cpu: 0,
    ram: 0,
    ramPercentage: 0,
    uptime: new Date(),
  });

  useEffect(() => {
    startWebSocket();

    return () => {
      ws.close();
      console.log("Sayfadan çıkılıyor...");
    };
  }, []);
  const startWebSocket = () => {
    console.log("Websocket started.");
    setStatus({ canPower: false, canShutdown: false, canReboot: false });
    ws = new WebSocket(`ws://192.168.1.111:8080`);
    ws.onopen = () => {
      console.log("Connected");
      setWsStatus("Online");
    };

    ws.onmessage = (e) => {
      console.log(`Received: ${e.data}`);
      handleReceive(e.data);
    };
    ws.onclose = (e: any) => {
      setWsStatus("Offline");
    };
    ws.onerror = (e: any) => {
      console.log(`Error: ${e.message}`);
    };
  };
  const handleReceive = (res: any) => {
    res = JSON.parse(res);
    let cmd = res.type.split(":");
    if (cmd[0] === "CLOSED") {
      setStatus({
        canPower: true,
        canShutdown: false,
        canReboot: false,
      });
    }
    if (cmd[0] === "SYSTEM") {
      setSystemInfo({
        cpu: res.data.cpuSpeed,
        ram: res.data.ramUsingtoGB,
        ramPercentage: res.data.ramPercentage,
        uptime: res.data.uptime,
      });
    }
    if (cmd[0] === "BOT") {
      if (cmd[1] === "STARTED") {
        setStatus({
          canPower: false,
          canShutdown: true,
          canReboot: true,
        });
      }
      if (cmd[1] === "SHUTDOWN") {
        setStatus({
          canPower: true,
          canShutdown: false,
          canReboot: false,
        });
      }
      if (cmd[1] === "READY") {
        setStatus({
          canPower: false,
          canShutdown: true,
          canReboot: true,
        });
      }
    }
    if (cmd[0] === "CONNECTION") {
      var data = res.data.botStatus;
      setStatus({
        canPower: data === "OFFLINE",
        canShutdown: data === "ONLINE",
        canReboot: data === "ONLINE",
      });
    }
  };
  const handleSend = (message) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  };
  const reConnect = () => {
    setWsStatus("Reconnecting");
    startWebSocket();
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background px-4">
      <View className="flex flex-col w-full items-center justify-center">
        <SystemStatusCard />
        <View className="flex flex-row mx-2 mt-4">
          <StatusCard status={!status.canPower ? "online" : "offline"} />
          <StartedAtCard lastUpdated={systemInfo.uptime} />
        </View>
        <View className="flex flex-row mx-2 mt-4">
          <View className="bg-card rounded-2xl w-1/2 m-1 p-4 items-center justify-center">
            <View className="flex flex-row justify-center items-center p-1 space-x-1">
              <Text className="text-white font-Bold">CPU</Text>
            </View>

            <Text className="text-white font-Regular">{systemInfo.cpu}Ghz</Text>
          </View>
          <View className="bg-card rounded-2xl w-1/2 m-1 p-4 items-center justify-center">
            <View className="flex flex-row justify-center items-center p-1 space-x-1">
              <Text className="text-white font-Bold">RAM(GiB)</Text>
            </View>

            <Text className="text-white font-Regular">
              {systemInfo.ram}GB ({systemInfo.ramPercentage}%)
            </Text>
          </View>
        </View>
        <ConsoleCard status={status} onSend={handleSend} />
        <DiscordCard />
      </View>

      {wsStatus !== "Online" && (
        <View className="w-full space-y-1 items-center -bottom-10">
          <Text className="text-white font-bold">
            Opps! Your connection to the bot has been lost.
          </Text>
          <TouchableOpacity
            disabled={wsStatus === "Reconnecting"}
            onPress={() => reConnect()}
            className={`bg-orange-600 ${
              wsStatus === "Reconnecting" && "opacity-50"
            } rounded-xl items-center justify-center w-full p-4`}
          >
            <View className="flex flex-row space-x-2">
              {wsStatus === "Reconnecting" && (
                <ActivityIndicator color={"#fff"} />
              )}
              <Text className="font-bold text-white">
                {wsStatus === "Reconnecting" ? "Reconnecting..." : "Reconnect"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
