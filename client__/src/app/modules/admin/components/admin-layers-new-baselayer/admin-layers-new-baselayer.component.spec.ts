import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayersNewBaselayerComponent } from './admin-layers-new-baselayer.component';

describe('AdminLayersNewBaselayerComponent', () => {
  let component: AdminLayersNewBaselayerComponent;
  let fixture: ComponentFixture<AdminLayersNewBaselayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayersNewBaselayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayersNewBaselayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
