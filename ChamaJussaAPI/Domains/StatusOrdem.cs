using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Domains;

public partial class StatusOrdem
{
    public int StatusOrdemID { get; set; }

    public string Nome { get; set; } = null!;

    public virtual ICollection<OrdemDeServico> OrdemDeServico { get; set; } = new List<OrdemDeServico>();
}
