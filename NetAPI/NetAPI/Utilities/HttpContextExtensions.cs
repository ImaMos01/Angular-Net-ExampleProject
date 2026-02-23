using Microsoft.EntityFrameworkCore;

namespace NetAPI.Utilities
{
    public static class HttpContextExtensions
    {
        public async static Task InsertParameterPaginationInHeader<T>(this HttpContext httpContext,
        IQueryable<T> queryable)
        {
            if (httpContext is null)
            {
                throw new ArgumentNullException(nameof(httpContext));
            }

            double amount = await queryable.CountAsync();
            httpContext.Response.Headers.Append("amount-total-registers",amount.ToString());
        }
    }
}