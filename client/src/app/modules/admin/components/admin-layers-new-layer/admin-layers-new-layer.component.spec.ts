import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayersNewLayerComponent } from './admin-layers-new-layer.component';

describe('AdminLayersNewLayerComponent', () => {
  let component: AdminLayersNewLayerComponent;
  let fixture: ComponentFixture<AdminLayersNewLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayersNewLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayersNewLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
