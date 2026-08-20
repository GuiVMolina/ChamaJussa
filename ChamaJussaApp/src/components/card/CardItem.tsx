import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Colors, H1, H2, P, Row, Status } from "@/src/constants/theme";
import { OrdemServico } from "@/src/@types";

interface CardItemProps {
  item: OrdemServico;
}

export const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const router = useRouter();

  const bgColor = (status: string) => {
    switch (status) {
      case "Em Andamento":
        return Colors.statusEmAndamento;
      case "Concluída":
        return Colors.statusConcluida;
      default:
        return Colors.statusAberta;
    }
  };

  const color = (status: string) => {
    switch (status) {
      case "Em Andamento":
        return Colors.yellow;
      case "Concluída":
        return Colors.green;
      default:
        return Colors.inactive;
    }
  };

  return (
    <TouchableOpacity
      style={Card}
      onPress={() => router.push(`/detalhe?id=${item.osId}`)}
    >
      <View style={Row}>
        <Text style={H1}>{item.osId}</Text>
        <Text
          style={{
            backgroundColor: bgColor(item.statusNome),
            color: color(item.statusNome),
            borderWidth: 2,
            borderColor: color(item.statusNome),
            ...Status,
          }}
        >
          {item.statusNome}
        </Text>
      </View>
      <Text style={H2}>{item.nomeItem}</Text>
      <Text style={P} numberOfLines={2}>
        {item.descricao}
      </Text>
    </TouchableOpacity>
  );
};
