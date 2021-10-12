import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContactPageComponent } from './phone-contact-page.component';

describe('PhoneContactPageComponent', () => {
  let component: PhoneContactPageComponent;
  let fixture: ComponentFixture<PhoneContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneContactPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
