
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Volunteer} from '../volunteer.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-volunteer-detials',
  templateUrl: './volunteer-detials.component.html',
  styleUrl: './volunteer-detials.component.scss'
})
export class VolunteerDetialsComponent {

  private _volunteer?: Volunteer;

  


  public get volunteer(): Volunteer | undefined {
    return this._volunteer;
  }

  @Input()
  public set volunteer(value: Volunteer | undefined) {
    this._volunteer = value;
    if (value) {
      this.VolunteerForm = new FormGroup({
        "id": new FormControl(this.volunteer?.id),
        "firstName": new FormControl(this.volunteer?.firstName, [Validators.minLength(2), Validators.required]),
        "lastName": new FormControl(this.volunteer?.lastName, [Validators.minLength(2), Validators.required]),
      })
    }
  }



  VolunteerForm: FormGroup = new FormGroup({});

  saveNewVolunteer = () => {
    this.volunteer= this.VolunteerForm.value;

  }
}
