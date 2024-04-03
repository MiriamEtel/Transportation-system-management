
import { Component,OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls :['./volunteers-list.component.scss']
})
export class VolunteersListComponent implements OnInit {

  constructor(private vs:VolunteerService,private router:Router){

  }

  ngOnInit(){
    this.vs.getAll().subscribe(val=> this.volunteers=val)
  }
  volunteers: Volunteer[] = [];
  
  editVolunteer=(volunteer: Volunteer)=>{
  this.router.navigate(['/volunteer/volunteer-detials',volunteer!.id])
    
  }
}
