import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

import { theme } from "@/src/constants/theme";

import { OrdemServico } from "@/src/@types/ordemServico";

interface CardItemProps {
  item: OrdemServico;
}

const aberta = "0, 90%, 60%";
const andamento = "60, 90%, 60%";
const concluida = "100, 90%, 60%";
const opacidade = "0.125";

export const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const router = useRouter();

  const getStatusStyle = (status: string = "") => {
    const s = status.toLowerCase();

    if (s.includes("andamento")) {
      return {
        bg: `hsla(${andamento}, ${opacidade})`,
        color: `hsl(${andamento})`,
        borderColor: `hsl(${andamento})`,
      };
    }
    if (s.includes(`conclu`)) {
      return {
        bg: `hsla(${concluida}, ${opacidade})`,
        color: `hsl(${concluida})`,
        borderColor: `hsl(${concluida})`,
      };
    }
    return {
      bg: `hsla(${aberta}, ${opacidade})`,
      color: `hsl(${aberta})`,
      borderColor: `hsl(${aberta})`,
    };
  };

  const currentStatus = getStatusStyle(item?.statusNome);

  function handleNavigate() {
    router.push(`/detalhe/${item.osId}`);
  }

  return (
    <TouchableOpacity style={theme.card} onPress={handleNavigate}>
      <View style={[theme.row, theme.spaceBetween]}>
        <Text style={theme.h1}>#{item.osId}</Text>
        <Text
          style={[
            theme.status,
            {
              borderWidth: 2,
              borderColor: currentStatus.borderColor,
              color: currentStatus.color,
              backgroundColor: currentStatus.bg,
            },
          ]}
        >
          {item.statusNome ?? "Aberto"}
        </Text>
      </View>
      <Text style={theme.h2}>{item.nomeItem}</Text>
      <Text style={theme.p} numberOfLines={2}>
        {item.descricao}
      </Text>
    </TouchableOpacity>
  );
};
