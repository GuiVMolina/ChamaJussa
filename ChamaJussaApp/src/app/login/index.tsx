import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, theme } from "@/src/constants/theme";

import { autenticacaoService } from "@/src/service/autenticacaoService";

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
      router.push("/(tabs)/listaOS");
    } catch (error) {
      Alert.alert("⛒ Erro! ⛒", "E-mail ou senha inválido");
    }
  }

  return (
    <SafeAreaView style={[theme.container, theme.safeArea]}>
      <Image source={require("@/assets/img/logo.png")} />
      <View style={[theme.card, theme.column]}>
        <View style={theme.center}>
          <Text style={theme.h1}>Chama Jussa</Text>
          <Text style={theme.p}>Gerenciamento de Ordens de Serviço</Text>
        </View>

        <View style={theme.inputArea}>
          <Text style={theme.label}>E-mail</Text>
          <TextInput
            style={theme.input}
            placeholder="email@email.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={theme.inputArea}>
          <Text style={theme.label}>Senha</Text>
          <TextInput
            style={theme.input}
            placeholder="********"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <TouchableOpacity
          style={[theme.button, { backgroundColor: Colors.green }]}
          onPress={acessar}
        >
          <Text style={theme.buttonText}>Acessar o sistema</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
