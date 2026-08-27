import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

import * as ImagePicker from "expo-image-picker";

import { Colors, theme } from "@/src/constants/theme";

import { useLocalizacao } from "@/src/hooks/useLocalizacao";
import { useOrdemServico } from "@/src/hooks/useOrdemServico";
import { CriarOrdemServico, ImgUpload } from "@/src/@types/ordemServico";

import UploadIcon from "@/assets/svg/UploadIcon.svg";
import { useFila } from "@/src/hooks/useFila";

export default function CriarOS() {
  const { cadastrarOs } = useOrdemServico();

  // Formulário
  const [nomeItem, setNomeItem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localSelecionado, setLocalSelecionado] = useState<string>("");
  const locais = useLocalizacao();
  const [filaSelecionada, setFilaSelecionada] = useState<string>("");
  const filas = useFila();
  const [imagem, setImagem] = useState<ImgUpload | null>(null);

  async function handleSalvar() {
    // Validação básica
    if (!nomeItem.trim() || !descricao.trim() || !localSelecionado) {
      Alert.alert("Atenção", "Preencha todos os campos obrigatórios.");
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
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    }
  }

  // 1. Função para abrir a CÂMERA
  async function tirarFoto() {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) {
      Alert.alert(
        "Permissão necessária",
        "Permita o acesso à câmera para tirar fotos.",
      );
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.7,
    });

    if (!resultado.canceled && resultado.assets[0]) {
      const foto = resultado.assets[0];
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

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

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
      style={[theme.container, theme.safeArea]}
      edges={["top", "left", "right"]}
    >
      <Text style={theme.h1}>Criar ordem de serviço</Text>
      <ScrollView
        style={theme.width}
        contentContainerStyle={[
          theme.card,
          theme.scroll,
          { paddingBottom: 40 },
        ]}
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
          <View style={theme.pickerContainer}>
            <Picker
              selectedValue={localSelecionado}
              onValueChange={(itemValue) => setLocalSelecionado(itemValue)}
              dropdownIconColor={Colors.darkerBorder}
            >
              <Picker.Item
                label="Selecione o local/setor..."
                value=""
                style={theme.pickerItemPlaceholder}
              />
              {locais.map((local) => (
                <Picker.Item
                  key={local.localizacao_id}
                  label={`${local.nome} - ${local.andar}`}
                  value={local.localizacao_id}
                  style={theme.pickerItem}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={theme.inputArea}>
          <Text style={theme.label}>Fila</Text>
          <View style={theme.pickerContainer}>
            <Picker
              selectedValue={filaSelecionada}
              onValueChange={(itemValue) => setFilaSelecionada(itemValue)}
              dropdownIconColor={Colors.darkerBorder}
            >
              <Picker.Item
                label="Selecione a fila..."
                value=""
                style={theme.pickerItemPlaceholder}
              />
              {filas.map((fila) => (
                <Picker.Item
                  key={fila.fila_id}
                  label={fila.nome}
                  value={fila.fila_id}
                  style={theme.pickerItem}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={theme.inputArea}>
          <Text style={theme.label}>Descrição do problema</Text>
          <TextInput
            style={theme.textArea}
            placeholder="Ex: Vazamento da pia"
            multiline={true}
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        <View style={theme.inputArea}>
          <Text style={theme.label}>Imagem / Foto do problema</Text>
          <TouchableOpacity onPress={selecionarOpcaoImagem} activeOpacity={0.8}>
            <View style={theme.img}>
              {imagem?.uri ? (
                <Image
                  source={{ uri: imagem.uri }}
                  style={theme.imgPreview}
                  resizeMode="cover"
                />
              ) : (
                <View style={theme.row}>
                  <UploadIcon color={Colors.darkerBorder} />
                  <Text style={theme.p}>Insira a imagem</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[theme.button, { backgroundColor: Colors.green }]}
          onPress={handleSalvar}
        >
          <Text style={theme.buttonText}>Abrir Ordem de Serviço</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
