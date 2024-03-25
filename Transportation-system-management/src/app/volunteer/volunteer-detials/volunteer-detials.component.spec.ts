import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDetialsComponent } from './volunteer-detials.component';

describe('VolunteerDetialsComponent', () => {
  let component: VolunteerDetialsComponent;
  let fixture: ComponentFixture<VolunteerDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerDetialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
