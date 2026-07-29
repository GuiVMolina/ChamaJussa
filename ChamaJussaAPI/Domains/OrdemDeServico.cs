using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Domains;

public partial class OrdemDeServico
{
    public int OrdemID { get; set; }

    public string NomeItem { get; set; } = null!;

    public string Titulo { get; set; } = null!;

    public DateTime Dt_Criacao { get; set; }

    public string Descricao { get; set; } = null!;

    public byte[]? Imagem { get; set; }

    public Guid Solicitante { get; set; }

    public int LocalizacaoID { get; set; }

    public int FilaID { get; set; }

    public int StatusOrdemID { get; set; }

    public virtual Fila Fila { get; set; } = null!;

    public virtual Localizacao Localizacao { get; set; } = null!;

    public virtual Usuario SolicitanteNavigation { get; set; } = null!;

    public virtual StatusOrdem StatusOrdem { get; set; } = null!;
}
