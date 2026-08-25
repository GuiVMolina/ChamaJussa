import { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, theme } from "@/src/constants/theme";
import { CardItem } from "@/src/components/card/CardItem";
import { useOrdemServico } from "@/src/hooks/useOrdemServico";

const filtro = ["Todos", "Abertas", "Em Andamento", "Concluídas"];

export default function ListaOS() {
  const router = useRouter();
  const { os } = useOrdemServico();

  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const osFiltradas = os?.filter((item) => {
    if (filtroAtivo === "Todos") return true;
    return item.statusNome === filtroAtivo;
  });

  return (
    <SafeAreaView style={[theme.flex, theme.column]} edges={["top"]}>
      <View style={[theme.row, theme.spaceBetween, theme.safeArea]}>
        <View>
          <Text style={theme.h3}>Olá, Késsia</Text>
          <Text style={theme.h1}>Minhas OSs</Text>
        </View>
        <TouchableOpacity
          style={[theme.button, { backgroundColor: Colors.main }]}
          onPress={() => router.push("/criarOS")}
        >
          <Text style={theme.buttonText}>Nova OS</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 50, flexGrow: 0 }}>
        <ScrollView
          contentContainerStyle={[theme.scroll, theme.safeArea]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {filtro.map((itemFiltro) => {
            const isSelected = filtroAtivo === itemFiltro;

            return (
              <TouchableOpacity
                key={itemFiltro}
                style={
                  isSelected
                    ? [theme.button, { backgroundColor: Colors.main }]
                    : theme.buttonOff
                }
                onPress={() => setFiltroAtivo(itemFiltro)}
              >
                <Text
                  style={isSelected ? theme.buttonText : theme.buttonTextOff}
                >
                  {itemFiltro}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={osFiltradas}
        keyExtractor={(item) => String(item.osId)}
        contentContainerStyle={[theme.scroll, theme.safeArea]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardItem item={item} />}
      />
    </SafeAreaView>
  );
}
