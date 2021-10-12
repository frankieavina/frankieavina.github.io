import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneProjectsComponent } from './phone-projects.component';

describe('PhoneProjectsComponent', () => {
  let component: PhoneProjectsComponent;
  let fixture: ComponentFixture<PhoneProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
