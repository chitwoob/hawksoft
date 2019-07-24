using Microsoft.EntityFrameworkCore;

namespace hawksoft.Data
{
    public class HawkContext: DbContext
    {
        public HawkContext(DbContextOptions<HawkContext> options)
            : base(options)
        { }

        public DbSet<Contact> Contacts {get;set;}
    }
}