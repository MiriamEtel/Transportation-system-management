using volunteer_service;

namespace volunteer_service.Services;

public class VolunteerService
{
    static List<Volunteer> volunteerList { get; set; }
    static VolunteerService()
    {
        volunteerList = new List<Volunteer>()
        {
            new Volunteer() { id= 1, firstName= "Rut", lastName= "Chen", phone= "052-7652104", days= new bool[6]{true,false,false,false,false,false} },
            new Volunteer() { id= 2, firstName= "Sari", lastName= "Levi", phone= "053-2548432", days= new bool[6]{true,false,true,true,false,false} },
        };
    }

    public static List<Volunteer> GetAll() => volunteerList;
    public static Volunteer? Get(int id) => volunteerList.FirstOrDefault(v => v.id == id);
    public static void Add(Volunteer volunteer)
    {
        volunteer.id = volunteerList.Last().id+1;
        volunteerList.Add(volunteer);
    }
    public static List<Volunteer> Delete(int id)
    {
        var volunteer = Get(id);
        volunteerList.Remove(volunteer);
        return volunteerList;
    }
    public static bool UpDate(Volunteer volunteer)
    {
        var index = volunteerList.FindIndex(v => v.id == volunteer.id);
        if(index != -1)
        {
            volunteerList[index] = volunteer;
            return true;
        }
        return false;
    }
}