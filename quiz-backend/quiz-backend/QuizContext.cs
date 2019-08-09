using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quiz_backend
{
    public class QuizContext : DbContext
    {
        public DbSet<Models.Question> Questions { get; set; }

        public QuizContext(DbContextOptions<QuizContext> options)
            : base(options)
        {

        }
    }
}
