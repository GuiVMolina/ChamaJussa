import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

import * as ImagePicker from "expo-image-picker";

import { Colors, theme } from "@/src/constants/theme";

import { useLocalizacao } from "@/src/hooks/useLocalizacao";
import { useOrdemServico } from "@/src/hooks/useOrdemServico";
import { CriarOrdemServico, ImgUpload } from "@/src/@types/ordemServico";

export default function CriarOS() {
  const [localSelecionado, setLocalSelecionado] = useState<string>("");
  const locais = useLocalizacao();

  const { cadastrarOs } = useOrdemServico();

  // Formulário
  const [nomeItem, setNomeItem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState<ImgUpload | null>(null);

  async function handleSalvar() {
    // Validação básica
    if (!nomeItem.trim() || !descricao.trim() || !localSelecionado) {
      Alert.alert("Atenção", "Preencha todos os campos");
      return;
    }

    // Monta o objeto final para mandar pro hook
    const novaOs: CriarOrdemServico = {
      nomeItem: nomeItem,
      localizacaoId: localSelecionado,
      descricao: descricao,
      imagem: imagem,
    };

    const sucesso = await cadastrarOs(novaOs);

    // Limpa os campos se deu certo
    if (sucesso) {
      setNomeItem("");
      setLocalSelecionado("");
      setDescricao("");
      setImagem(null);
      Alert.alert("Cadastro realizado com sucesso!");
    }
  }

  // 1. Função para abrir a CÂMERA
  async function tirarFoto() {
    // Pede autorização ao usuário para acessar a câmera física do aparelho.
    // A propriedade 'granted' retorna 'true' se o usuário aceitou ou 'false' se recusou.
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) {
      Alert.alert(
        "Permissão necessária",
        "Permita o acesso à câmera para tirar fotos.",
      );
      return;
    }
    // Abre a interface nativa da câmera para o usuário tirar a foto
    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Permite que o usuário corte ou ajuste a foto após o clique
      quality: 0.7, // Reduz a qualidade da imagem (70%) para não sobrecarregar o upload/banco
    });

    // Verifica se o usuário concluiu a foto (não cancelou) e se a imagem foi capturada com sucesso
    if (!resultado.canceled && resultado.assets[0]) {
      // Pega a foto que acabou de ser tirada
      const foto = resultado.assets[0];
      // Atualiza o estado 'imagem' com os dados necessários para o envio (FormData/API)
      setImagem({
        uri: foto.uri,
        name: foto.fileName || `foto_${Date.now()}.jpg`,
        mimeType: foto.mimeType || "image/jpeg",
      });
    }
  }

  // 2. Função para abrir a GALERIA
  async function escolherDaGaleria() {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      Alert.alert("Permissão necessária", "Permita o acesso à galeria.");
      return;
    }
    // Abre a galeria de fotos do celular
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });
    // Se o usuário selecionou uma foto e não fechou a galeria sem escolher
    if (!resultado.canceled && resultado.assets[0]) {
      const foto = resultado.assets[0];
      setImagem({
        uri: foto.uri,
        name: foto.fileName || `foto_${Date.now()}.jpg`,
        mimeType: foto.mimeType || "image/jpeg",
      });
    }
  }

  // 3. Menu de Opções ao clicar no botão de imagem
  function selecionarOpcaoImagem() {
    Alert.alert("Selecionar Foto", "De onde você quer obter a foto?", [
      { text: "Câmera", onPress: tirarFoto },
      { text: "Galeria", onPress: escolherDaGaleria },
      { text: "Cancelar", style: "cancel" },
    ]);
  }

  return (
    <SafeAreaView
      style={[theme.container, theme.column, theme.safeArea]}
      edges={["top", "left", "right"]}
    >
      <Text style={theme.h1}>Criar ordem de serviço</Text>
      <ScrollView
        style={theme.width}
        contentContainerStyle={[theme.card, theme.column]}
        showsVerticalScrollIndicator={false}
      >
        <View style={theme.inputArea}>
          <Text style={theme.label}>Título do problema</Text>
          <TextInput
            style={theme.input}
            placeholder="Ex: Vazamento da pia"
            value={nomeItem}
            onChangeText={setNomeItem}
          />
        </View>
        <View style={theme.inputArea}>
          <Text style={theme.label}>Local / Setor</Text>
          <Picker
            selectedValue={localSelecionado}
            onValueChange={(itemValue) => setLocalSelecionado(itemValue)}
          >
            <Picker.Item label="Selecione o local/setor..." value="" />
            {locais.map((local) => (
              <Picker.Item
                label={`${local.nome} - ${local.andar}`}
                value={local.localizacao_id}
              />
            ))}
          </Picker>
        </View>
        <View style={theme.inputArea}>
          <Text style={theme.label}>Descrição do problema</Text>
          <TextInput
            style={[theme.input, theme.textArea]}
            placeholder="Ex: Vazamento da pia"
            multiline={true}
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>
        <View style={theme.inputArea}>
          <Text style={theme.label}>Imagem / Foto do problema</Text>
          <TextInput style={theme.input} placeholder="" />
        </View>
        <TouchableOpacity
          style={[theme.button, { backgroundColor: Colors.green }]}
        >
          <Text style={theme.buttonText}>Abrir Ordem de Serviço</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
