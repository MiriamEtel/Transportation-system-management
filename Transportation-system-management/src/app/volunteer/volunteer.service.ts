
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

}