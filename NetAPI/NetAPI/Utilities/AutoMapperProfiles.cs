using AutoMapper;
using NetAPI.DTOs;
using NetAPI.Entities;

namespace NetAPI.Utilities
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            ConfigGenreMapping();
            configAuthorMapping();
        }

        private void configAuthorMapping()
        {
            CreateMap<CreationAuthorDTO, Author>()
                .ForMember(x => x.Photo, options => options.Ignore());
            CreateMap<Author,AuthorDTO>();
        }
        private void ConfigGenreMapping()
        {
            CreateMap<CreationGenreDTO, Genre>();
            CreateMap<Genre,GenreDTO>();
        }
    }
}