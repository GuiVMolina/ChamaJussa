import { View, Text, StyleSheet } from "react-native";
import { Navbar } from "../../components/navbar/Navbar";
import { NotificacaoCard } from "../../components/notificacaoCard/NotificacaoCard";
import { Column, Container, H1 } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export const Notificacao = () => {
  return (
    <SafeAreaView style={{ ...Container }}>
      <Text style={{ ...H1 }}>Notificações</Text>
      <View style={{ ...Column }}>
        <NotificacaoCard />
        <NotificacaoCard />
      </View>
      <Navbar />
    </SafeAreaView>
  );
};
