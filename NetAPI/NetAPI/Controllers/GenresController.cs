using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using NetAPI.Entities;
using System.Collections.Generic;

namespace NetAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController: ControllerBase
    {
        [HttpGet]
        [OutputCache]
        public List<Genre> Get()
        {
            List<Genre> repository = new();
            return repository;
        }
    }
}
