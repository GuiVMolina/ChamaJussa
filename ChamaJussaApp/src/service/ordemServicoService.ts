import { OrdemServico } from "../@types";
import { api } from "./api";

export const ordemServicoService = {
  async listar(): Promise<OrdemServico[]> {
    // Requisição
    // OBS: Lista -> Usar [], array
    const resposta = await api.get<OrdemServico[]>("OrdemServico");
    return resposta.data;
  },
};
