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
import { Colors } from "../constants/theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.blue },
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
        <Stack.Screen name="listaOS/index" options={{ title: "Lista de OS" }} />
        <Stack.Screen name="perfil/index" options={{ title: "Perfil" }} />
        <Stack.Screen name="detalhe/index" options={{ title: "Detalhes" }} />
        <Stack.Screen name="criarOS/index" options={{ title: "Criar OS" }} />
        <Stack.Screen
          name="notificacao/index"
          options={{ title: "Notificações" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors?.bgc || "#fff",
  },
});
