using System.ComponentModel.DataAnnotations;

namespace NetAPI.DTOs
{
    public class CreationGenreDTO
    {
        [Required(ErrorMessage ="The field {0} is required")]
        [StringLength(20,ErrorMessage ="The field {0} must have {1} characters")]
        public required string Name { get; set; }
    }
}