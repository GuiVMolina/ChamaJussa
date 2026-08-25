import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "@/src/constants/theme";

import { NotificacaoCard } from "@/src/components/notificacaoCard/NotificacaoCard";

export default function Notificacao() {
  return (
    <SafeAreaView
      style={[theme.container, theme.column, theme.safeArea]}
      edges={["top", "left", "right"]}
    >
      <Text style={theme.h1}>Notificações</Text>
      <ScrollView
        contentContainerStyle={theme.scroll}
        showsVerticalScrollIndicator={false}
      >
        <NotificacaoCard />
        <NotificacaoCard />
        <NotificacaoCard />
        <NotificacaoCard />
      </ScrollView>
    </SafeAreaView>
  );
}
