using System;
using System.Collections.Generic;
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

    public virtual DbSet<Fila> Fila { get; set; }

    public virtual DbSet<Localizacao> Localizacao { get; set; }

    public virtual DbSet<OrdemDeServico> OrdemDeServico { get; set; }

    public virtual DbSet<StatusOrdem> StatusOrdem { get; set; }

    public virtual DbSet<Usuario> Usuario { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=ChamaJussa;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Fila>(entity =>
        {
            entity.HasKey(e => e.FilaID).HasName("PK__Fila__6E0F8A59B5A32D96");

            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Localizacao>(entity =>
        {
            entity.HasKey(e => e.LocalizacaoID).HasName("PK__Localiza__83ABDECA85C14E42");

            entity.Property(e => e.Andar)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<OrdemDeServico>(entity =>
        {
            entity.HasKey(e => e.OrdemID).HasName("PK__OrdemDeS__C356421DC9C57EB7");

            entity.Property(e => e.Descricao)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Dt_Criacao).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.NomeItem)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Titulo)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.Fila).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.FilaID)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ordem_Fila");

            entity.HasOne(d => d.Localizacao).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.LocalizacaoID)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ordem_Localizacao");

            entity.HasOne(d => d.SolicitanteNavigation).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.Solicitante)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ordem_Usuario");

            entity.HasOne(d => d.StatusOrdem).WithMany(p => p.OrdemDeServico)
                .HasForeignKey(d => d.StatusOrdemID)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ordem_StatusOrdem");
        });

        modelBuilder.Entity<StatusOrdem>(entity =>
        {
            entity.HasKey(e => e.StatusOrdemID).HasName("PK__StatusOr__658DB28AF8A758EF");

            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioID).HasName("PK__Usuario__2B3DE7982967BEF1");

            entity.HasIndex(e => e.Email, "UQ__Usuario__A9D1053425ECE822").IsUnique();

            entity.HasIndex(e => e.NIF, "UQ__Usuario__C7DEC330D22EAEBD").IsUnique();

            entity.Property(e => e.UsuarioID).HasDefaultValueSql("(newid())");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Senha)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
