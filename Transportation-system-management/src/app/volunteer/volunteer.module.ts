import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { VolunteerService } from './volunteer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerRoutingModule } from './volunteer-routing.module';
import {Route, RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path:"volunteersList",component:VolunteersListComponent},
  {path:'volunteer-details/:id',component:VolunteerDetailsComponent},
  {path:"",component:VolunteersListComponent}
];


@NgModule({
  declarations: [VolunteersListComponent,VolunteerDetailsComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,VolunteerRoutingModule,RouterModule.forChild(routes)],
  providers:[VolunteerService],
  exports:[VolunteersListComponent,VolunteerDetailsComponent]
})
export class VolunteerModule { }

