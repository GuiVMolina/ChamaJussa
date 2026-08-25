import { useEffect, useState } from "react";

import { Localizacao } from "@/src/@types/localizacao";
import { LocalizacaoService } from "@/src/service/localizacaoService";

export function useLocalizacao() {
  const [local, setLocal] = useState<Localizacao[]>([]);

  async function carregarLocais() {
    try {
      const dados = await LocalizacaoService.listar();
      setLocal(dados);
    } catch (error) {
      console.log("Erro ao carregar Locais:" + error);
    }
  }
  useEffect(() => {
    carregarLocais();
  }, []);

  return local;
}
