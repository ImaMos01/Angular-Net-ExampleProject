using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using NetAPI.Entities;
using NetAPI.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using NetAPI.Services;
using NetAPI.Utilities;

namespace NetAPI.Controllers
{
    [Route("api/authors")]
    [ApiController]
    public class AuthorsController: ControllerBase
    {
        private readonly IOutputCacheStore _outputCacheStore;
        private const string _cacheTag = "authors";
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;
        private readonly IFileStorage _fileStorage;
        private readonly string _container = "authors";

        public AuthorsController(IOutputCacheStore outputCacheStore, ApplicationDbContext context, IMapper mapper, IFileStorage fileStorage)
        {
            this._outputCacheStore = outputCacheStore;
            this._context = context;
            this._mapper = mapper;
            this._fileStorage = fileStorage;
        }

        [HttpGet]
        [OutputCache(Tags = [_cacheTag])]
        public async Task<List<AuthorDTO>> Get([FromQuery] PaginationDTO pagination)
        {
            var queryable = _context.Authors;
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            return await queryable
                .OrderBy(a => a.Name)
                .Pages(pagination)
                .ProjectTo<AuthorDTO>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        [HttpGet("{id:int}",Name="getAuthorById")]
        [OutputCache(Tags = [_cacheTag])]
        public async Task<ActionResult<AuthorDTO>> GetById(int id)
        {
            var author = await _context.Authors
                .ProjectTo<AuthorDTO>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(g => g.Id == id);

            if(author is null)
            {
                return NotFound();
            }

            return author;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreationAuthorDTO creationAuthorDTO)
        {
            var author = _mapper.Map<Author>(creationAuthorDTO);

            if(creationAuthorDTO.Photo is not null)
            {
                var url = await _fileStorage.Store(_container, creationAuthorDTO.Photo);
                author.Photo = url;
            }

            _context.Add(author);
            await _context.SaveChangesAsync();
            await _outputCacheStore.EvictByTagAsync(_cacheTag, default);
            return CreatedAtRoute("getAuthorById", new { id = author.Id }, author);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] CreationAuthorDTO creationAuthorDTO)
        {
            var author = await _context.Authors.FirstOrDefaultAsync(g => g.Id == id);

            if (author is null)
            {
                return NotFound();
            }

            author = _mapper.Map(creationAuthorDTO,author);
            if(creationAuthorDTO.Photo is not null)
            {
                author.Photo = await _fileStorage.Edit(author.Photo, _container, creationAuthorDTO.Photo);
            }

            await _context.SaveChangesAsync();
            await _outputCacheStore.EvictByTagAsync(_cacheTag, default);
            return NoContent();
        }
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deletedRecords = await _context.Authors.Where(g => g.Id == id).ExecuteDeleteAsync();

            if(deletedRecords == 0)
            {
                return NotFound();
            }

            await _outputCacheStore.EvictByTagAsync(_cacheTag,default);
            return NoContent();
        }
    }
}
