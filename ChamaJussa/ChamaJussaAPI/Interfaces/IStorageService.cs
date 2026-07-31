namespace ChamaJussaAPI.Interfaces
{
    public interface IStorageService
    {
        Task<string?> UploadImagemAsync(IFormFile arquivo);
    }
}
