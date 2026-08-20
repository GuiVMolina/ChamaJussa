import { View, Text } from "react-native";
import { Column, Container, H1 } from "@/src/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificacaoCard } from "@/src/components/notificacaoCard/NotificacaoCard";

export default function Notificacao() {
  return (
    <SafeAreaView style={Container}>
      <Text style={H1}>Notificações</Text>
      <View style={Column}>
        <NotificacaoCard />
        <NotificacaoCard />
      </View>
    </SafeAreaView>
  );
}
