using ChamaJussaAPI.Domains;
using ChamaJussaAPI.Exceptions;
using ChamaJussaAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocalController : ControllerBase
    {
        private readonly ILocalRepository _repository;

        public LocalController(ILocalRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<List<localizacao>> Listar()
        {
            try
            {
                var locais = _repository.Listar();
                return Ok(locais);
            }
            catch (DomainException ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}