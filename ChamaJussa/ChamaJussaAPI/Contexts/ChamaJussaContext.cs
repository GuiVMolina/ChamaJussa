using ChamaJussaAPI.Domains;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaAPI.Contexts;

public partial class ChamaJussaContext : DbContext
{
    public ChamaJussaContext()
    {
    }

    public ChamaJussaContext(DbContextOptions<ChamaJussaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<OrdemDeServico> OrdemDeServico { get; set; }

    public virtual DbSet<fila> fila { get; set; }

    public virtual DbSet<localizacao> localizacao { get; set; }

    public virtual DbSet<status> status { get; set; }

    public virtual DbSet<usuario> usuario { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-LAO5MIJ\\SQLEXPRESSTEC;Database=ChamaJussa;user=sa;pwd=abc123;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OrdemDeServico>(entity =>
        {
            entity.HasKey(e => e.os_id).HasName("PK__OrdemDeS__374FA4B502ACC0D3");

            entity.Property(e => e.descricao)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.dt_criacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.nome_item)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.imagem)
                .IsUnicode(false);

            entity.HasOne(d => d.filaNavigation).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.fila_id)
                .HasConstraintName("FK_OrdemDeServico_Fila");

            entity.HasOne(d => d.localizacao).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.localizacao_id)
                .HasConstraintName("FK_OrdemDeServico_Localizacao");

            entity.HasOne(d => d.solicitanteNavigation).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.solicitante)
                .HasConstraintName("FK_OrdemDeServico_Usuario");

            entity.HasOne(d => d.statusNavigation).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.status_id)
                .HasConstraintName("FK_OrdemDeServico_Status");
        });

        modelBuilder.Entity<fila>(entity =>
        {
            entity.HasKey(e => e.fila_id).HasName("PK__fila__79CFDF2361F5E5BC");

            entity.Property(e => e.nome)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<localizacao>(entity =>
        {
            entity.HasKey(e => e.localizacao_id).HasName("PK__localiza__91EC50FDE29706B0");

            entity.Property(e => e.andar)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.nome)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<status>(entity =>
        {
            entity.HasKey(e => e.status_id).HasName("PK__status__3683B531A72E7965");

            entity.Property(e => e.nome)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        modelBuilder.Entity<usuario>(entity =>
        {
            entity.HasKey(e => e.usuario_id).HasName("PK__usuario__2ED7D2AF4F83E425");

            entity.HasIndex(e => e.email, "UQ__usuario__AB6E61647E3CD976").IsUnique();

            entity.HasIndex(e => e.nif, "UQ__usuario__DF97D0F2C540B210").IsUnique();

            entity.Property(e => e.usuario_id).HasDefaultValueSql("(newid())");
            entity.Property(e => e.email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.nome)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.senha).HasMaxLength(32);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
