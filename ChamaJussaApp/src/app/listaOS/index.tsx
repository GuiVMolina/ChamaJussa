import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Navbar } from "../../components/navbar/Navbar";
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
  Scroll,
} from "../../constants/theme";
import { CardItem } from "../../components/card/CardItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useOrdemServico } from "../../hooks/useOrdemServico";

export default function Listagem() {
  const router = useRouter();
  const os = useOrdemServico() as any[] | undefined;

  return (
    <SafeAreaView style={{ ...Container }}>
      <View style={{ ...Column }}>
        <View style={{ ...Row }}>
          <View>
            <Text style={{ ...H3 }}>Olá, Késsia</Text>
            <Text style={{ ...H1 }}>Minhas OSs</Text>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: Colors.blue, ...Button }}
            onPress={() => router.replace("/criarOS")}
          >
            <Text style={{ ...ButtonText }}>Nova OS</Text>
          </TouchableOpacity>
        </View>

        <View style={{ maxHeight: 50 }}>
          <ScrollView
            contentContainerStyle={{ ...Scroll }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={{ backgroundColor: Colors.blue, ...Button }}
            >
              <Text style={{ ...ButtonText }}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...ButtonOff }}>
              <Text style={{ ...ButtonTextOff }}>Abertas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...ButtonOff }}>
              <Text style={{ ...ButtonTextOff }}>Em Andamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...ButtonOff }}>
              <Text style={{ ...ButtonTextOff }}>Concluídas</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <FlatList
          data={os}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ ...Scroll }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardItem item={item} />}
        />
      </View>
      <Navbar />
    </SafeAreaView>
  );
}
