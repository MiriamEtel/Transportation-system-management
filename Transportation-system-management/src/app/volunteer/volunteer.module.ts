import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { VolunteerDetialsComponent } from './volunteer-detials/volunteer-detials.component';
import { VolunteerService } from './volunteer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerRoutingModule } from './volunteer-routing.module';
import {Route, RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path:"volunteersList",component:VolunteersListComponent},
  {path:"volunteerDetials",component:VolunteerDetialsComponent},
  {path:"",component:VolunteersListComponent}
];


@NgModule({
  declarations: [VolunteersListComponent,VolunteerDetialsComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,VolunteerRoutingModule,RouterModule.forChild(routes)],
  providers:[VolunteerService],
  exports:[VolunteersListComponent,VolunteerDetialsComponent]
})
export class VolunteerModule { }
