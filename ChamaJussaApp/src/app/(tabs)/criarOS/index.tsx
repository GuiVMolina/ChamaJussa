import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Button,
  ButtonText,
  Card,
  Colors,
  Column,
  Container,
  H1,
  Input,
  InputArea,
  Label,
  SafeArea,
  TextArea,
} from "@/src/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Servico() {
  return (
    <SafeAreaView style={[Container, SafeArea]} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={Column}>
        <Text style={H1}>Criar ordem de serviço</Text>
        <View style={Card}>
          <View style={InputArea}>
            <Text style={Label}>Título do problema *</Text>
            <TextInput style={Input} placeholder="Ex: Vazamento da pia" />
          </View>
          <View style={InputArea}>
            <Text style={Label}>Máquina / Equipamento *</Text>
            <TextInput style={Input} placeholder="Ex: Vazamento da pia" />
          </View>
          <View style={InputArea}>
            <Text style={Label}>Local / Setor *</Text>
            <TextInput style={Input} placeholder="Ex: Vazamento da pia" />
          </View>
          <View style={InputArea}>
            <Text style={Label}>Descrição do problema *</Text>
            <TextInput
              style={[Input, TextArea]}
              placeholder="Ex: Vazamento da pia"
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={InputArea}>
            <Text style={Label}>Imagem / Foto do problema *</Text>
            <TextInput style={Input} placeholder="Ex: Vazamento da pia" />
          </View>
          <TouchableOpacity style={[Button, { backgroundColor: Colors.green }]}>
            <Text style={ButtonText}>Abrir Ordem de Serviço</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
