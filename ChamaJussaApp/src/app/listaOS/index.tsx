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

const ordens = [
  {
    id: "1",
    numero: "OS-001",
    status: "Aberta",
    titulo: "Vazamento hidráulico no Bloco B",
    descricao:
      "Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar...",
  },
  {
    id: "2",
    numero: "OS-002",
    status: "Em Andamento",
    titulo: "Computador sem internet",
    descricao:
      "O computador do laboratório 4 não está conseguindo acessar a internet.",
  },
  {
    id: "3",
    numero: "OS-003",
    status: "Concluída",
    titulo: "Projetor queimado",
    descricao: "Foi realizada a troca da lâmpada do projetor.",
  },
];

export default function Listagem() {
  const router = useRouter();
  
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
          data={ordens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardItem item={item} />}
          contentContainerStyle={{ ...Scroll }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Navbar />
    </SafeAreaView>
  );
}
