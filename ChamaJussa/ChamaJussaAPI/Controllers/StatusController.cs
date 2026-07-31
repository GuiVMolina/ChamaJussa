using ChamaJussaAPI.Applications.Services;
using ChamaJussaAPI.DTOs.StatusDto;
using ChamaJussaAPI.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        private readonly StatusService _service;

        public StatusController(StatusService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<LerStatusDto>> Listar()
        {
            var statuss = _service.Listar();
            return Ok(statuss);
        }

        [HttpGet("{id}")]
        public ActionResult<LerStatusDto> ObterPorId(int id)
        {
            try
            {
                var status = _service.ObterPorId(id);
                return Ok(status);
            }
            catch (DomainException ex)
            {
                return NotFound(new { mensagem = ex.Message });
            }
        }

        [HttpPost]
        public ActionResult<LerStatusDto> Adicionar(CriarStatusDto statusDto)
        {
            try
            {
                var statusCriado = _service.Adicionar(statusDto);
                return StatusCode(201, statusCriado);
            }
            catch (DomainException ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public ActionResult Atualizar(int id, CriarStatusDto dto)
        {
            try
            {
                _service.Atualizar(id, dto);
                return NoContent();
            }
            catch (DomainException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Deletar(int id)
        {
            try
            {
                _service.Deletar(id);
                return NoContent();
            }
            catch (DomainException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
