
import { Injectable } from "@angular/core";
import { Volunteer } from "./volunteer.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VolunteerService {

    constructor(private http: HttpClient) { }
    getAll(): Observable<Volunteer[]> {
      return this.http.get<Volunteer[]>("http://localhost:5280/api/Volunteer/All");
  
    }
    getById(id: Number): Observable<Volunteer> {
      return this.http.get<Volunteer>(`http://localhost:5280/api/Volunteer/ById/${id}`);
  
    }
    update(volunteer: Volunteer): Observable<boolean> {
      return this.http.put<boolean>('http://localhost:5280/api/Volunteer/update', volunteer);
    }
<<<<<<< HEAD
=======
getAll():Observable<Volunteer[]>{
    return this._http.get<Volunteer[]>("http://localhost:5001/api/Volunteer/All")

}
getById(id:Number):Observable<Volunteer>{
    return this._http.get<Volunteer>(`http://localhost:5001/api/Volunteer/ById/${id}`);
}
update(volunteer:Volunteer):Observable<boolean>{
    return this._http.put<boolean>(`http://localhost:5001/api/Volunteer/Update`,Volunteer)
}

>>>>>>> 924d705905ac731f2b4d478dd2f9bae18eac4ec6
     

}