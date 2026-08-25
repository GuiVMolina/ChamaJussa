import { Alert } from "react-native";
import { useEffect, useState } from "react";

import { CriarOrdemServico, OrdemServico } from "@/src/@types";
import { ordemServicoService } from "@/src/service/ordemServicoService";

export function useOrdemServico() {
  const [os, setOs] = useState<OrdemServico[]>([]);

  async function listarOs() {
    try {
      const dados = await ordemServicoService.listar();
      setOs(dados);
    } catch (error: any) {
      Alert.alert("Erro!", "Problema na Listagem");
    }
  }

  async function cadastrarOs(dados: CriarOrdemServico) {
    try {
      const novaOs = await ordemServicoService.cadastrar(dados);
      setOs((antigas) => [novaOs, ...antigas]);
      return novaOs;
    } catch (error: any) {
      Alert.alert("Erro!", "Problema no Cadastro de nova OS");
    }
  }

  useEffect(() => {
    listarOs();
  }, []);

  return { os, cadastrarOs };
}
