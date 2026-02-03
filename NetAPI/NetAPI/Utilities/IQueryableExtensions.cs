using Microsoft.EntityFrameworkCore;
using NetAPI.DTOs;

namespace NetAPI.Utilities
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Pages<T> (this IQueryable<T> queryable, PaginationDTO pagination)
        {
            return queryable
                .Skip((pagination.Page - 1)*pagination.RecordsPerPage)
                .Take(pagination.RecordsPerPage);
        }
    }
}