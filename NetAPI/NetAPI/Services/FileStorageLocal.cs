namespace NetAPI.Services
{
    public class FileStorageLocal : IFileStorage
    {
        private readonly IWebHostEnvironment _env;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public FileStorageLocal(IWebHostEnvironment env, IHttpContextAccessor httpContextAccessor)
        {
            this._env = env;
            this._httpContextAccessor = httpContextAccessor; 
        }
        public Task Delete(string? route, string container)
        {
            if (string.IsNullOrWhiteSpace(route))
            {
                return Task.CompletedTask;
            }
            var nameFile = Path.GetFileName(route);
            var directoryFile = Path.Combine(_env.WebRootPath,container);
            if (File.Exists(directoryFile))
            {
                File.Delete(directoryFile);
            }
            return Task.CompletedTask;
        }

        public async Task<string> Store(string container, IFormFile file)
        {
            var extension = Path.GetExtension(file.FileName);
            var nameFile = $"{Guid.NewGuid()}{extension}";
            string directory = Path.Combine(_env.WebRootPath,container);

            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            string route = Path.Combine(directory, nameFile);
            using (var ms = new MemoryStream())
            {
                await file.CopyToAsync(ms);
                var content = ms.ToArray();
                await File.WriteAllBytesAsync(route,content);                
            }

            var request = _httpContextAccessor.HttpContext!.Request!;

            var url = $"{request.Scheme}://{request.Host}";
            var urlFile = Path.Combine(url, container, nameFile).Replace("\\","/");
            return urlFile;
        }
    }
}