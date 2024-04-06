using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using my_server.models;
using my_server.interfaces;
using FilesService;

namespace my_server.services
{
    public class VolunteerService:IVolunteer
    {
        private readonly IFile _fs;
        ISchedule _is=new SchedulingService(new ReadAndWrite());
        public VolunteerService(IFile fs){
            this._fs=fs;
            
        }
    
        public List<Volunteer> All()
        {
            return _fs.Read<Volunteer>("data.json");

        }
        public Volunteer ById(int id)
        {
            return this.All().FirstOrDefault<Volunteer>(v=>v.Id==id);

        }

        public bool Create(Volunteer v)
        {
            this._fs.Write<Volunteer>(v,"data.json");
            return true;

        }
        public bool Update(Volunteer vi)
        {
            for (int i=0;i<5;i++){
                if(vi.Days[i]==false&&_is.IsChoose(vi.Id,i)){
                    return false;
                }
            }
            List<Volunteer> ls=this.All();
            foreach (Volunteer v in ls)
            {
                if (v.Id == vi.Id)
                {
                    int index=ls.IndexOf(v);
                    ls[index]=vi;
                    this._fs.Update<Volunteer>("data.json",ls);
                    return true;
                }

            }
            return false;

        }
        public bool Delete(int id)
        {
            List<Volunteer> ls=this.All();
            foreach (Volunteer v in ls)
            {
                if (v.Id == id)
                {
                    ls.Remove(v);
                    this._fs.Update<Volunteer>("data.json",ls);
                    return true;
                }

            }
            return false;
        }
    }
}

