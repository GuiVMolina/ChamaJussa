export interface OrdemServico {
  osId: number;
  nomeItem: string;
  solicitante: string; // UUID do usuário solicitante
  solicitanteNome: string;
  dtCriacao: string;
  localizacaoId: number;
  localizacaoNome: string;
  descricao: string;
  imagem?: string;
  statusId: number;
  statusNome: string;
  filaId: number;
  filaNome: string;
}

export interface ImgUpload {
  uri: string;
  name?: string;
  mimeType?: string;
}

export interface CriarOrdemServico {
  nomeItem: string;
  localizacaoId: string;
  descricao: string;
  imagem: ImgUpload | null;
}
