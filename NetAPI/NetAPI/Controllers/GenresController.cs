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
        private readonly IOutputCacheStore _outputCacheStore;
        private const string _cacheTag = "genres";
        private readonly ApplicationDbContext _context;

        public GenresController(IOutputCacheStore outputCacheStore, ApplicationDbContext context)
        {
            this._outputCacheStore = outputCacheStore;
            this._context = context;
        }

        [HttpGet("{id:int}",Name="getGenreById")]
        [OutputCache(Tags = [_cacheTag])]
        public async Task<ActionResult<Genre>> Get(int id)
        {
            throw new NotImplementedException();
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Genre genre)
        {
            _context.Add(genre);
            await _context.SaveChangesAsync();
            return CreatedAtRoute("getGenreById", new { id = genre.Id }, genre);
        }
    }
}
