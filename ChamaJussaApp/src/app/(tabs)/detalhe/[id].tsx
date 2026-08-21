import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import {
  Button,
  ButtonText,
  Card,
  Center,
  Colors,
  Column,
  H1,
  H2,
  H3,
  Img,
  Line,
  List,
  P,
  SafeArea,
  Scroll,
  Side,
} from "@/src/constants/theme";

import ProfileIcon from "@/assets/svg/ProfileIcon.svg";
import ConfigIcon from "@/assets/svg/ConfigIcon.svg";
import LocalIcon from "@/assets/svg/LocalIcon.svg";

import { useDetalheOS } from "@/src/hooks/useDetalheOS";

export default function Detalhe() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    ordem,
    loading,
    error,
    osIdentificador,
    imagemUrl,
    dataCriacaoFormatada,
  } = useDetalheOS(id);

  if (loading) {
    return (
      <SafeAreaView style={Center}>
        <ActivityIndicator size="large" color={Colors.red} />
      </SafeAreaView>
    );
  }

  if (error || !ordem) {
    return (
      <SafeAreaView style={[Center, SafeArea]}>
        <Text style={H1}>{error || "Ordem de serviço não encontrada..."}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={SafeArea} edges={["top", "left", "right"]}>
      <Text style={H1}>Detalhes da {osIdentificador}</Text>
      <ScrollView
        contentContainerStyle={Scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={Card}>
          <View>
            <Text style={H1}>{ordem.nomeItem}</Text>
            <Text style={P}>Criada em {dataCriacaoFormatada}</Text>
          </View>

          <View style={List}>
            <View style={Side}>
              <ConfigIcon color={Colors.red} width={24} height={24} />
              <View>
                <Text style={P}>Máquina / Equipamento</Text>
                <Text style={H3}>{ordem.nomeItem ?? "Não informado"}</Text>
              </View>
            </View>

            <View style={Side}>
              <LocalIcon color={Colors.blue} width={24} height={24} />
              <View>
                <Text style={P}>Local / Setor</Text>
                <Text style={H3}>
                  {ordem.localizacaoNome ?? "Local não informado"}
                </Text>
              </View>
            </View>

            <View style={Side}>
              <ProfileIcon color={Colors.green} width={24} height={24} />
              <View>
                <Text style={P}>Solicitante</Text>
                <Text style={H3}>
                  {ordem.solicitanteNome ?? "Usuário desconhecido"}
                </Text>
              </View>
            </View>
          </View>
          <View style={Line} />
          <View style={Column}>
            <View>
              <Text style={H2}>Descrição do Problema</Text>
              <Text style={P}>{ordem.descricao}</Text>
            </View>

            <View>
              <Text style={H2}>Foto do problema</Text>
              <Image
                source={
                  imagemUrl
                    ? { uri: imagemUrl }
                    : require("@/assets/img/cadeiraQuebrada.png")
                }
                style={Img}
                resizeMode="cover"
              />
            </View>
          </View>
          <TouchableOpacity style={Button}>
            <Text style={ButtonText}>Editar Solicitação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
