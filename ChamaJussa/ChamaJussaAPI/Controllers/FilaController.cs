using ChamaJussaAPI.Applications.Services;
using ChamaJussaAPI.DTOs.FilaDto;
using ChamaJussaAPI.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilaController : ControllerBase
    {
        private readonly FilaService _service;

        public FilaController(FilaService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<LerFilaDto>> Listar()
        {
            var filas = _service.Listar();
            return Ok(filas);
        }

        [HttpGet("{id}")]
        public ActionResult<LerFilaDto> ObterPorId(int id)
        {
            try
            {
                var fila = _service.ObterPorId(id);
                return Ok(fila);
            }
            catch (DomainException ex)
            {
                return NotFound(new { mensagem = ex.Message });
            }
        }

        [HttpPost]
        public ActionResult<LerFilaDto> Adicionar(CriarFilaDto filaDto)
        {
            try
            {
                var filaCriado = _service.Adicionar(filaDto);
                return StatusCode(201, filaCriado);
            }
            catch (DomainException ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public ActionResult Atualizar(int id, CriarFilaDto dto)
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
