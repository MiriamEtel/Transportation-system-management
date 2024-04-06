import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import {Route, RouterModule, Routes } from '@angular/router';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SchedulingService } from './scheduling.service';

const routes : Routes =[
  {path:"scheduling",component:SchedulingComponent},
];


@NgModule({
  declarations: [SchedulingComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,SchedulingRoutingModule,RouterModule.forChild(routes)],  providers:[SchedulingService],
  exports:[SchedulingComponent]
})
export class SchedulingModule { }


