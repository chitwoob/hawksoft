using System.Collections.Generic;
using hawksoft.Data;
using hawksoft.Logic;
using Microsoft.AspNetCore.Mvc;

namespace hawksoft.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {


        private ContactsService mContactService;
        public ContactsController(HawkContext db){
          mContactService = new ContactsService(db);
        }

        [HttpGet("{user}")]
        public IEnumerable<Contact> GetContacts([FromRoute] string user)
        {
            return mContactService.GetContacts(user);
        }

        [HttpPost]
        public IActionResult AddContact([FromBody] Contact data)
        {
            mContactService.AddContact(data);
            return Ok(); //Todo return validation result
        }
    }
}