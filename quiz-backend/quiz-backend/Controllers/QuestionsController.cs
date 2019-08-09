using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return Ok(question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question questionData)
        {
            //var question = await _context.Questions.SingleOrDefaultAsync(q => q.ID == id);
            if (id != questionData.ID)
                return BadRequest();

            _context.Entry(questionData).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok(questionData);
        }

        // GET api/questions
        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return _context.Questions;
        }
    }
}