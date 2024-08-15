import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Icons from "../Icons";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-background p-8">
      <StatusBar style="light" backgroundColor="#121212" />
      <Text className="text-white font-Bold text-4xl">GServer</Text>

      <View className="flex-1 w-full mt-4 space-y-4">
        <Text className="text-white font-Bold text-xl">Active Systems (2)</Text>
        <View className="w-full flex flex-row justify-center space-x-4 ">
          <FlatList
            className="w-full"
            numColumns={3}
            columnWrapperStyle={{ flex: 1, columnGap: 16, rowGap: 16 }}
            ListFooterComponentStyle={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 16,
            }}
            data={[1, 2]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => (
              <Link href="/bot" asChild>
                <TouchableOpacity className="items-center justify-center p-2 border-2 border-zinc-700 rounded-xl space-y-2">
                  <Image
                    className="w-16 h-16 rounded-xl"
                    src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg"
                  />
                  <Text className="font-bold text-lg text-white">SGAT</Text>
                </TouchableOpacity>
              </Link>
            )}
            ListFooterComponent={() => (
              <Link href="/addbot" asChild>
                <TouchableOpacity className="flex-1 w-full items-center justify-center p-2 border-dotted border-2 border-zinc-700 rounded-xl space-y-2">
                  <Text className="font-bold text-lg text-white">Add New</Text>
                </TouchableOpacity>
              </Link>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
