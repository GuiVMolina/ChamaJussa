import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "@/src/constants/theme";
import { useAuth } from "@/src/contexts/AuthContext";
import { useTheme } from "@/src/contexts/ThemeContext";
import { FormatarIconNome } from "@/src/utils/formatarNome";

export default function Perfil() {
  const { usuario, logout } = useAuth();
  const { colors, mudarCor } = useTheme();

  return (
    <SafeAreaView
      style={[
        theme.container,
        theme.safeArea,
        theme.column,
        theme.center,
        { backgroundColor: colors.bgc },
      ]}
    >
      <View
        style={[theme.card, theme.center, { backgroundColor: colors.white }]}
      >
        <View
          style={[
            theme.iconUsuario,
            { borderColor: colors.main, backgroundColor: colors.inactive },
          ]}
        >
          <Text style={[theme.iconLetras, { color: colors.main }]}>
            {usuario?.nome ? FormatarIconNome(usuario.nome) : ":/"}
          </Text>
        </View>
        <Text style={[theme.h1, theme.textCenter]}>{usuario?.nome}</Text>
        <Text style={theme.h4}>{usuario?.email}</Text>
      </View>

      <TouchableOpacity
        onPress={logout}
        style={[theme.button, { backgroundColor: colors.main }]}
      >
        <Text style={theme.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
      <View style={theme.row}>
        <TouchableOpacity
          style={[theme.button, { backgroundColor: colors.purple }]}
          onPress={() => mudarCor("270")}
        >
          <Text style={theme.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[theme.button, { backgroundColor: colors.blue }]}
          onPress={() => mudarCor("220")}
        >
          <Text style={theme.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[theme.button, { backgroundColor: colors.green }]}
          onPress={() => mudarCor("140")}
        >
          <Text style={theme.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[theme.button, { backgroundColor: colors.yellow }]}
          onPress={() => mudarCor("55")}
        >
          <Text style={theme.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[theme.button, { backgroundColor: colors.red }]}
          onPress={() => mudarCor("0")}
        >
          <Text style={theme.buttonText}>5</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
