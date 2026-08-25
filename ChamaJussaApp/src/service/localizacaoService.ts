import { api } from "./api";
import { Localizacao } from "@/src/@types/localizacao";

export const LocalizacaoService = {
  async listar(): Promise<Localizacao[]> {
    const resposta = await api.get<Localizacao[]>("Local");
    return resposta.data;
  },
};
