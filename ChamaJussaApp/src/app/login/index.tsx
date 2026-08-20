import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
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
import { useState } from "react";
import { autenticacaoService } from "../../service/autenticacaoService";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function acessar() {
    const emailEntry = email.trim();
    const senhaEntry = senha.trim();

    if (!emailEntry || !senhaEntry) {
      Alert.alert("⚠ Atenção! ⚠", "Por favor, preencha o e-mail e senha!");
      return;
    }

    try {
      await autenticacaoService.login({ email: emailEntry, senha: senhaEntry });
      router.replace("/listaOS");
    } catch (error) {
      Alert.alert("⛒ Erro! ⛒", "E-mail ou senha inválido");
    }
  }

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
          <TextInput
            style={{ ...Input }}
            placeholder="email@email.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={{ ...InputArea }}>
          <Text style={{ ...Label }}>Senha</Text>
          <TextInput
            style={{ ...Input }}
            placeholder="********"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: Colors.green, ...Button }}
          onPress={acessar}
        >
          <Text style={{ ...ButtonText }}>Acessar o sistema</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
