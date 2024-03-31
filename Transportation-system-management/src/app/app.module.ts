import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { VolunteerModule } from './volunteer/volunteer.module';
import { SchedulingModule } from './scheduling/scheduling.module';



@NgModule({
  declarations: [AppComponent,VolunteerModule,SchedulingModule],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }