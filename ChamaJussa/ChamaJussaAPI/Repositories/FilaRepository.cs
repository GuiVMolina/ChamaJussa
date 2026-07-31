using ChamaJussaAPI.Contexts;
using ChamaJussaAPI.Domains;
using ChamaJussaAPI.Interfaces;

namespace ChamaJussaAPI.Repositories
{
    public class FilaRepository : IFilaRepository
    {
        private readonly ChamaJussaContext _context;

        public FilaRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public List<fila> Listar()
        {
            return _context.fila.ToList();
        }

        public fila? ObterPorId(int id)
        {
            return _context.fila.Find(id);
        }

        public void Adicionar(fila fila)
        {
            _context.fila.Add(fila);
            _context.SaveChanges();
        }

        public void Atualizar(fila fila)
        {
            _context.fila.Update(fila);
            _context.SaveChanges();
        }

        public void Deletar(fila fila)
        {
            _context.fila.Remove(fila);
            _context.SaveChanges();
        }
    }
}
