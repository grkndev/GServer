import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Addbot() {
  const [isChecking, setChecking] = React.useState(false);
  return (
    <SafeAreaView className="flex-1 bg-background items-center p-8">
      {!isChecking ? (
        <View className="flex-1 w-full">
          <Text className="text-white font-bold text-2xl">Add New System</Text>
          <View className="w-full space-y-3 mt-6">
            <View className="w-full space-y-1">
              <Text className="text-white font-bold text-lg">Name</Text>
              <TextInput className="w-full p-2 bg-zinc-800 rounded-xl text-white" />
            </View>

            <View className="w-full space-y-1">
              <Text className="text-white font-bold text-lg">
                WebSocket URI
              </Text>
              <TextInput className="w-full p-2 bg-zinc-800 rounded-xl text-white" />
            </View>

            <View className="w-full space-y-1">
              <Text className="text-white font-bold text-lg">
                WebSocket Password
              </Text>
              <TextInput secureTextEntry className="w-full p-2 bg-zinc-800 rounded-xl text-white" />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setChecking(true)}
            className="bg-white  w-full p-2 rounded-xl items-center justify-center absolute bottom-5"
          >
            <Text className="text-black font-bold text-2xl">Add</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center space-y-4">
          <ActivityIndicator size="large" color="#ffffff" />
          <Text className="text-white font-bold text-2xl text-center">
            Checking WebSocket Connection...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
