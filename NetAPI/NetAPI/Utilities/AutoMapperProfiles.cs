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
        }

        private void ConfigGenreMapping()
        {
            CreateMap<CreationGenreDTO, Genre>();
            CreateMap<Genre,GenreDTO>();
        }
    }
}