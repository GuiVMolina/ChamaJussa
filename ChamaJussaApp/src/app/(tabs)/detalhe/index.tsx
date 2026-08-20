import {
  Button,
  ButtonText,
  Card,
  Column,
  Container,
  H1,
  H2,
  H3,
  Icon,
  Img,
  Line,
  P,
  Side,
} from "@/src/constants/theme";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detalhe() {
  return (
    <SafeAreaView style={Container}>
      <Text style={H1}>Detalhes da OS-1001</Text>
      <View style={Card}>
        <View>
          <Text style={H1}>Vazamento hidráulico</Text>
          <Text style={P}>Criada em 17/06/2026, 11:29:58</Text>
        </View>
        <View style={Column}>
          <View style={Side}>
            <Image source={require("@/assets/img/config.png")} style={Icon} />
            <View>
              <Text style={P}>Máquina / Equipamento</Text>
              <Text style={H3}>Tubulação</Text>
            </View>
          </View>
          <View style={Side}>
            <Image source={require("@/assets/img/local.png")} style={Icon} />
            <View>
              <Text style={P}>Local / Setor</Text>
              <Text style={H3}>Banheiro Masculino</Text>
              <Text style={H3}>Bloco B - 2º Andar</Text>
            </View>
          </View>
          <View style={Side}>
            <Image source={require("@/assets/img/perfil2.png")} style={Icon} />
            <View>
              <Text style={P}>Solicitante</Text>
              <Text style={H3}>Késsia Milena</Text>
            </View>
          </View>
        </View>
        <View style={Line} />
        <View style={Column}>
          <View>
            <Text style={H1}>Descrição do Problema</Text>
            <Text style={P}>
              Há um vazamento constante de água por baixo da pia do banheiro
              masculino do segundo andar do Bloco B. Está alagando o chão e
              causando risco de queda.
            </Text>
          </View>
          <View>
            <Text style={H2}>Foto do problema</Text>
            <Image
              source={require("@/assets/img/cadeiraQuebrada.png")}
              style={Img}
            />
          </View>
        </View>
        <Pressable style={Button}>
          <Text style={ButtonText}>Editar Solicitação</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
