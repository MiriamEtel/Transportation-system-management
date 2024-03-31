
import { Injectable } from "@angular/core";
import { Volunteer } from "./volunteer.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VolunteerService {

    constructor(private _http: HttpClient)
    {    
    }

    getVolunteer = (): Observable<Volunteer[]> =>
    {
        return this._http.get<Volunteer[]>("api/Volunteer");
    }

    deleteVolunteerFromServer = (id:number): Observable<Volunteer[]> =>
    {
        let list = this._http.delete<Volunteer[]>(`api/Volunteer/Delete/${id}`);
        console.log(list);
        return list;
    }

     

}