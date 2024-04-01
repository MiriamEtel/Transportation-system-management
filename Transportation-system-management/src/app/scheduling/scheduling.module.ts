import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SchedulingService } from './scheduling.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { schedulingRoutingModule } from './scheduling-routing.module';




@NgModule({
  declarations: [SchedulingComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,schedulingRoutingModule],
  providers: [SchedulingService],
  exports: [SchedulingComponent],
})
export class SchedulingModule { }


