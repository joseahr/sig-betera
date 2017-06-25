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
var ng2_dragula_1 = require("ng2-dragula");
var openlayers_1 = require("openlayers");
var LayerSwitcherComponent = (function () {
    function LayerSwitcherComponent(dragulaService) {
        this.dragulaService = dragulaService;
        this.maxLayerNameLength = 40;
        this.emmiter = new core_1.EventEmitter();
        //console.log('maaap');
    }
    LayerSwitcherComponent.prototype.updateLayerNamesLength = function (e) {
        this.maxLayerNameLength = (e.target.innerWidth < 500 ? 12 : 40);
    };
    LayerSwitcherComponent.prototype.getReversed = function (array) {
        return array.reverse();
    };
    LayerSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dragulaService.setOptions('layers', {
            moves: function (el, container, handle) { return handle.classList.contains('handle'); },
            accepts: function (el, target, source, sibling) { return target.attributes[2].value == 'layers'; }
        });
        this.dragulaService.setOptions('layerGroup', {
            moves: function (el, container, handle) { return handle.classList.contains('handleGroup'); },
            accepts: function (el, target, source, sibling) { return target.attributes[1].value == 'layerGroup' && el.parentNode == target; }
        });
        this.dragulaService.drop.subscribe(function () {
            _this.emmiter.next();
        });
    };
    LayerSwitcherComponent.prototype.getLengthWithoutNotVisibleLayers = function () {
        //console.log(this.map.getLayers().getArray());
        //console.log(this.map.getLayers().getArray().filter( m => !(m.get('showInLayerSwitcher') === false) ), 'arrrr');
        return this.map.getLayers().getArray().filter(function (m) { return !(m.get('showInLayerSwitcher') === false); }).length;
    };
    LayerSwitcherComponent.prototype.toggleMaps = function () {
        this.mapsDetailsContainer.nativeElement.classList.toggle('collapsed');
    };
    LayerSwitcherComponent.prototype.getDisplay = function (layer) {
        return layer.get('showInLayerSwitcher') === false
            ? 'invisible'
            : this.collapsed;
    };
    LayerSwitcherComponent.prototype.changeVisible = function (event, indexGroup) {
        this.map
            .getLayers()
            .item(indexGroup)
            .setVisible(event.checked);
    };
    LayerSwitcherComponent.prototype.changeVisibleGroupLayer = function (event, indexGroup, indexLayer) {
        this.map
            .getLayers()
            .item(indexGroup)
            .get('layers')
            .item(indexLayer)
            .setVisible(event.checked);
    };
    LayerSwitcherComponent.prototype.moveLayerUp = function (indexGroup) {
        if (indexGroup >= 0) {
            var layer = this.map.getLayers().getArray().splice(indexGroup, 1)[0];
            this.map.getLayers().getArray().splice(indexGroup + 1, 0, layer);
            layer.changed();
            this.emmiter.next();
        }
    };
    LayerSwitcherComponent.prototype.moveLayerDown = function (indexGroup) {
        if (indexGroup > 0) {
            var layer = this.map.getLayers().getArray().splice(indexGroup, 1)[0];
            this.map.getLayers().getArray().splice(indexGroup - 1, 0, layer);
            layer.changed();
            this.emmiter.next();
        }
    };
    LayerSwitcherComponent.prototype.moveLayerInGroupUp = function (indexGroup, indexLayer) {
        if (indexGroup >= 0 && indexLayer >= 0) {
            var layerGroup = this.map.getLayers().item(indexGroup).get('layers').getArray();
            var layer = layerGroup.splice(indexLayer, 1)[0];
            layerGroup.splice(indexLayer + 1, 0, layer);
            layer.changed();
            this.emmiter.next();
        }
    };
    LayerSwitcherComponent.prototype.moveLayerInGroupDown = function (indexGroup, indexLayer) {
        if (indexGroup >= 0 && indexLayer > 0) {
            var layerGroup = this.map.getLayers().item(indexGroup).get('layers').getArray();
            var layer = layerGroup.splice(indexLayer, 1)[0];
            layerGroup.splice(indexLayer - 1, 0, layer);
            layer.changed();
            this.emmiter.next();
        }
    };
    LayerSwitcherComponent.prototype.changeOpacity = function (event, indexGroup) {
        this.map
            .getLayers()
            .item(indexGroup)
            .setOpacity(event.value);
    };
    LayerSwitcherComponent.prototype.changeOpacityGroupLayer = function (event, indexGroup, indexLayer) {
        //console.log('changeOpacityGroupLayer', indexGroup, indexLayer)
        this.map
            .getLayers()
            .item(indexGroup)
            .get('layers')
            .item(indexLayer)
            .setOpacity(event.value);
    };
    LayerSwitcherComponent.prototype.getOpacity = function (layer) {
        if (layer.getSource().getState() == 'ready')
            return 1;
        if (layer.getSource().getState() == 'loading')
            return 0.75;
        if (layer.getSource().getState() == 'error' ||
            layer.getSource().getState() == 'undefined')
            return 0.4;
    };
    return LayerSwitcherComponent;
}());
__decorate([
    core_1.ViewChild('mapsDetailsContainer'),
    __metadata("design:type", core_1.ElementRef)
], LayerSwitcherComponent.prototype, "mapsDetailsContainer", void 0);
__decorate([
    core_1.Input('map'),
    __metadata("design:type", openlayers_1.Map)
], LayerSwitcherComponent.prototype, "map", void 0);
__decorate([
    core_1.Output('layersChanged'),
    __metadata("design:type", core_1.EventEmitter)
], LayerSwitcherComponent.prototype, "emmiter", void 0);
__decorate([
    core_1.Input('visibility'),
    __metadata("design:type", Object)
], LayerSwitcherComponent.prototype, "collapsed", void 0);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LayerSwitcherComponent.prototype, "updateLayerNamesLength", null);
LayerSwitcherComponent = __decorate([
    core_1.Component({
        selector: 'app-layer-switcher',
        templateUrl: './layer-switcher.component.html',
        styleUrls: ['./layer-switcher.component.css'],
        providers: [ng2_dragula_1.DragulaService],
        animations: [
            core_1.trigger('collapsed', [
                core_1.state('invisible', core_1.style({
                    transform: 'translateY(-200%)',
                    opacity: 0,
                    display: 'none'
                })),
                core_1.state('visible', core_1.style({
                    transform: 'translateY(0%)',
                    opacity: 1,
                    display: ''
                })),
                core_1.transition('invisible => visible', core_1.animate('500ms ease-in')),
                core_1.transition('visible => invisible', core_1.animate('500ms ease-out'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [ng2_dragula_1.DragulaService])
], LayerSwitcherComponent);
exports.LayerSwitcherComponent = LayerSwitcherComponent;
