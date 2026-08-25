import { View, Text } from "react-native";

import { Colors, theme } from "@/src/constants/theme";

import HornIcon from "@/assets/svg/HornIcon.svg";

export const NotificacaoCard = () => {
  return (
    <View style={theme.card}>
      <HornIcon color={Colors.main}/>
      <View>
        <Text style={theme.h1}>Ordem de Serviço finalizada</Text>
        <Text style={theme.p}>
          Sua OS foi finalizada, logo ela voltará para sua sala.
        </Text>
        <View style={theme.row}>
          <Text style={theme.h4}>22/06/2026</Text>
          <Text style={theme.h4}>16:03</Text>
        </View>
      </View>
    </View>
  );
};
