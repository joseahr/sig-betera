import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMapsNewMapComponent } from './admin-maps-new-map.component';

describe('AdminMapsNewMapComponent', () => {
  let component: AdminMapsNewMapComponent;
  let fixture: ComponentFixture<AdminMapsNewMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMapsNewMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMapsNewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
