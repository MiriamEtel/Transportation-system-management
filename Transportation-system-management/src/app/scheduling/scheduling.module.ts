import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SchedulingService } from './scheduling.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { schedulingRoutingModule } from './scheduling-routing.module';
import {Route, RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path:"scheduling",component:SchedulingComponent},
];



@NgModule({
  declarations: [SchedulingComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,schedulingRoutingModule,RouterModule.forChild(routes)],
  providers: [SchedulingService],
  exports: [SchedulingComponent],
})
export class SchedulingModule { }


