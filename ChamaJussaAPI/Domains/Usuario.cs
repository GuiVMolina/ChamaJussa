using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Domains;

public partial class Usuario
{
    public Guid UsuarioID { get; set; }

    public string Nome { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public int NIF { get; set; }

    public virtual ICollection<OrdemDeServico> OrdemDeServico { get; set; } = new List<OrdemDeServico>();
}
