import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { VolunteerDetialsComponent } from './volunteer-detials/volunteer-detials.component';



@NgModule({
  declarations: [VolunteersListComponent,VolunteerDetialsComponent],
  imports: [
    CommonModule
  ],
  exports:[VolunteersListComponent,VolunteerDetialsComponent]
})
export class VolunteerModule { }
