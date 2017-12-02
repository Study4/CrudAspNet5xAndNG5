using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using CrudAspMvc5Ng5.Models;

namespace CrudAspMvc5Ng5.Controllers.Api
{
    public class EmpsController : ApiController
    {
        private EmpContext db = new EmpContext();

        // GET: api/Emps
        public IQueryable<Emp> GetEmps()
        {
            return db.Emps;
        }

        // GET: api/Emps/5
        [ResponseType(typeof(Emp))]
        public async Task<IHttpActionResult> GetEmp(int id)
        {
            Emp emp = await db.Emps.FindAsync(id);
            if (emp == null)
            {
                return NotFound();
            }

            return Ok(emp);
        }

        // PUT: api/Emps/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEmp(int id, Emp emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != emp.Id)
            {
                return BadRequest();
            }

            db.Entry(emp).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Emps
        [ResponseType(typeof(Emp))]
        public async Task<IHttpActionResult> PostEmp(Emp emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Emps.Add(emp);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = emp.Id }, emp);
        }

        // DELETE: api/Emps/5
        [ResponseType(typeof(Emp))]
        public async Task<IHttpActionResult> DeleteEmp(int id)
        {
            Emp emp = await db.Emps.FindAsync(id);
            if (emp == null)
            {
                return NotFound();
            }

            db.Emps.Remove(emp);
            await db.SaveChangesAsync();

            return Ok(emp);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmpExists(int id)
        {
            return db.Emps.Count(e => e.Id == id) > 0;
        }
    }
}