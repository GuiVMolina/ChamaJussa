import { View, Text, Pressable } from "react-native";
import { Cards } from "../../components/card/Cards";
import { Navbar } from "../../components/navbar/Navbar";
import {
  Button,
  ButtonOff,
  ButtonText,
  ButtonTextOff,
  ButtonArea,
  Colors,
  Column,
  Container,
  H1,
  H3,
  Row,
} from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export const Listagem = () => {
  return (
    <SafeAreaView style={{ ...Container }}>
      <View style={{ ...Column }}>
        <View style={{ ...Row }}>
          <View>
            <Text style={{ ...H3 }}>Olá, Késsia</Text>
            <Text style={{ ...H1 }}>Minhas OSs</Text>
          </View>
          <Pressable style={{ backgroundColor: Colors.blue, ...Button }}>
            <Text style={{ ...ButtonText }}>Nova OS</Text>
          </Pressable>
        </View>
        <View style={{ ...ButtonArea }}>
          <Pressable style={{ backgroundColor: Colors.blue, ...Button }}>
            <Text style={{ ...ButtonText }}>Todos</Text>
          </Pressable>
          <Pressable style={{ ...ButtonOff }}>
            <Text style={{ ...ButtonTextOff }}>Abertas</Text>
          </Pressable>
          <Pressable style={{ ...ButtonOff }}>
            <Text style={{ ...ButtonTextOff }}>Em Andamento</Text>
          </Pressable>
          <Pressable style={{ ...ButtonOff }}>
            <Text style={{ ...ButtonTextOff }}>Concluídas</Text>
          </Pressable>
        </View>
        <View style={{ ...Column }}>
          <Cards />
          <Cards />
        </View>
      </View>
      <Navbar />
    </SafeAreaView>
  );
};
