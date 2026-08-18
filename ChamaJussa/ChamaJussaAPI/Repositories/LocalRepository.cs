using ChamaJussaAPI.Contexts;
using ChamaJussaAPI.Domains;
using ChamaJussaAPI.Interfaces;

namespace ChamaJussaAPI.Repositories
{
    public class LocalRepository : ILocalRepository
    {
        private readonly ChamaJussaContext _context;

        public LocalRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public List<localizacao> Listar()
        {
            return _context.localizacao.ToList();
        }
    }
}