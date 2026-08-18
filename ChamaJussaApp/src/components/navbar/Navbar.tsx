import { useRouter } from "expo-router";
import { styles } from "./Navbar.styles";
import { Icon } from "../../constants/theme";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/listaOS")}
      >
        <Image
          source={require("../../../assets/imgs/minhasOS.png")}
          style={{ ...Icon }}
        />
        <Text style={styles.text}>Minhas OS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/criarOS")}
      >
        <Image
          source={require("../../../assets/imgs/criarOS.png")}
          style={{ ...Icon }}
        />
        <Text style={styles.text}>Criar OS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/notificacao")}
      >
        <Image
          source={require("../../../assets/imgs/notificacoes.png")}
          style={{ ...Icon }}
        />
        <Text style={styles.text}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/perfil")}
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
