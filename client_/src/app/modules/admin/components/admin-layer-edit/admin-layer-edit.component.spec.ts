import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayerEditComponent } from './admin-layer-edit.component';

describe('AdminLayerEditComponent', () => {
  let component: AdminLayerEditComponent;
  let fixture: ComponentFixture<AdminLayerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
