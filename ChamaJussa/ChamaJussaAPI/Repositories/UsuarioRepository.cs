using ChamaJussaAPI.Contexts;
using ChamaJussaAPI.Domains;
using ChamaJussaAPI.Interfaces;

namespace ChamaJussaAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ChamaJussaContext _context;

        public UsuarioRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public List<usuario> Listar()
        {
            return _context.usuario.ToList();
        }

        public usuario? ObterPorId(Guid id)
        {
            return _context.usuario.Find(id);
        }

        public usuario? ObterPorEmail(string email)
        {
            return _context.usuario.FirstOrDefault(u => u.email == email);
        }

        public bool EmailExiste(string email)
        {
            return _context.usuario.Any(u => u.email == email);
        }

        public void Adicionar(usuario usuario)
        {
            _context.usuario.Add(usuario);
            _context.SaveChanges();
        }

        public void Atualizar(usuario usuario)
        {
            _context.usuario.Update(usuario);
            _context.SaveChanges();
        }

        public void Deletar(usuario usuario)
        {
            _context.usuario.Remove(usuario);
            _context.SaveChanges();
        }
    }
}
