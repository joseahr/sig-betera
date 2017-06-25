import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWmsComponent } from './add-wms.component';

describe('AddWmsComponent', () => {
  let component: AddWmsComponent;
  let fixture: ComponentFixture<AddWmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
