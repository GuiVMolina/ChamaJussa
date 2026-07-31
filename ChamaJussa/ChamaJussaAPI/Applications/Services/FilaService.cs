using ChamaJussaAPI.Domains;
using ChamaJussaAPI.DTOs.FilaDto;
using ChamaJussaAPI.Exceptions;
using ChamaJussaAPI.Interfaces;

namespace ChamaJussaAPI.Applications.Services
{
    public class FilaService
    {
        private readonly IFilaRepository _repository;

        public FilaService(IFilaRepository repository)
        {
            _repository = repository;
        }

        private static LerFilaDto LerDto(fila fila)
        {
            return new LerFilaDto
            {
                FilaId = fila.fila_id,
                Nome = fila.nome,
            };
        }

        public List<LerFilaDto> Listar()
        {
            List<fila> filas = _repository.Listar();
            return filas.Select(u => LerDto(u)).ToList();
        }

        public LerFilaDto ObterPorId(int id)
        {
            fila? fila = _repository.ObterPorId(id);
            if (fila == null)
            {
                throw new DomainException("Fila não existe.");
            }
            return LerDto(fila);
        }

        public LerFilaDto Adicionar(CriarFilaDto filaDto)
        {
            fila fila = new fila
            {
                nome = filaDto.Nome,
            };

            _repository.Adicionar(fila);

            return LerDto(fila);
        }

        public LerFilaDto Atualizar(int id, CriarFilaDto filaDto)
        {
            fila? filaBanco = _repository.ObterPorId(id);

            if (filaBanco == null)
            {
                throw new DomainException("Fila não encontrada.");
            }

            filaBanco.nome = filaDto.Nome;

            _repository.Atualizar(filaBanco);

            return LerDto(filaBanco);
        }

        public void Deletar(int id)
        {
            fila? fila = _repository.ObterPorId(id);

            if (fila == null)
            {
                throw new DomainException("Fila não encontrada.");
            }

            _repository.Deletar(fila);
        }
    }

}
