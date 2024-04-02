
import { Component } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { Observable, from } from 'rxjs';
import { map, filter, take } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls :['./volunteers-list.component.scss']
})
export class VolunteersListComponent {

  constructor(private vs:VolunteerService,private router:Router){

  }

  ngOnInit(){
    this.vs.getAll().subscribe(val=> this.volunteers=val)
  }
  volunteers:Volunteer[]=[];
  editVolunteer()
}
