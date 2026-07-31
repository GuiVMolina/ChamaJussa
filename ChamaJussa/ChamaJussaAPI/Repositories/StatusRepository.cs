using ChamaJussaAPI.Contexts;
using ChamaJussaAPI.Domains;
using ChamaJussaAPI.Interfaces;

namespace ChamaJussaAPI.Repositories
{
    public class StatusRepository : IStatusRepository
    {
        private readonly ChamaJussaContext _context;

        public StatusRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public List<status> Listar()
        {
            return _context.status.ToList();
        }

        public status? ObterPorId(int id)
        {
            return _context.status.Find(id);
        }

        public void Adicionar(status status)
        {
            _context.status.Add(status);
            _context.SaveChanges();
        }

        public void Atualizar(status status)
        {
            _context.status.Update(status);
            _context.SaveChanges();
        }

        public void Deletar(status status)
        {
            _context.status.Remove(status);
            _context.SaveChanges();
        }
    }
}
