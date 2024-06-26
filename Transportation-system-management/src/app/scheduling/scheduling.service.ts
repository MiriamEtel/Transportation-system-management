
import { Injectable } from "@angular/core";
import { Volunteer } from "../volunteer/volunteer.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {


  constructor(private _http: HttpClient) { }
  getVoluteersByDay(day: Number): Observable<Volunteer[]> {
    return this._http.get<Volunteer[]>(`http://localhost:5280/api/SchedulingByDay/${day}`);

  }
  getScheduling(): Observable<Volunteer[][]> {
    return this._http.get<Volunteer[][]>("http://localhost:5280/api/Scheduling/All");
  }
  saveScheduling(Scheduling: number[]): Observable<boolean> {
    console.log(Scheduling);
    return this._http.put<boolean>("http://localhost:5280/api/Scheduling/save", Scheduling);
  }
  getChosenScheduling():Observable<Number[]>{
    return this._http.get<Number[]>("http://localhost:5280/api/Scheduling/getChosen");
  }

}



