import { View, Text, Image, StyleSheet } from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Image source={require("../../../assets/imgs/MinhasOS.svg")} />
        <Text style={styles.text}>Minhas OS</Text>
      </View>
      <View style={styles.button}>
        <Image source={require("../../../assets/imgs/CriarOS.svg")} />
        <Text style={styles.text}>Criar OS</Text>
      </View>
      <View style={styles.button}>
        <Image source={require("../../../assets/imgs/Notificacoes.svg")} />
        <Text style={styles.text}>Notificações</Text>
      </View>
      <View style={styles.button}>
        <Image source={require("../../../assets/imgs/Perfil.svg")} />
        <Text style={styles.text}>Perfil</Text>
      </View>
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
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between"
  },
});
