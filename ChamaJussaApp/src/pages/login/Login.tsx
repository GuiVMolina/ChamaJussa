import {
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/imgs/logo.svg")} />

      <View style={styles.login}>
        <View style={styles.center}>
          <Text style={styles.title}>Chama Jussa</Text>
          <Text style={styles.text}>Gerenciamento de Ordens de Serviço</Text>
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="email@email.com" />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Acessar o sistema</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(0, 0%, 95%)",
  },
  login: {
    gap: 20,
    width: width * 0.95,
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "hsl(0, 0%, 85%)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "hsl(160, 85%, 40%)",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  label: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
  title: {
    fontSize: 28,
    fontFamily: "Montserrat_700Bold",
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
  input: {
    padding: 10,
    borderRadius: 10,
    fontFamily: "Montserrat_400Regular",
    backgroundColor: "hsl(0, 0%, 95%)",
    borderWidth: 1,
    borderColor: "hsl(0, 0%, 85%)",
    outlineColor: "hsl(0, 0%, 75%)",
  },
  inputArea: {
    gap: 5,
  },
  center: {
    gap: 5,
    alignItems: "center",
  },
});
