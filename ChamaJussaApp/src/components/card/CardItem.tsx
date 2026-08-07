import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Colors, H1, H2, P, Row, Status } from "../../constants/theme";

export interface OrdemServico {
  id: string;
  numero: string;
  status: "Aberta" | "Em Andamento" | "Concluída" | string;
  titulo: string;
  descricao: string;
}

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
        return Colors.blue;
    }
  };

  return (
    <TouchableOpacity
      style={{ ...Card }}
      onPress={() => router.push(`/detalhe?id=${item.id}`)}
    >
      <View style={{ ...Row }}>
        <Text style={{ ...H1 }}>{item.numero}</Text>
        <Text
          style={{
            backgroundColor: bgColor(item.status),
            color: color(item.status),
            borderWidth: 2,
            borderColor: color(item.status),
            ...Status,
          }}
        >
          {item.status}
        </Text>
      </View>
      <Text style={{ ...H2 }}>{item.titulo}</Text>
      <Text style={{ ...P }} numberOfLines={2}>
        {item.descricao}
      </Text>
    </TouchableOpacity>
  );
};
