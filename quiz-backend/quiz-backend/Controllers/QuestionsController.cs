using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quiz_backend.Models;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext _context;

        public QuestionsController(QuizContext context)
        {
            this._context = context;
        }

        [HttpPost]
        public Question Post([FromBody]Question question)
        {
            _context.Questions.Add(question);
            _context.SaveChanges();

            return new Question { text = "Thanks" };
        }

        // GET api/questions
        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return new Question[] {
                new Models.Question() { text = "first question" },
                new Models.Question() { text = "2nd question" }
            };
        }
    }
}