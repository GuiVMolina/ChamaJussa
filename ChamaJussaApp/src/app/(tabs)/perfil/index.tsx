import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Colors, theme } from "@/src/constants/theme";

import { useAuth } from "@/src/contexts/AuthContext";
import { FormatarIconNome } from "@/src/utils/formatarNome";

export default function Perfil() {
  const { usuario, logout } = useAuth();

  return (
    <SafeAreaView
      style={[theme.container, theme.safeArea, theme.column, theme.center]}
    >
      <View style={[theme.card, theme.center]}>
        <View style={theme.iconUsuario}>
          <Text style={theme.iconLetras}>
            {usuario?.nome ? FormatarIconNome(usuario.nome) : ":/"}
          </Text>
        </View>
        <Text style={[theme.h1, theme.textCenter]}>{usuario?.nome}</Text>
        <Text style={theme.h4}>{usuario?.email}</Text>
      </View>
      <TouchableOpacity
        onPress={logout}
        style={[theme.button, { backgroundColor: Colors.main }]}
      >
        <Text style={theme.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
