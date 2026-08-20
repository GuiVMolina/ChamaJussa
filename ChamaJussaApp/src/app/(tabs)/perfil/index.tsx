import {
  Button,
  ButtonText,
  Card,
  Center,
  Colors,
  Container,
  H1,
  H4,
} from "@/src/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Perfil() {
  return (
    <SafeAreaView style={Container}>
      <View style={[Card, Center]}>
        <Image source={require("@/assets/img/kessia.png")} />
        <Text style={H1}>Késsia Milena</Text>
        <Text style={H4}>kessia@email.com</Text>
      </View>
      <TouchableOpacity style={[Button, { backgroundColor: Colors.red }]}>
        <Text style={ButtonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
