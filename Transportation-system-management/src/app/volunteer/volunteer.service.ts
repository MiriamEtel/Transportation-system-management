
import { Injectable } from "@angular/core";
import { Volunteer } from "./volunteer.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VolunteerService {

    constructor(private _http: HttpClient)
    {    
    }
getAll():Observable<Volunteer[]>{
    return this._http.get<Volunteer[]>("/api/volunteer/all")

}
getById(id:Number):Observable<Volunteer>{
    return this._http.get<Volunteer>(`api/Volunteer/ById/${id}`);
}
update(volunteer:Volunteer):Observable<boolean>{
    return this._http.put<boolean>(`/api/volunteer/update`,Volunteer)
}

     

}