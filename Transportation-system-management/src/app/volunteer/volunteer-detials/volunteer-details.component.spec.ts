import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDetialsComponent } from './volunteer-detials.component';

describe('VolunteerDetailsComponent', () => {
  let component: VolunteerDetialsComponent;
  let fixture: ComponentFixture<VolunteerDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerDetialsComponent]
    });
    fixture = TestBed.createComponent(VolunteerDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
