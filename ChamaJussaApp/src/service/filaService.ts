import { api } from "./api";
import { Fila } from "@/src/@types/fila";

export const FilaService = {
  async listar(): Promise<Fila[]> {
    const resposta = await api.get<Fila[]>("Fila");
    return resposta.data;
  },
};
