import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../../constants/theme";

export const Navbar = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Listagem")}
      >
        <Image
          source={require("../../../assets/imgs/minhasOS.png")}
          style={{ ...Icon }}
        />
        <Text style={styles.text}>Minhas OS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Servico")}
      >
        <Image
          source={require("../../../assets/imgs/criarOS.png")}
          style={{ ...Icon }}
        />
        <Text style={styles.text}>Criar OS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Notificacao")}
      >
        <Image
          source={require("../../../assets/imgs/notificacoes.png")}
          style={{ ...Icon }}
        />
        <Text style={styles.text}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          source={require("../../../assets/imgs/perfil.png")}
          style={{ ...Icon }}
        />
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
