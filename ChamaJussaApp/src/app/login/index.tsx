import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import {
  Button,
  ButtonText,
  Card,
  Center,
  Colors,
  Column,
  Container,
  H1,
  Input,
  InputArea,
  Label,
  P,
} from "../../constants/theme";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ ...Container }}>
      <Image source={require("../../../assets/imgs/logo.png")} />
      <View style={{ ...Card, ...Column }}>
        <View style={{ ...Center }}>
          <Text style={{ ...H1 }}>Chama Jussa</Text>
          <Text style={{ ...P }}>Gerenciamento de Ordens de Serviço</Text>
        </View>

        <View style={{ ...InputArea }}>
          <Text style={{ ...Label }}>E-mail</Text>
          <TextInput style={{ ...Input }} placeholder="email@email.com" />
        </View>
        <View style={{ ...InputArea }}>
          <Text style={{ ...Label }}>Senha</Text>
          <TextInput
            style={{ ...Input }}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: Colors.green, ...Button }}
          onPress={() => router.push("/listaOS")}
        >
          <Text style={{ ...ButtonText }}>Acessar o sistema</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
