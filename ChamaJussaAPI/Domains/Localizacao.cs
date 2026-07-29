using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Domains;

public partial class Localizacao
{
    public int LocalizacaoID { get; set; }

    public string Nome { get; set; } = null!;

    public string Andar { get; set; } = null!;

    public virtual ICollection<OrdemDeServico> OrdemDeServico { get; set; } = new List<OrdemDeServico>();
}
