import { View, Text, Image } from "react-native";
import { Card, H1, H4, P, Row } from "../../constants/theme";

export const NotificacaoCard = () => {
  return (
    <View style={{ ...Card }}>
      <Image source={require("../../../assets/imgs/ordemDeServico.png")} />
      <View>
        <Text style={{ ...H1 }}>Ordem de Serviço finalizada</Text>
        <Text style={{ ...P }}>
          Sua OS foi finalizada, logo ela voltará para sua sala.
        </Text>
        <View style={{ ...Row }}>
          <Text style={{ ...H4 }}>22/06/2026</Text>
          <Text style={{ ...H4 }}>16:03</Text>
        </View>
      </View>
    </View>
  );
};
