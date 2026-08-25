import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import { Colors, theme } from "@/src/constants/theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={theme.container}>
        <ActivityIndicator size="large" color={Colors.main} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.main },
          headerTitleStyle: {
            color: Colors.white,
            fontFamily: "Montserrat_700Bold",
          },
          headerTintColor: Colors.white,
        }}
      >
        <Stack.Screen
          name="login/index"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "Sair",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
