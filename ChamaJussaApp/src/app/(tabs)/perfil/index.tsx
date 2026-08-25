import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Colors, theme } from "@/src/constants/theme";

export default function Perfil() {
  return (
    <SafeAreaView
      style={[theme.container, theme.safeArea, theme.column, theme.center]}
    >
      <View style={[theme.card, theme.center]}>
        <Image source={require("@/assets/img/kessia.png")} />
        <Text style={theme.h1}>Késsia Milena</Text>
        <Text style={theme.h4}>kessia@email.com</Text>
      </View>
      <TouchableOpacity style={[theme.button, { backgroundColor: Colors.main }]}>
        <Text style={theme.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
