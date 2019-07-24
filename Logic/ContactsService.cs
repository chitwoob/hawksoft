using System.Collections.Generic;
using System.Linq;
using hawksoft.Data;

namespace hawksoft.Logic
{
    public class ContactsService
    {
      HawkContext mDb;
        public ContactsService(HawkContext db){
          mDb = db;
        }

        public IEnumerable<Contact> GetContacts(string user){
          return mDb.Contacts.Where(x => x.User == user).ToArray();
        }

        public bool AddContact(Contact newContact){
          mDb.Contacts.Add(newContact);
          mDb.SaveChanges();
          return true; //Todo add validation here
        }

        
    }
}