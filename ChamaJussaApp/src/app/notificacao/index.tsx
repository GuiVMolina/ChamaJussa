import { View, Text } from "react-native";
import { Navbar } from "../../components/navbar/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Column, Container, H1 } from "../../constants/theme";
import { NotificacaoCard } from "../../components/notificacaoCard/NotificacaoCard";

export default function Notificacao() {
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
}
