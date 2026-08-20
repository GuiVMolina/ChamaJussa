import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

// Rotas com Expo-router
import { Stack } from "expo-router";

// Fontes Personalizadas (Montserrat)
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

// SafeAreaProvider
import { SafeAreaProvider } from "react-native-safe-area-context";

// Barra de status
import { StatusBar } from "expo-status-bar";
import { Colors, Container } from "@/src/constants/theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={Container}>
        <ActivityIndicator size="large" color={Colors.red} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.red },
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
