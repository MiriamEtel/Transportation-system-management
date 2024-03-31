import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { VolunteerDetialsComponent } from './volunteer-detials/volunteer-detials.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [VolunteersListComponent,VolunteerDetialsComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  exports:[VolunteersListComponent,VolunteerDetialsComponent]
})
export class VolunteerModule { }
