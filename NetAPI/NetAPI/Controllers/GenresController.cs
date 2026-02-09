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
            var genre = await _context.Genres
                .ProjectTo<GenreDTO>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(g => g.Id == id);

            if(genre is null)
            {
                return NotFound();
            }

            return genre;
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] CreationGenreDTO creationGenreDTO)
        {
            var genreExist = await _context.Genres.AnyAsync(g => g.Id == id);

            if (!genreExist)
            {
                return NotFound();
            }

            var genre = _mapper.Map<Genre>(creationGenreDTO);
            genre.Id = id;

            _context.Update(genre);
            await _context.SaveChangesAsync();
            await _outputCacheStore.EvictByTagAsync(_cacheTag, default);
            return NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreationGenreDTO genre)
        {
            var gen = _mapper.Map<Genre>(genre);
            _context.Add(gen);
            await _context.SaveChangesAsync();
            await _outputCacheStore.EvictByTagAsync(_cacheTag, default);
            return CreatedAtRoute("getGenreById", new { id = gen.Id }, gen);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deletedRecords = await _context.Genres.Where(g => g.Id == id).ExecuteDeleteAsync();

            if(deletedRecords == 0)
            {
                return NotFound();
            }

            await _outputCacheStore.EvictByTagAsync(_cacheTag,default);
            return NoContent();
        }
    }
}
