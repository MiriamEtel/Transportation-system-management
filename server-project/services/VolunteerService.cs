using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using my_server.models;
using my_server.interfaces;

namespace my_server.services
{
    public class VolunteerService:IVolunteer
    {
        List<Volunteer> volunteers = new List<Volunteer>()
        {
        new Volunteer(1, "Sari", "Noigershel", "0548484848",new bool[5]),
        new Volunteer(2, "Shalom", "Noigershel", "0533131313",new bool[5]),
        new Volunteer(3, "Tamar", "Yosefi","0527676767",new bool[5]),
        new Volunteer(3, "Naama", "Yosefi","0583232323",new bool[5])

    };
        public List<Volunteer> All()
        {
            return volunteers;

        }
        public Volunteer ById(int id)
        {
            return volunteers.FirstOrDefault<Volunteer>(v=>v.Id==id);

        }

        public bool Create(Volunteer v)
        {
            volunteers.Add(v);
            return true;

        }
        public bool Update(Volunteer vi)
        {
            foreach (Volunteer v in volunteers)
            {
                if (v.Id == vi.Id)
                {
                    int index=volunteers.IndexOf(v);
                    volunteers.Insert(index,vi);
                }

            }
            return false;

        }
        public bool Delete(int id)
        {
            foreach (Volunteer v in volunteers)
            {
                if (v.Id == id)
                {
                    volunteers.Remove(v);
                    return true;
                }

            }
            return false;
        }
    }
}

