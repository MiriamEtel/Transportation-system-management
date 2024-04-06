import { Component} from '@angular/core';
import { Volunteer } from '../../volunteer/volunteer.model';
import { Router } from '@angular/router';
import { SchedulingService } from '../scheduling.service';
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.scss'
})
export class SchedulingComponent  {
  constructor(private ss:SchedulingService){

  }
  ngOnInit() {
    this.ss.getScheduling().subscribe(val=>this.volunteers_scheduling=val)

  }
  Days:string[]=["Sun","Mon","Tue","Wedn","Thur"];
  chosen:Number[]=[-1,-1,-1,-1,-1];
  volunteers_scheduling: Volunteer[][] = [[],[],[],[],[]];
  getSchedulingForDay=(day:number):Volunteer[]=>{
    return this.volunteers_scheduling[day];
  }
  save_schduling(){
    this.ss.saveScheduling(this.chosen);

  }
  saveSchedulingForDay(day:number,volunteer:Volunteer){
    this.chosen[day]=volunteer.id;

  }
}






 
  


