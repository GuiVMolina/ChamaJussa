import { api } from "./api";
import { CriarOrdemServico, OrdemServico } from "@/src/@types";

export const ordemServicoService = {
  async listar(): Promise<OrdemServico[]> {
    //requisicao:
    //Obs. se estamos trabalhando com lista não esqueça do [] array
    const resposta = await api.get<OrdemServico[]>("OrdemServico");

    return resposta.data;
  },
  // | - Cria um Union type
  // GET: Busca uma ordem de serviço por ID (/api/OrdemServico/{id})
  async buscarPorId(id: number | string): Promise<OrdemServico> {
    const resposta = await api.get<OrdemServico>(`OrdemServico/${id}`);
    return resposta.data;
  },

  async cadastrar(dados: CriarOrdemServico): Promise<OrdemServico> {
    const formData = new FormData();

    formData.append("NomeItem", dados.nomeItem);
    formData.append("LocalizacaoId", String(dados.localizacaoId));
    formData.append("Descricao", dados.descricao);

    if (dados.imagem) {
      const uri = dados.imagem.uri;
      const fileName = dados.imagem.name || `foto_${Date.now()}.jpg`;

      const match = /\.(\w+)$/.exec(fileName);

      const mimeType =
        dados.imagem.mimeType ||
        (match ? `image/${match[1].toLocaleLowerCase()}` : ``);
      formData.append("Imagem", { uri, name: fileName, type: mimeType } as any);
    }

    const respota = await api.post<OrdemServico>("OrdemServico", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return respota.data;
  },
};
