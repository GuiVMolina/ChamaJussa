import { Alert } from "react-native";
import { OrdemServico } from "../@types";
import { useEffect, useState } from "react";
import { ordemServicoService } from "@/src/service/ordemServicoService";

export function useOrdemServico() {
  const [os, setOs] = useState<OrdemServico[]>([]);

  async function listarOs() {
    try {
      console.log("=== INICIANDO BUSCA DE OS ===");
      const dados = await ordemServicoService.listar();

      // LOG DE SUCESSO: Mostra a lista exata que chegou do backend
      console.log("DADOS RETORNADOS PELA API:", JSON.stringify(dados, null, 2));

      setOs(dados);
    } catch (error: any) {
      Alert.alert("Erro!", "Problema na Listagem");
    }
  }

  useEffect(() => {
    listarOs();
  }, []);

  // Retornar um objeto facilita expandir o hook no futuro (ex: incluir refetch ou loading)
  return { os, listarOs };
}
