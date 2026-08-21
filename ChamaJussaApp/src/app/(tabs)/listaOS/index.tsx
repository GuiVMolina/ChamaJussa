import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Button,
  ButtonOff,
  ButtonText,
  ButtonTextOff,
  Colors,
  Column,
  Container,
  H1,
  H3,
  Row,
  SafeArea,
  Scroll,
  SpaceBetween,
} from "@/src/constants/theme";
import { useRouter } from "expo-router";
import { CardItem } from "@/src/components/card/CardItem";
import { useOrdemServico } from "@/src/hooks/useOrdemServico";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Listagem() {
  const router = useRouter();
  const { os } = useOrdemServico();

  return (
    <SafeAreaView style={[Container, Column]} edges={["top"]}>
      <View style={[Row, SpaceBetween, SafeArea]}>
        <View>
          <Text style={H3}>Olá, Késsia</Text>
          <Text style={H1}>Minhas OSs</Text>
        </View>
        <TouchableOpacity
          style={[Button, { backgroundColor: Colors.red }]}
          onPress={() => router.push("/criarOS")}
        >
          <Text style={ButtonText}>Nova OS</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={[Scroll, SafeArea]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={[Button, { backgroundColor: Colors.red }]}>
          <Text style={ButtonText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ButtonOff}>
          <Text style={ButtonTextOff}>Abertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ButtonOff}>
          <Text style={ButtonTextOff}>Em Andamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ButtonOff}>
          <Text style={ButtonTextOff}>Concluídas</Text>
        </TouchableOpacity>
      </ScrollView>

      <FlatList
        data={os}
        keyExtractor={(item) => String(item.osId)}
        contentContainerStyle={[Scroll, SafeArea]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardItem item={item} />}
      />
    </SafeAreaView>
  );
}
