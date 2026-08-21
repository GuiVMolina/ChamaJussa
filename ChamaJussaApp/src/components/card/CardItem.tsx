import React from "react";
import { useRouter } from "expo-router";
import { OrdemServico } from "@/src/@types/ordemServico";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Card,
  Colors,
  H1,
  H2,
  P,
  Row,
  SpaceBetween,
  Status,
} from "@/src/constants/theme";

interface CardItemProps {
  item: OrdemServico;
}

export const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const router = useRouter();

  const getStatusStyle = (status: string = "") => {
    const s = status.toLowerCase();

    if (s.includes("andamento")) {
      return { bg: Colors.statusEmAndamento, color: Colors.yellow };
    }
    if (s.includes("conclu")) {
      return { bg: Colors.statusConcluida, color: Colors.green };
    }
    return { bg: Colors.statusAberta, color: Colors.red };
  };

  const currentStatus = getStatusStyle(item?.statusNome);

  function handleNavigate() {
    router.push(`/detalhe/${item.osId}`);
  }

  return (
    <TouchableOpacity style={Card} onPress={handleNavigate}>
      <View style={[Row, SpaceBetween]}>
        <Text style={H1}>#{item.osId}</Text>
        <Text
          style={[
            Status,
            {
              backgroundColor: currentStatus.bg,
              color: currentStatus.color,
              borderWidth: 2,
              borderColor: currentStatus.color,
            },
          ]}
        >
          {item.statusNome ?? "Aberto"}
        </Text>
      </View>
      <Text style={H2}>{item.nomeItem}</Text>
      <Text style={P} numberOfLines={2}>
        {item.descricao}
      </Text>
    </TouchableOpacity>
  );
};
