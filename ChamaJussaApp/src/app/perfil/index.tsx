import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  Button,
  ButtonText,
  Card,
  Center,
  Colors,
  Column,
  Container,
  H1,
  H4,
  NavbarCompletion,
} from "../../constants/theme";
import { Navbar } from "../../components/navbar/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
  return (
    <SafeAreaView style={{ ...Container }}>
      <View style={{ width: "100%", ...Column, ...NavbarCompletion }}>
        <View style={{ ...Card, ...Center }}>
          <Image source={require("../../../assets/imgs/kessia.png")} />
          <Text style={{ ...H1 }}>Késsia Milena</Text>
          <Text style={{ ...H4 }}>kessia@email.com</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: Colors.red, ...Button }}>
          <Text style={{ ...ButtonText }}> Sair da Conta </Text>
        </TouchableOpacity>
      </View>
      <Navbar />
    </SafeAreaView>
  );
}
