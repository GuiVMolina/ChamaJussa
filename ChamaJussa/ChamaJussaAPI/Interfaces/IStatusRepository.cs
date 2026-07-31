using ChamaJussaAPI.Domains;

namespace ChamaJussaAPI.Interfaces
{
    public interface IStatusRepository
    {
        List<status> Listar();
        status? ObterPorId(int id);
        void Adicionar(status status);
        void Atualizar(status status);
        void Deletar(status status);
    }
}
