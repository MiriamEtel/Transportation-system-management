import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { VolunteerModule } from './volunteer/volunteer.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import {Route, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes=[
  {path:"volunteer",loadChildren:()=>import("./volunteer/volunteer.module").then(m=>m.VolunteerModule)},
  {path:"scheduling",loadChildren:()=>import("./scheduling/scheduling.module").then(m=>m.SchedulingModule)}
];


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes),VolunteerModule,SchedulingModule],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }