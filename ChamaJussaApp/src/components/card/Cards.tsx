import { View, Text } from "react-native";
import { Card, Colors, H1, H2, P, Row, Status } from "../../constants/theme";

export const Cards = () => {
  return (
    <View style={{ ...Card }}>
      <View style={{ ...Row }}>
        <Text style={{ ...H1 }}>OS - 001</Text>
        <Text
          style={{
            backgroundColor: Colors.statusAberta,
            color: Colors.blue,
            ...Status,
          }}
        >
          Aberta
        </Text>
      </View>
      <Text style={{ ...H2 }}>Vazamento hidráulico - Bloco B</Text>
      <Text style={{ ...P }}>
        Há um vazamento constante de água por baixo da pia do banheiro masculino
        do segundo andar do Bloco B...
      </Text>
    </View>
  );
};
