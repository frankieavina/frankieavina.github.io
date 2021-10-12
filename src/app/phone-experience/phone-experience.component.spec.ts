import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneExperienceComponent } from './phone-experience.component';

describe('PhoneExperienceComponent', () => {
  let component: PhoneExperienceComponent;
  let fixture: ComponentFixture<PhoneExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
