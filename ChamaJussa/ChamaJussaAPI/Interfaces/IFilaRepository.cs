using ChamaJussaAPI.Domains;

namespace ChamaJussaAPI.Interfaces
{
    public interface IFilaRepository
    {
        List<fila> Listar();
        fila? ObterPorId(int id);
        void Adicionar(fila fila);
        void Atualizar(fila fila);
        void Deletar(fila fila);
    }
}
