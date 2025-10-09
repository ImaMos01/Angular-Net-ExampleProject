using Microsoft.AspNetCore.Mvc;
using NetAPI.Entities;
using System.Collections.Generic;

namespace NetAPI.Controllers
{
    [Route("api/genres")]
    public class GenresController
    {
        [HttpGet]
        public List<Genre> Get()
        {
            List<Genre> repository = new();
            return repository;
        }
    }
}
