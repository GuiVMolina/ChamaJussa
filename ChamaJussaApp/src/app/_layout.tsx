import React from "react";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import { AuthProvider } from "@/src/contexts/AuthContext";
import { ThemeProvider, useTheme } from "@/src/contexts/ThemeContext";

function AppContent() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.main },
        headerTitleStyle: {
          color: colors.white,
          fontFamily: "Montserrat_700Bold",
        },
        headerTintColor: colors.white,
        animation: "fade",
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
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
