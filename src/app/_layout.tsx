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
      <View className="bg-background flex-1">
        <Text className="text-white m-10">Fonts Loading...</Text>
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
