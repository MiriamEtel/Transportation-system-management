
import { Component } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { Observable, from } from 'rxjs';
import { map, filter, take } from "rxjs/operators";

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
})
export class VolunteersListComponent {

  constructor(private volunteerService: VolunteerService)
  {
    this.init();

    // this.getStudentsList().then((val: Student[]) => {
    //   console.log(val);
    // }) 
    
    // this.student$.subscribe(val => {
    //   console.log(val);
    // });
    // this.student2$.subscribe(val => {
    //   console.log(val);
    // });

  }

  volunteersList: Volunteer[] = [];

  // init = async () => {
  //   this.studentsList = this.studentsService.getAllStudents();
  // }

  init = async () => {
    this.volunteerService.getVolunteer().subscribe(data =>{
      this.volunteersList = data});
  }
  
  // getStudentsList = (): Promise<Student[]> => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.studentsList);
  //     }, 3000);
  //   })
  // }

  // student$: Observable<string> = new Observable((obs)=>{
  //   for(let i=0;i<this.studentsList.length;i++){
  //     obs.next(this.studentsList[i].firstName);
  //   }   
  // });
  // student2$: Observable<string> = from(this.studentsList).pipe(map((student: Student) => student.lastName));
  
  selectVolunteer?: Volunteer;

  editVolunteer = (VolunteerToEdit: Volunteer) => {
    this.selectVolunteer = VolunteerToEdit;
  }

  deleteVolunteer = (id: number) => {
    // const StudentToDelete = this.studentsList.find(student => student.id == id);
    // if (StudentToDelete) {
      // const index = this.studentsList.indexOf(StudentToDelete);
      this.volunteerService.deleteVolunteerFromServer(id);
    // }
  }

  addNewVolunteer = () => {
    this.selectVolunteer = new Volunteer();
  }

  saveNewVolunteer = (newVolunteer: Volunteer) => {
    if (newVolunteer.id == 0) {
      newVolunteer.id = this.volunteersList.length + 1;
      this.volunteersList.push(newVolunteer);
    }
    else {
      let volunteerUp = this.volunteersList.find(x => x.id == newVolunteer.id);
      if (volunteerUp) {
        const ind = this.volunteersList.indexOf(volunteerUp);
        this.volunteersList[ind] = newVolunteer;
      }
    }
    this.selectVolunteer = undefined;
    this.massege = true;
    setTimeout(() => {
      this.massege = false;
    }, 3000);
  }

  massege: boolean = false;
}
