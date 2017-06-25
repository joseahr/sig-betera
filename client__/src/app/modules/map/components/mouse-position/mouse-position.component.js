"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var services_1 = require("../../services");
var MousePositionComponent = (function () {
    function MousePositionComponent(projectionService, zone) {
        this.projectionService = projectionService;
        this.zone = zone;
        this.containerVisibility = 'invisible';
        this.active = false;
    }
    MousePositionComponent.prototype.ngOnInit = function () {
        //this.addListener();
        this.proj4258 = this.projectionService.getDefaultProjection(4258);
        this.proj25830 = this.projectionService.getDefaultProjection(25830);
        this.name25830 = this.projectionService.defaultProjections[0].name;
        this.name4258 = this.projectionService.defaultProjections[1].name;
    };
    MousePositionComponent.prototype.addListener = function () {
        var _this = this;
        if (this.listenerMove)
            this.removeListener();
        this.listenerMove = this.map.on('pointermove', function (e) { return _this.onPointerMove(e); });
        this.outListener = this.map.getViewport().addEventListener('mouseout', this.onPointerOut.bind(this));
    };
    MousePositionComponent.prototype.removeListener = function () {
        openlayers_1.Observable.unByKey(this.listenerMove);
        this.map.getViewport().removeEventListener(this.outListener);
        this.onPointerOut();
        this.outListener = null;
        this.listenerMove = null;
    };
    MousePositionComponent.prototype.onPointerMove = function (e) {
        var c25830 = e.coordinate.map(function (c) { return c.toFixed(3); });
        var c4258 = openlayers_1.proj.transform(c25830, this.proj25830, this.proj4258).map(function (c) { return +c.toFixed(5); });
        c4258 = openlayers_1.coordinate
            .toStringHDMS(c4258)
            .match(/((\d+° )?(\d+′ )?(\d+″ )?(N|S)?)((\d+° )?(\d+′ )?(\d+″ )?(E|W)?)/g)
            .filter(function (c) { return c; })
            .reverse();
        this.coordinate4258 = c4258;
        this.coordinate25830 = c25830.map(function (c) { return c + " m"; });
        //console.log(this.coordinate25830, this.coordinate4258);
        if (this.containerVisibility != 'visible') {
            this.containerVisibility = 'visible';
        }
    };
    MousePositionComponent.prototype.onPointerOut = function () {
        this.coordinate25830 = null;
        this.coordinate4258 = null;
        console.log('outtt');
        if (this.containerVisibility != 'invisible') {
            this.containerVisibility = 'invisible';
        }
    };
    MousePositionComponent.prototype.toggleControl = function () {
        if (this.active) {
            this.removeListener();
        }
        else {
            this.addListener();
        }
        this.active = !this.active;
        document.querySelector('.mouse-position-button').classList.toggle('active');
    };
    return MousePositionComponent;
}());
__decorate([
    core_1.Input('map'),
    __metadata("design:type", openlayers_1.Map)
], MousePositionComponent.prototype, "map", void 0);
MousePositionComponent = __decorate([
    core_1.Component({
        selector: 'app-mouse-position',
        templateUrl: './mouse-position.component.html',
        styleUrls: ['./mouse-position.component.css'],
        providers: [services_1.ProjectionService],
        animations: [
            core_1.trigger('collapsed', [
                core_1.state('invisible', core_1.style({
                    height: '0px',
                    width: '0px',
                    transform: 'translateX(-0.5em)'
                })),
                core_1.state('visible', core_1.style({
                    height: '100%',
                    width: '100%',
                    transform: 'translateX(-1em)'
                })),
                core_1.transition('invisible => visible', core_1.animate('500ms ease-in')),
                core_1.transition('visible => invisible', core_1.animate('400ms ease-out'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [services_1.ProjectionService,
        core_1.NgZone])
], MousePositionComponent);
exports.MousePositionComponent = MousePositionComponent;
