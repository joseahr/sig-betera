import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordTokenComponent } from './change-password-token.component';

describe('ChangePasswordTokenComponent', () => {
  let component: ChangePasswordTokenComponent;
  let fixture: ComponentFixture<ChangePasswordTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
