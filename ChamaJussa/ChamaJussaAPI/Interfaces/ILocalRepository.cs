using ChamaJussaAPI.Domains;

namespace ChamaJussaAPI.Interfaces
{
    public interface ILocalRepository
    {
        List<localizacao> Listar();
    }
}