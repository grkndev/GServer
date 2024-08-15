/// <reference types="nativewind/types" />
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontLoaded, fonterr] = useFonts({
    Light: Montserrat_300Light,
    Regular: Montserrat_400Regular,
    SemiBold: Montserrat_600SemiBold,
    Bold: Montserrat_700Bold,
  });

  useEffect(() => {
    if (fontLoaded || fonterr) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontLoaded, fonterr]);

  if (!appReady) {
    return (
      <View className="bg-background flex-1 justify-center items-center">
        <Text className="text-white m-10">Fonts Loading...</Text>
      </View>
    );
  }

  return (
    
      // <StatusBar style="light" backgroundColor="#030303" />
      <Stack initialRouteName="index" screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="addbot" options={{ headerShown: false }} />
        <Stack.Screen name="bot" options={{ headerShown: false }} />
      </Stack>
    
  );
};

export default RootLayout;
