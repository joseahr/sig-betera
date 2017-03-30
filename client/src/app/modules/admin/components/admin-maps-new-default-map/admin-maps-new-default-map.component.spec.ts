import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMapsNewDefaultMapComponent } from './admin-maps-new-default-map.component';

describe('AdminMapsNewDefaultMapComponent', () => {
  let component: AdminMapsNewDefaultMapComponent;
  let fixture: ComponentFixture<AdminMapsNewDefaultMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMapsNewDefaultMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMapsNewDefaultMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
