
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
  
  editVolunteer = (volunteer: Volunteer) => {
<<<<<<< HEAD
    this.router.navigate(['/volunteer/volunteer-details',volunteer!.id]);
=======
    this.router.navigate(['/volunteer/volunteer-detials',volunteer!.id]);
>>>>>>> 924d705905ac731f2b4d478dd2f9bae18eac4ec6
  }
}
