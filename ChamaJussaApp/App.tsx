import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

// Fontes Personalizadas (Montserrat)
// npx expo install @expo-google-fonts/montserrat expo-font
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

// SafeAreaProvider
// npx expo install react-native-safe-area-context
import { SafeAreaProvider } from "react-native-safe-area-context";

// Barra de status
// npx expo install expo-status-bar
import { StatusBar } from "expo-status-bar";

// React Navigation
// npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pastas do Projeto
import { Colors } from "./src/constants/theme";
import { Login } from "./src/pages/login/Login";
import { Perfil } from "./src/pages/perfil/Perfil";
import { Detalhe } from "./src/pages/detalhe/Detalhe";
import { Servico } from "./src/pages/servico/Servico";
import { Listagem } from "./src/pages/listagem/Listagem";
import { Notificacao } from "./src/pages/notificacao/Notificacao";

// Configuração da navegação estática
const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: Login,
      options: {
        headerShown: false,
      },
    },
    Perfil: Perfil,
    Detalhe: Detalhe,
    Servico: Servico,
    Listagem: Listagem,
    Notificacao: Notificacao,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="hsl(160, 85%, 40%)" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bgc,
  },
});
