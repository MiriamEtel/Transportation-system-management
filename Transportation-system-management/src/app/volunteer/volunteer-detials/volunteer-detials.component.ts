
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Volunteer} from '../volunteer.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-volunteer-detials',
  templateUrl: './volunteer-detials.component.html',
  styleUrl: './volunteer-detials.component.css'
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
        "phone": new FormControl(this.volunteer?.phone, [Validators.minLength(10), Validators.maxLength(11)]),
        "address": new FormControl(this.volunteer?.address, Validators.minLength(3)),
      })
    }
  }

  @Output()
  onSaveVolunteer: EventEmitter<Volunteer> = new EventEmitter();

  VolunteerForm: FormGroup = new FormGroup({});

  saveNewVolunteer = () => {
    this.volunteer= this.VolunteerForm.value;
    this.onSaveVolunteer.emit(this.volunteer)
  }
}
