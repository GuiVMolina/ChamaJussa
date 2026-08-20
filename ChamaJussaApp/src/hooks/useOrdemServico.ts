import { Alert } from "react-native";
import { OrdemServico } from "../@types";
import { useEffect, useState } from "react";
import { ordemServicoService } from "../service/ordemServicoService";

export function useOrdemServico() {
  const [os, setOs] = useState<OrdemServico[]>([]);

  async function listarOs() {
    try {
      const dados = await ordemServicoService.listar();
      setOs(dados);
    } catch (error) {
      Alert.alert("Erro!", "Problema na Listagem");
    }
  }

  useEffect(() => {
    listarOs();
  }, []);

  return os;
}
