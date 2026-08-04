import React from "react";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Login } from "./src/pages/login/Login";
import { Listagem } from "./src/pages/listagem/Listagem";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  return (
    <>
      {/* <Login /> */}
      <Listagem />
    </>
  );
}