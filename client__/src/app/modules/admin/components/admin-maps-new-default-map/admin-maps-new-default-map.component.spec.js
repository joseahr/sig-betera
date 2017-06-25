"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_maps_new_default_map_component_1 = require("./admin-maps-new-default-map.component");
describe('AdminMapsNewDefaultMapComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [admin_maps_new_default_map_component_1.AdminMapsNewDefaultMapComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(admin_maps_new_default_map_component_1.AdminMapsNewDefaultMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
