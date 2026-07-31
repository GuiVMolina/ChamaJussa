namespace ChamaJussaAPI.Domains;

public partial class OrdemDeServico
{
    public int os_id { get; set; }

    public string nome_item { get; set; } = null!;

    public Guid? solicitante { get; set; }

    public DateTime dt_criacao { get; set; }

    public int? localizacao_id { get; set; }

    public string descricao { get; set; } = null!;

    public string? imagem { get; set; }

    public int? status_id { get; set; }

    public int? fila_id { get; set; }

    public virtual fila? filaNavigation { get; set; }

    public virtual localizacao? localizacao { get; set; }

    public virtual usuario? solicitanteNavigation { get; set; }

    public virtual status? statusNavigation { get; set; }
}
