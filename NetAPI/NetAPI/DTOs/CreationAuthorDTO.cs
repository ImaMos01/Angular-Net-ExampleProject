using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace NetAPI.DTOs
{
    public class CreationAuthorDTO
    {
        [Required]
        [StringLength(150)]
        public required string Name {get; set;}
        public DateTime BirthDate {get; set;}
        public IFormFile? Photo {get; set;}
    }
}