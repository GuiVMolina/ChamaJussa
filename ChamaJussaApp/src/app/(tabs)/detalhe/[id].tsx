import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, theme } from "@/src/constants/theme";

import LocalIcon from "@/assets/svg/LocalIcon.svg";
import ConfigIcon from "@/assets/svg/ConfigIcon.svg";
import ProfileIcon from "@/assets/svg/ProfileIcon.svg";

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
      <SafeAreaView style={theme.center}>
        <ActivityIndicator size="large" color={Colors.main} />
      </SafeAreaView>
    );
  }

  if (error || !ordem) {
    return (
      <SafeAreaView style={[theme.center, theme.safeArea]}>
        <Text style={theme.h1}>
          {error || "Ordem de serviço não encontrada..."}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[theme.container, theme.safeArea]}
      edges={["top", "left", "right"]}
    >
      <Text style={theme.h1}>Detalhes da {osIdentificador}</Text>

      <ScrollView
        style={theme.width}
        contentContainerStyle={theme.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={theme.card}>
          <View>
            <Text style={theme.h2}>{ordem.nomeItem}</Text>
            <Text style={theme.p}>Criada em {dataCriacaoFormatada}</Text>
          </View>

          <View style={theme.list}>
            <View style={theme.side}>
              <ConfigIcon color={Colors.yellow} width={32} height={32} />
              <View style={theme.flex}>
                <Text style={theme.p}>Fila</Text>
                <Text style={theme.h3}>
                  {ordem.filaNome ?? "Não informado"}
                </Text>
              </View>
            </View>

            <View style={theme.side}>
              <LocalIcon color={Colors.blue} width={32} height={32} />
              <View style={theme.flex}>
                <Text style={theme.p}>Local / Setor</Text>
                <Text style={theme.h3}>
                  {ordem.localizacaoNome ?? "Local não informado"}
                </Text>
              </View>
            </View>

            <View style={theme.side}>
              <ProfileIcon color={Colors.green} width={32} height={32} />
              <View style={theme.flex}>
                <Text style={theme.p}>Solicitante</Text>
                <Text style={theme.h3}>
                  {ordem.solicitanteNome ?? "Usuário desconhecido"}
                </Text>
              </View>
            </View>
          </View>

          <View style={theme.line} />

          <View style={theme.column}>
            <View style={theme.flex}>
              <Text style={theme.h2}>Descrição do Problema</Text>
              <Text style={theme.p}>{ordem.descricao}</Text>
            </View>

            <View>
              <Text style={theme.h2}>Foto do problema</Text>
              <Image
                source={
                  imagemUrl
                    ? { uri: imagemUrl }
                    : require("@/assets/img/cadeiraQuebrada.png")
                }
                style={theme.img}
                resizeMode="cover"
              />
            </View>
          </View>

          <TouchableOpacity style={theme.button}>
            <Text style={theme.buttonText}>Editar Solicitação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
