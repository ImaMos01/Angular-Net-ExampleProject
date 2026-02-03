using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using NetAPI.Entities;
using NetAPI.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using NetAPI.Utilities;

namespace NetAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController: ControllerBase
    {
        private readonly IOutputCacheStore _outputCacheStore;
        private const string _cacheTag = "genres";
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;

        public GenresController(IOutputCacheStore outputCacheStore, ApplicationDbContext context, IMapper mapper)
        {
            this._outputCacheStore = outputCacheStore;
            this._context = context;
            this._mapper = mapper;
        }

        [HttpGet]
        [OutputCache(Tags = [_cacheTag])]
        public async Task<List<GenreDTO>> Get([FromQuery] PaginationDTO pagination)
        {
            var queryable = _context.Genres;
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            return await queryable
                .OrderBy(g => g.Name)
                .Pages(pagination)
                .ProjectTo<GenreDTO>(_mapper.ConfigurationProvider).ToListAsync();

        }

        [HttpGet("{id:int}",Name="getGenreById")]
        [OutputCache(Tags = [_cacheTag])]
        public async Task<ActionResult<GenreDTO>> GetById(int id)
        {
            throw new NotImplementedException();
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreationGenreDTO genre)
        {
            var gen = _mapper.Map<Genre>(genre);
            _context.Add(gen);
            await _context.SaveChangesAsync();
            return CreatedAtRoute("getGenreById", new { id = gen.Id }, gen);
        }
    }
}
