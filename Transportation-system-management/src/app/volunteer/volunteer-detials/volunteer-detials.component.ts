import { Component,EventEmitter,Input,OnInit,output } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteers-detial',
  templateUrl: './volunteer-detials.component.html',
  styleUrls :['./volunteer-detials.component.scss']
})

export class VolunteerDetialsComponent implements OnInit{
  constructor(private _ar:ActivatedRoute,private vs :VolunteerService,private router :Router){
  }
   volunteerForm: FormGroup = new FormGroup({});
    value:Number=0;
    private _volunteer?:Volunteer;
    formNotValid:boolean=false;
    ngOnInit(){
      this.value=parseInt(this._ar.snapshot.paramMap.get('id')?? '');
      this.vs.getById(this.value).subscribe(val=>this.Volunteer=val)
      
    }
    public get Volunteer():Volunteer| undefined{
      return this.Volunteer;
    }

    public set Volunteer(value:Volunteer | undefined){
      this.Volunteer=value;
      if(value)
      {
        this.volunteerForm = new FormGroup({
       firstName:new FormControl(this.Volunteer?.firstName,[Validators.required,Validators.maxLength(15)]),
       lastName:new FormControl(this.Volunteer?.lastName,[Validators.required,Validators.maxLength(15)]),
       tel:new FormControl(this.Volunteer?.tel),
       Sun:new FormControl(this.Volunteer?.days[0]),
       Mon:new FormControl(this.Volunteer?.days[1]),
       Tues:new FormControl(this.Volunteer?.days[2]),
       Wedn:new FormControl(this.Volunteer?.days[3]),
       Thur:new FormControl(this.Volunteer?.days[4])
       
       });
      }
    }
  saveVolunteer=()=>{
    if (this.volunteerForm.valid) {
      console.log("save..");
      this.Volunteer=this.volunteerForm.value;
      this.vs.update(this.Volunteer!).subscribe(val =>{this.isSaveSucceed(val)});
      this.router.navigate(['/volunteer/volunteerList']);
    }
    else{
      this.formNotValid=true;
      console.log("didnt save..")
    }
  }
    isSaveSucceed = (val: boolean) => {
      if(val){

      }
      else{

      }
    }
  }
  
  




