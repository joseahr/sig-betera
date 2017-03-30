import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMapsEditComponent } from './admin-maps-edit.component';

describe('AdminMapsEditComponent', () => {
  let component: AdminMapsEditComponent;
  let fixture: ComponentFixture<AdminMapsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMapsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMapsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
