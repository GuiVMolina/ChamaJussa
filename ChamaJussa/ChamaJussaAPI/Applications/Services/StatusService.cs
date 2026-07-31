using ChamaJussaAPI.Domains;
using ChamaJussaAPI.DTOs.StatusDto;
using ChamaJussaAPI.Exceptions;
using ChamaJussaAPI.Interfaces;

namespace ChamaJussaAPI.Applications.Services
{
    public class StatusService
    {
        private readonly IStatusRepository _repository;

        public StatusService(IStatusRepository repository)
        {
            _repository = repository;
        }

        private static LerStatusDto LerDto(status status)
        {
            return new LerStatusDto
            {
                StatusId = status.status_id,
                Nome = status.nome,
            };
        }

        public List<LerStatusDto> Listar()
        {
            List<status> statuss = _repository.Listar();
            return statuss.Select(u => LerDto(u)).ToList();
        }

        public LerStatusDto ObterPorId(int id)
        {
            status? status = _repository.ObterPorId(id);
            if (status == null)
            {
                throw new DomainException("Status não existe.");
            }
            return LerDto(status);
        }

        public LerStatusDto Adicionar(CriarStatusDto statusDto)
        {
            status status = new status
            {
                nome = statusDto.Nome,
            };

            _repository.Adicionar(status);

            return LerDto(status);
        }

        public LerStatusDto Atualizar(int id, CriarStatusDto statusDto)
        {
            status? statusBanco = _repository.ObterPorId(id);

            if (statusBanco == null)
            {
                throw new DomainException("Status não encontrado.");
            }

            statusBanco.nome = statusDto.Nome;

            _repository.Atualizar(statusBanco);

            return LerDto(statusBanco);
        }

        public void Deletar(int id)
        {
            status? status = _repository.ObterPorId(id);

            if (status == null)
            {
                throw new DomainException("Status não encontrado.");
            }

            _repository.Deletar(status);
        }
    }
}
