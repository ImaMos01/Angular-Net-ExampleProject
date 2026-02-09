using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace NetAPI.DTOs
{
    public class AuthorDTO
    {
        public int Id {get; set;}
        public required string Name {get; set;}
        public DateTime BirthDate {get; set;}
        public string? Photo {get; set;}
    }
}