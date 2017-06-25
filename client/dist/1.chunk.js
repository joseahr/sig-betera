webpackJsonp([1,7],{

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts__ = __webpack_require__(1245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_pipes__ = __webpack_require__(1196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_truncate__ = __webpack_require__(1270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_truncate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_truncate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_measure_measure_component__ = __webpack_require__(1209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_mouse_position_mouse_position_component__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_layer_edit_layer_component__ = __webpack_require__(1208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var mapRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components__["a" /* MapComponent */]
    }, {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_5__components__["a" /* MapComponent */]
    }, {
        path: ':id/:name',
        component: __WEBPACK_IMPORTED_MODULE_5__components__["a" /* MapComponent */]
    }];
var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* LayerSwitcherComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["d" /* AddWmsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["e" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["f" /* SearchComponentDialog */],
            __WEBPACK_IMPORTED_MODULE_12__components_measure_measure_component__["a" /* MeasureComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["g" /* MeasureSnackBar */], __WEBPACK_IMPORTED_MODULE_13__components_mouse_position_mouse_position_component__["a" /* MousePositionComponent */], __WEBPACK_IMPORTED_MODULE_14__components_edit_layer_edit_layer_component__["a" /* EditLayerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["h" /* FeatureEditDialog */],
            __WEBPACK_IMPORTED_MODULE_5__components__["i" /* FeatureDeleteDialog */]
        ],
        providers: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTablesModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular_pipes__["b" /* NgObjectPipesModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular_pipes__["a" /* NgMathPipesModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_truncate__["TruncateModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_loading_animate__["LoadingAnimateModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(mapRoutes)
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__components__["d" /* AddWmsComponent */], __WEBPACK_IMPORTED_MODULE_5__components__["f" /* SearchComponentDialog */], __WEBPACK_IMPORTED_MODULE_5__components__["g" /* MeasureSnackBar */], __WEBPACK_IMPORTED_MODULE_5__components__["h" /* FeatureEditDialog */], __WEBPACK_IMPORTED_MODULE_5__components__["i" /* FeatureDeleteDialog */]
        ]
    })
], MapModule);

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["h"] = isNull;
/* harmony export (immutable) */ __webpack_exports__["n"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["o"] = isNumberFinite;
/* harmony export (immutable) */ __webpack_exports__["r"] = isPositive;
/* harmony export (immutable) */ __webpack_exports__["q"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["f"] = isNil;
/* harmony export (immutable) */ __webpack_exports__["g"] = isString;
/* harmony export (immutable) */ __webpack_exports__["e"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["m"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["s"] = toDecimal;
/* harmony export (immutable) */ __webpack_exports__["i"] = upperFirst;
/* harmony export (immutable) */ __webpack_exports__["p"] = createRound;
/* harmony export (immutable) */ __webpack_exports__["l"] = leftPad;
/* harmony export (immutable) */ __webpack_exports__["j"] = rightPad;
/* unused harmony export toString */
/* harmony export (immutable) */ __webpack_exports__["k"] = pad;
/* harmony export (immutable) */ __webpack_exports__["y"] = flatten;
/* harmony export (immutable) */ __webpack_exports__["c"] = getProperty;
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony export (immutable) */ __webpack_exports__["A"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["x"] = deepIndexOf;
/* unused harmony export deepEqual */
/* harmony export (immutable) */ __webpack_exports__["v"] = isDeepObject;
/* harmony export (immutable) */ __webpack_exports__["z"] = wrapDeep;
/* harmony export (immutable) */ __webpack_exports__["w"] = unwrapDeep;
/* unused harmony export DeepWrapper */
/* harmony export (immutable) */ __webpack_exports__["C"] = count;
/* harmony export (immutable) */ __webpack_exports__["D"] = empty;
/* harmony export (immutable) */ __webpack_exports__["B"] = every;
/* harmony export (immutable) */ __webpack_exports__["t"] = takeUntil;
/* harmony export (immutable) */ __webpack_exports__["u"] = takeWhile;
function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isNumber(value) {
    return typeof value === 'number';
}
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
// Not strict positive
function isPositive(value) {
    return value >= 0;
}
function isInteger(value) {
    // No rest, is an integer
    return (value % 1) === 0;
}
function isNil(value) {
    return value === null || typeof (value) === 'undefined';
}
function isString(value) {
    return typeof value === 'string';
}
function isObject(value) {
    return typeof value === 'object';
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function toDecimal(value, decimal) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
function upperFirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
}
function createRound(method) {
    // <any>Math to suppress error
    var func = Math[method];
    return function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (typeof value === 'string') {
            throw new TypeError('Rounding method needs a number');
        }
        if (typeof precision !== 'number' || isNaN(precision)) {
            precision = 0;
        }
        if (precision) {
            var pair = (value + "e").split('e');
            var val = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (val + "e").split('e');
            return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(value);
    };
}
function leftPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str = ch + str;
    }
    return str;
}
function rightPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str += ch;
    }
    return str;
}
function toString(value) {
    return "" + value;
}
function pad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    var left = true;
    while (++i < length) {
        var l = (str.length + ch.length <= len) ? (str.length + ch.length) : (str.length + 1);
        if (left) {
            str = leftPad(str, l, ch);
        }
        else {
            str = rightPad(str, l, ch);
        }
        left = !left;
    }
    return str;
}
function flatten(input, index) {
    if (index === void 0) { index = 0; }
    if (index >= input.length) {
        return input;
    }
    if (isArray(input[index])) {
        return flatten(input.slice(0, index).concat(input[index], input.slice(index + 1)), index);
    }
    return flatten(input, index + 1);
}
function getProperty(value, key) {
    if (isNil(value) || !isObject(value)) {
        return undefined;
    }
    var keys = key.split('.');
    var result = value[keys.shift()];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key_1 = keys_1[_i];
        if (isNil(result) || !isObject(result)) {
            return undefined;
        }
        result = result[key_1];
    }
    return result;
}
function sum(input, initial) {
    if (initial === void 0) { initial = 0; }
    return input.reduce(function (previous, current) { return previous + current; }, initial);
}
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(input) {
    if (!isArray(input)) {
        return input;
    }
    var copy = input.slice();
    for (var i = copy.length; i; --i) {
        var j = Math.floor(Math.random() * i);
        var x = copy[i - 1];
        copy[i - 1] = copy[j];
        copy[j] = x;
    }
    return copy;
}
function deepIndexOf(collection, value) {
    var index = -1;
    var length = collection.length;
    while (++index < length) {
        if (deepEqual(value, collection[index])) {
            return index;
        }
    }
    return -1;
}
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!(typeof a === 'object' && typeof b === 'object')) {
        return a === b;
    }
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
        var key = keysA[i];
        if (!hasOwn.call(b, keysA[i]) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
function isDeepObject(object) {
    return object.__isDeepObject__;
}
function wrapDeep(object) {
    return new DeepWrapper(object);
}
function unwrapDeep(object) {
    if (isDeepObject(object)) {
        return object.data;
    }
    return object;
}
var DeepWrapper = (function () {
    function DeepWrapper(data) {
        this.data = data;
        this.__isDeepObject__ = true;
    }
    return DeepWrapper;
}());

function count(input) {
    if (!isArray(input) && !isObject(input) && !isString(input)) {
        return input;
    }
    if (isObject(input)) {
        return Object.keys(input).map(function (value) { return input[value]; }).length;
    }
    return input.length;
}
function empty(input) {
    if (!isArray(input)) {
        return input;
    }
    return input.length === 0;
}
function every(input, predicate) {
    if (!isArray(input) || !predicate) {
        return input;
    }
    var result = true;
    var i = -1;
    while (++i < input.length && result) {
        result = predicate(input[i], i, input);
    }
    return result;
}
function takeUntil(input, predicate) {
    var i = -1;
    var result = [];
    while (++i < input.length && !predicate(input[i], i, input)) {
        result[i] = input[i];
    }
    return result;
}
function takeWhile(input, predicate) {
    return takeUntil(input, function (item, index, collection) { return !predicate(item, index, collection); });
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_angular_datatables_directive__ = __webpack_require__(1110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_angular_datatables_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_angular_datatables_module__ = __webpack_require__(1195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_angular_datatables_module__["a"]; });
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dragulaExpt = __webpack_require__(1204);
exports.dragula = dragulaExpt.default || dragulaExpt;


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var dragula_class_1 = __webpack_require__(1108);
var core_1 = __webpack_require__(0);
var DragulaService = (function () {
    function DragulaService() {
        this.cancel = new core_1.EventEmitter();
        this.cloned = new core_1.EventEmitter();
        this.drag = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this.out = new core_1.EventEmitter();
        this.over = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.shadow = new core_1.EventEmitter();
        this.dropModel = new core_1.EventEmitter();
        this.removeModel = new core_1.EventEmitter();
        this.events = [
            'cancel', 'cloned', 'drag', 'dragend', 'drop', 'out', 'over',
            'remove', 'shadow', 'dropModel', 'removeModel'
        ];
        this.bags = [];
    }
    DragulaService.prototype.add = function (name, drake) {
        var bag = this.find(name);
        if (bag) {
            throw new Error('Bag named: "' + name + '" already exists.');
        }
        bag = { name: name, drake: drake };
        this.bags.push(bag);
        if (drake.models) {
            this.handleModels(name, drake);
        }
        if (!bag.initEvents) {
            this.setupEvents(bag);
        }
        return bag;
    };
    DragulaService.prototype.find = function (name) {
        for (var _i = 0, _a = this.bags; _i < _a.length; _i++) {
            var bag = _a[_i];
            if (bag.name === name) {
                return bag;
            }
        }
    };
    DragulaService.prototype.destroy = function (name) {
        var bag = this.find(name);
        var i = this.bags.indexOf(bag);
        this.bags.splice(i, 1);
        bag.drake.destroy();
    };
    DragulaService.prototype.setOptions = function (name, options) {
        var bag = this.add(name, dragula_class_1.dragula(options));
        this.handleModels(name, bag.drake);
    };
    DragulaService.prototype.handleModels = function (name, drake) {
        var _this = this;
        var dragElm;
        var dragIndex;
        var dropIndex;
        var sourceModel;
        drake.on('remove', function (el, source) {
            if (!drake.models) {
                return;
            }
            sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel.splice(dragIndex, 1);
            // console.log('REMOVE');
            // console.log(sourceModel);
            _this.removeModel.emit([name, el, source]);
        });
        drake.on('drag', function (el, source) {
            dragElm = el;
            dragIndex = _this.domIndexOf(el, source);
        });
        drake.on('drop', function (dropElm, target, source) {
            if (!drake.models || !target) {
                return;
            }
            dropIndex = _this.domIndexOf(dropElm, target);
            sourceModel = drake.models[drake.containers.indexOf(source)];
            // console.log('DROP');
            // console.log(sourceModel);
            if (target === source) {
                sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
            }
            else {
                var notCopy = dragElm === dropElm;
                var targetModel = drake.models[drake.containers.indexOf(target)];
                var dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
                if (notCopy) {
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel.splice(dropIndex, 0, dropElmModel);
                target.removeChild(dropElm); // element must be removed for ngFor to apply correctly
            }
            _this.dropModel.emit([name, dropElm, target, source]);
        });
    };
    DragulaService.prototype.setupEvents = function (bag) {
        bag.initEvents = true;
        var that = this;
        var emitter = function (type) {
            function replicate() {
                var args = Array.prototype.slice.call(arguments);
                that[type].emit([bag.name].concat(args));
            }
            bag.drake.on(type, replicate);
        };
        this.events.forEach(emitter);
    };
    DragulaService.prototype.domIndexOf = function (child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    };
    return DragulaService;
}());
DragulaService = __decorate([
    core_1.Injectable()
], DragulaService);
exports.DragulaService = DragulaService;


/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDirective; });
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */

var DataTableDirective = (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    var dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(dt);
                });
            });
        });
    };
    return DataTableDirective;
}());

DataTableDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[datatable]'
            },] },
];
/** @nocollapse */
DataTableDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
DataTableDirective.propDecorators = {
    'dtOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dtTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPipe; });


var GroupByPipe = (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (input, prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        var arr = {};
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var value = input_1[_i];
            var field = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["c" /* getProperty */])(value, prop);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* isUndefined */])(arr[field])) {
                arr[field] = [];
            }
            arr[field].push(value);
        }
        return Object.keys(arr).map(function (key) { return ({ key: key, 'value': arr[key] }); });
    };
    return GroupByPipe;
}());

GroupByPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'groupBy'
            },] },
];
/** @nocollapse */
GroupByPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=group-by.pipe.js.map

/***/ }),

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_by_pipe__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max_pipe__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mean_pipe__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__min_pipe__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sum_pipe__ = __webpack_require__(1116);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgAggregatePipesModule; });






var NgAggregatePipesModule = (function () {
    function NgAggregatePipesModule() {
    }
    return NgAggregatePipesModule;
}());

NgAggregatePipesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__group_by_pipe__["a" /* GroupByPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__max_pipe__["a" /* MaxPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__mean_pipe__["a" /* MeanPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__min_pipe__["a" /* MinPipe */],
                    __WEBPACK_IMPORTED_MODULE_5__sum_pipe__["a" /* SumPipe */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__group_by_pipe__["a" /* GroupByPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__max_pipe__["a" /* MaxPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__mean_pipe__["a" /* MeanPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__min_pipe__["a" /* MinPipe */],
                    __WEBPACK_IMPORTED_MODULE_5__sum_pipe__["a" /* SumPipe */]
                ]
            },] },
];
/** @nocollapse */
NgAggregatePipesModule.ctorParameters = function () { return []; };





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxPipe; });


var MaxPipe = (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        if (input.length === 0) {
            return undefined;
        }
        var max = input[0];
        input.forEach(function (value) {
            if (max < value) {
                max = value;
            }
        });
        return max;
    };
    return MaxPipe;
}());

MaxPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'max'
            },] },
];
/** @nocollapse */
MaxPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=max.pipe.js.map

/***/ }),

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeanPipe; });


var MeanPipe = (function () {
    function MeanPipe() {
    }
    MeanPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        var count = input.length;
        if (count === 0) {
            return undefined;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["b" /* sum */])(input) / count;
    };
    return MeanPipe;
}());

MeanPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'mean'
            },] },
];
/** @nocollapse */
MeanPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=mean.pipe.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinPipe; });


var MinPipe = (function () {
    function MinPipe() {
    }
    MinPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        if (input.length === 0) {
            return undefined;
        }
        var min = input[0];
        input.forEach(function (value) {
            if (min > value) {
                min = value;
            }
        });
        return min;
    };
    return MinPipe;
}());

MinPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'min'
            },] },
];
/** @nocollapse */
MinPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=min.pipe.js.map

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumPipe; });


var SumPipe = (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (input) {
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) ? input : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["b" /* sum */])(input);
    };
    return SumPipe;
}());

SumPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'sum' },] },
];
/** @nocollapse */
SumPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=sum.pipe.js.map

/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChunkPipe; });


var ChunkPipe = (function () {
    function ChunkPipe() {
    }
    ChunkPipe.prototype.transform = function (input, size) {
        if (size === void 0) { size = 1; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        return [].concat.apply([], input.map(function (_elem, i) {
            return i % size ? [] : [input.slice(i, i + size)];
        }));
    };
    return ChunkPipe;
}());

ChunkPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'chunk'
            },] },
];
/** @nocollapse */
ChunkPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=chunk.pipe.js.map

/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountPipe; });


var CountPipe = (function () {
    function CountPipe() {
    }
    CountPipe.prototype.transform = function (input) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["C" /* count */])(input);
    };
    return CountPipe;
}());

CountPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'count'
            },] },
];
/** @nocollapse */
CountPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=count.pipe.js.map

/***/ }),

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeepPipe; });


var DeepPipe = (function () {
    function DeepPipe() {
    }
    DeepPipe.prototype.transform = function (value) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(value)) {
            return value;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["z" /* wrapDeep */])(value);
    };
    return DeepPipe;
}());

DeepPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'deep'
            },] },
];
/** @nocollapse */
DeepPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=deep.pipe.js.map

/***/ }),

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropPipe; });


var DropPipe = (function () {
    function DropPipe() {
    }
    DropPipe.prototype.transform = function (input, quantity) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        return input.slice(quantity || 1, input.lenth);
    };
    return DropPipe;
}());

DropPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'drop'
            },] },
];
/** @nocollapse */
DropPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=drop.pipe.js.map

/***/ }),

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyPipe; });


var EmptyPipe = (function () {
    function EmptyPipe() {
    }
    EmptyPipe.prototype.transform = function (input) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["D" /* empty */])(input);
    };
    return EmptyPipe;
}());

EmptyPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'empty'
            },] },
];
/** @nocollapse */
EmptyPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=empty.pipe.js.map

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EveryPipe; });


var EveryPipe = (function () {
    function EveryPipe() {
    }
    EveryPipe.prototype.transform = function (input, predicate) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["B" /* every */])(input, predicate);
    };
    return EveryPipe;
}());

EveryPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'every'
            },] },
];
/** @nocollapse */
EveryPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=every.pipe.js.map

/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstOrDefaultPipe; });


var FirstOrDefaultPipe = (function () {
    function FirstOrDefaultPipe() {
    }
    FirstOrDefaultPipe.find = function (input, predicate, defaultValue) {
        var found = false;
        var result;
        var i = -1;
        while (!found && ++i < input.length) {
            found = predicate(input[i], i, input);
        }
        if (found) {
            result = input[i];
        }
        if (typeof result === 'undefined' && typeof defaultValue !== 'undefined') {
            result = defaultValue;
        }
        return result;
    };
    FirstOrDefaultPipe.prototype.transform = function (input, predicate, defaultValue) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["m" /* isFunction */])(predicate)) {
            return FirstOrDefaultPipe.find(input, predicate, defaultValue);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(predicate)) {
            var _a = predicate, key_1 = _a[0], value_1 = _a[1];
            return FirstOrDefaultPipe.find(input, function (item) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["c" /* getProperty */])(item, key_1) === value_1; }, defaultValue);
        }
        else if (predicate) {
            return FirstOrDefaultPipe.find(input, function (item) { return item === predicate; }, defaultValue);
        }
        else {
            return input;
        }
    };
    return FirstOrDefaultPipe;
}());

FirstOrDefaultPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'firstOrDefault'
            },] },
];
/** @nocollapse */
FirstOrDefaultPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=first-or-default.pipe.js.map

/***/ }),

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlattenPipe; });


var FlattenPipe = (function () {
    function FlattenPipe() {
    }
    FlattenPipe.prototype.transform = function (input) {
        var isDeep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(input);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) && !isDeep) {
            return input;
        }
        if (isDeep) {
            var unwrapped = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["w" /* unwrapDeep */])(input);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(unwrapped)) {
                return unwrapped;
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["y" /* flatten */])(unwrapped, 0);
        }
        return [].concat.apply([], input);
    };
    return FlattenPipe;
}());

FlattenPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'flatten' },] },
];
/** @nocollapse */
FlattenPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=flatten.pipe.js.map

/***/ }),

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadPipe; });


var HeadPipe = (function () {
    function HeadPipe() {
    }
    HeadPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        // Will return undefined if length is 0
        return input[0];
    };
    return HeadPipe;
}());

HeadPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'head'
            },] },
];
/** @nocollapse */
HeadPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=head.pipe.js.map

/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_pipe__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__head_pipe__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initial_pipe__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__last_pipe__ = __webpack_require__(1130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__join_pipe__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tail_pipe__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__uniq_pipe__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__without_pipe__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_pipe__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__where_pipe__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__first_or_default_pipe__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__range_pipe__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pluck_pipe__ = __webpack_require__(1133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reverse_pipe__ = __webpack_require__(1135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__order_by_pipe__ = __webpack_require__(1132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__count_pipe__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__some_pipe__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__every_pipe__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shuffle_pipe__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__take_pipe__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__drop_pipe__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__deep_pipe__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__chunk_pipe__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__flatten_pipe__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__intersection_pipe__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__union_pipe__ = __webpack_require__(1142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__take_while_pipe__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__take_until_pipe__ = __webpack_require__(1139);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgArrayPipesModule; });

























































var NgArrayPipesModule = (function () {
    function NgArrayPipesModule() {
    }
    return NgArrayPipesModule;
}());

NgArrayPipesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__empty_pipe__["a" /* EmptyPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__head_pipe__["a" /* HeadPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__initial_pipe__["a" /* InitialPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__last_pipe__["a" /* LastPipe */],
                    __WEBPACK_IMPORTED_MODULE_5__join_pipe__["a" /* JoinPipe */],
                    __WEBPACK_IMPORTED_MODULE_6__tail_pipe__["a" /* TailPipe */],
                    __WEBPACK_IMPORTED_MODULE_7__uniq_pipe__["a" /* UniqPipe */],
                    __WEBPACK_IMPORTED_MODULE_8__without_pipe__["a" /* WithoutPipe */],
                    __WEBPACK_IMPORTED_MODULE_9__map_pipe__["a" /* MapPipe */],
                    __WEBPACK_IMPORTED_MODULE_10__where_pipe__["a" /* WherePipe */],
                    __WEBPACK_IMPORTED_MODULE_12__range_pipe__["a" /* RangePipe */],
                    __WEBPACK_IMPORTED_MODULE_13__pluck_pipe__["a" /* PluckPipe */],
                    __WEBPACK_IMPORTED_MODULE_14__reverse_pipe__["a" /* ReversePipe */],
                    __WEBPACK_IMPORTED_MODULE_15__order_by_pipe__["a" /* OrderByPipe */],
                    __WEBPACK_IMPORTED_MODULE_16__count_pipe__["a" /* CountPipe */],
                    __WEBPACK_IMPORTED_MODULE_17__some_pipe__["a" /* SomePipe */],
                    __WEBPACK_IMPORTED_MODULE_18__every_pipe__["a" /* EveryPipe */],
                    __WEBPACK_IMPORTED_MODULE_19__shuffle_pipe__["a" /* ShufflePipe */],
                    __WEBPACK_IMPORTED_MODULE_20__take_pipe__["a" /* TakePipe */],
                    __WEBPACK_IMPORTED_MODULE_21__drop_pipe__["a" /* DropPipe */],
                    __WEBPACK_IMPORTED_MODULE_22__deep_pipe__["a" /* DeepPipe */],
                    __WEBPACK_IMPORTED_MODULE_23__chunk_pipe__["a" /* ChunkPipe */],
                    __WEBPACK_IMPORTED_MODULE_24__flatten_pipe__["a" /* FlattenPipe */],
                    __WEBPACK_IMPORTED_MODULE_11__first_or_default_pipe__["a" /* FirstOrDefaultPipe */],
                    __WEBPACK_IMPORTED_MODULE_25__intersection_pipe__["a" /* IntersectionPipe */],
                    __WEBPACK_IMPORTED_MODULE_26__union_pipe__["a" /* UnionPipe */],
                    __WEBPACK_IMPORTED_MODULE_27__take_while_pipe__["a" /* TakeWhilePipe */],
                    __WEBPACK_IMPORTED_MODULE_28__take_until_pipe__["a" /* TakeUntilPipe */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__empty_pipe__["a" /* EmptyPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__head_pipe__["a" /* HeadPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__initial_pipe__["a" /* InitialPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__last_pipe__["a" /* LastPipe */],
                    __WEBPACK_IMPORTED_MODULE_5__join_pipe__["a" /* JoinPipe */],
                    __WEBPACK_IMPORTED_MODULE_6__tail_pipe__["a" /* TailPipe */],
                    __WEBPACK_IMPORTED_MODULE_7__uniq_pipe__["a" /* UniqPipe */],
                    __WEBPACK_IMPORTED_MODULE_8__without_pipe__["a" /* WithoutPipe */],
                    __WEBPACK_IMPORTED_MODULE_9__map_pipe__["a" /* MapPipe */],
                    __WEBPACK_IMPORTED_MODULE_10__where_pipe__["a" /* WherePipe */],
                    __WEBPACK_IMPORTED_MODULE_12__range_pipe__["a" /* RangePipe */],
                    __WEBPACK_IMPORTED_MODULE_13__pluck_pipe__["a" /* PluckPipe */],
                    __WEBPACK_IMPORTED_MODULE_14__reverse_pipe__["a" /* ReversePipe */],
                    __WEBPACK_IMPORTED_MODULE_15__order_by_pipe__["a" /* OrderByPipe */],
                    __WEBPACK_IMPORTED_MODULE_16__count_pipe__["a" /* CountPipe */],
                    __WEBPACK_IMPORTED_MODULE_17__some_pipe__["a" /* SomePipe */],
                    __WEBPACK_IMPORTED_MODULE_18__every_pipe__["a" /* EveryPipe */],
                    __WEBPACK_IMPORTED_MODULE_19__shuffle_pipe__["a" /* ShufflePipe */],
                    __WEBPACK_IMPORTED_MODULE_20__take_pipe__["a" /* TakePipe */],
                    __WEBPACK_IMPORTED_MODULE_21__drop_pipe__["a" /* DropPipe */],
                    __WEBPACK_IMPORTED_MODULE_22__deep_pipe__["a" /* DeepPipe */],
                    __WEBPACK_IMPORTED_MODULE_23__chunk_pipe__["a" /* ChunkPipe */],
                    __WEBPACK_IMPORTED_MODULE_24__flatten_pipe__["a" /* FlattenPipe */],
                    __WEBPACK_IMPORTED_MODULE_11__first_or_default_pipe__["a" /* FirstOrDefaultPipe */],
                    __WEBPACK_IMPORTED_MODULE_25__intersection_pipe__["a" /* IntersectionPipe */],
                    __WEBPACK_IMPORTED_MODULE_26__union_pipe__["a" /* UnionPipe */],
                    __WEBPACK_IMPORTED_MODULE_27__take_while_pipe__["a" /* TakeWhilePipe */],
                    __WEBPACK_IMPORTED_MODULE_28__take_until_pipe__["a" /* TakeUntilPipe */]
                ]
            },] },
];
/** @nocollapse */
NgArrayPipesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPipe; });


var InitialPipe = (function () {
    function InitialPipe() {
    }
    InitialPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        return input.slice(0, input.length - 1);
    };
    return InitialPipe;
}());

InitialPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'initial'
            },] },
];
/** @nocollapse */
InitialPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=initial.pipe.js.map

/***/ }),

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntersectionPipe; });


var IntersectionPipe = (function () {
    function IntersectionPipe() {
    }
    IntersectionPipe.prototype.transform = function (a, b) {
        if ((!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(a) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(a)) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(b)) {
            return [];
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(a)) {
            var unwrapped = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["w" /* unwrapDeep */])(a);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(unwrapped)) {
                return [];
            }
            return unwrapped.reduce(function (intersection, value) { return intersection.concat((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["x" /* deepIndexOf */])(b, value) !== -1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["x" /* deepIndexOf */])(intersection, value) === -1) ? value : []); }, []);
        }
        return a.reduce(function (intersection, value) { return intersection.concat((b.indexOf(value) !== -1 && intersection.indexOf(value) === -1) ? value : []); }, []);
    };
    return IntersectionPipe;
}());

IntersectionPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'intersection'
            },] },
];
/** @nocollapse */
IntersectionPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=intersection.pipe.js.map

/***/ }),

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPipe; });


var JoinPipe = (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (input, character) {
        if (character === void 0) { character = ''; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        return input.join(character);
    };
    return JoinPipe;
}());

JoinPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'join'
            },] },
];
/** @nocollapse */
JoinPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=join.pipe.js.map

/***/ }),

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastPipe; });


var LastPipe = (function () {
    function LastPipe() {
    }
    LastPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        // Returns undefined if empty
        return input[input.length - 1];
    };
    return LastPipe;
}());

LastPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'last'
            },] },
];
/** @nocollapse */
LastPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=last.pipe.js.map

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPipe; });


var MapPipe = (function () {
    function MapPipe() {
    }
    MapPipe.prototype.transform = function (input, fn) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) || !fn) {
            return input;
        }
        return input.map(fn);
    };
    return MapPipe;
}());

MapPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'map'
            },] },
];
/** @nocollapse */
MapPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=map.pipe.js.map

/***/ }),

/***/ 1132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });


var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe._orderBy = function (a, b) {
        if (a instanceof Date && b instanceof Date) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }
        var floatA = parseFloat(a);
        var floatB = parseFloat(b);
        if (typeof a === 'string' && typeof b === 'string' && (isNaN(floatA) || isNaN(floatB))) {
            var lowerA = a.toLowerCase();
            var lowerB = b.toLowerCase();
            return (lowerA < lowerB) ? -1 : (lowerA > lowerB) ? 1 : 0;
        }
        return (floatA < floatB) ? -1 : (floatA > floatB) ? 1 : 0;
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        var configIsArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(config);
        // If config === 'param' OR ['param'] 
        if (!configIsArray || (configIsArray && config.length === 1)) {
            var propertyToCheck = configIsArray ? config[0] : config;
            var first = propertyToCheck.substr(0, 1);
            var desc_1 = (first === '-'); // First character is '-'
            // Basic array (if only + or - is present)
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return input.slice().sort(function (a, b) {
                    var comparator = OrderByPipe._orderBy(a, b);
                    return desc_1 ? -comparator : comparator;
                });
            }
            else {
                // If contains + or -, substring the property
                var property_1 = (first === '+' || desc_1) ? propertyToCheck.substr(1) : propertyToCheck;
                return input.slice().sort(function (a, b) {
                    var comparator = OrderByPipe._orderBy(a[property_1], b[property_1]);
                    return desc_1 ? -comparator : comparator;
                });
            }
        }
        else {
            return input.slice().sort(function (a, b) {
                for (var i = 0; i < config.length; ++i) {
                    var first = config[i].substr(0, 1);
                    var desc = (first === '-');
                    var property = (first === '+' || desc) ? config[i].substr(1) : config[i];
                    var comparator = OrderByPipe._orderBy(a[property], b[property]);
                    var comparison = desc ? -comparator : comparator;
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0;
            });
        }
    };
    return OrderByPipe;
}());

OrderByPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'orderBy'
            },] },
];
/** @nocollapse */
OrderByPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=order-by.pipe.js.map

/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluckPipe; });


var PluckPipe = (function () {
    function PluckPipe() {
    }
    PluckPipe.prototype.transform = function (input, key) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) || !key) {
            return input;
        }
        return input.map(function (value) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["c" /* getProperty */])(value, key);
        });
    };
    return PluckPipe;
}());

PluckPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'pluck'
            },] },
];
/** @nocollapse */
PluckPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=pluck.pipe.js.map

/***/ }),

/***/ 1134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePipe; });

var RangePipe = (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (_input, size, start, step) {
        if (size === void 0) { size = 0; }
        if (start === void 0) { start = 1; }
        if (step === void 0) { step = 1; }
        var range = [];
        for (var length_1 = 0; length_1 < size; ++length_1) {
            range.push(start);
            start += step;
        }
        return range;
    };
    return RangePipe;
}());

RangePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'range'
            },] },
];
/** @nocollapse */
RangePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=range.pipe.js.map

/***/ }),

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });


var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        return input.slice().reverse();
    };
    return ReversePipe;
}());

ReversePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'reverse'
            },] },
];
/** @nocollapse */
ReversePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=reverse.pipe.js.map

/***/ }),

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShufflePipe; });


var ShufflePipe = (function () {
    function ShufflePipe() {
    }
    ShufflePipe.prototype.transform = function (input) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["A" /* shuffle */])(input);
    };
    return ShufflePipe;
}());

ShufflePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'shuffle'
            },] },
];
/** @nocollapse */
ShufflePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=shuffle.pipe.js.map

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SomePipe; });


var SomePipe = (function () {
    function SomePipe() {
    }
    SomePipe.prototype.transform = function (input, predicate) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) || !predicate) {
            return input;
        }
        var result = false;
        var i = -1;
        while (++i < input.length && !result) {
            result = predicate(input[i], i, input);
        }
        return result;
    };
    return SomePipe;
}());

SomePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'some'
            },] },
];
/** @nocollapse */
SomePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=some.pipe.js.map

/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TailPipe; });


var TailPipe = (function () {
    function TailPipe() {
    }
    TailPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        return input.slice(1, input.length);
    };
    return TailPipe;
}());

TailPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'tail'
            },] },
];
/** @nocollapse */
TailPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=tail.pipe.js.map

/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeUntilPipe; });


var TakeUntilPipe = (function () {
    function TakeUntilPipe() {
    }
    TakeUntilPipe.prototype.transform = function (input, predicate) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["f" /* isNil */])(predicate)) {
            return input;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["t" /* takeUntil */])(input, predicate);
    };
    return TakeUntilPipe;
}());

TakeUntilPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'takeUntil'
            },] },
];
/** @nocollapse */
TakeUntilPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=take-until.pipe.js.map

/***/ }),

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeWhilePipe; });


var TakeWhilePipe = (function () {
    function TakeWhilePipe() {
    }
    TakeWhilePipe.prototype.transform = function (input, predicate) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["f" /* isNil */])(predicate)) {
            return input;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["u" /* takeWhile */])(input, predicate);
    };
    return TakeWhilePipe;
}());

TakeWhilePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'takeWhile'
            },] },
];
/** @nocollapse */
TakeWhilePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=take-while.pipe.js.map

/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakePipe; });


var TakePipe = (function () {
    function TakePipe() {
    }
    TakePipe.prototype.transform = function (input, quantity) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        return input.slice(0, quantity || 1);
    };
    return TakePipe;
}());

TakePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'take'
            },] },
];
/** @nocollapse */
TakePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=take.pipe.js.map

/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnionPipe; });


var UnionPipe = (function () {
    function UnionPipe() {
    }
    UnionPipe.prototype.transform = function (a, b) {
        if ((!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(a) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(a)) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(b)) {
            return [];
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(a)) {
            var unwrapped = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["w" /* unwrapDeep */])(a);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(unwrapped)) {
                return [];
            }
            return []
                .concat(unwrapped)
                .concat(b)
                .filter(function (value, index, input) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["x" /* deepIndexOf */])(input, value) === index; });
        }
        return [].concat(a).concat(b).filter(function (value, index, input) { return input.indexOf(value) === index; });
    };
    return UnionPipe;
}());

UnionPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'union'
            },] },
];
/** @nocollapse */
UnionPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=union.pipe.js.map

/***/ }),

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniqPipe; });


var UniqPipe = (function () {
    function UniqPipe() {
    }
    UniqPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(input)) {
            return input;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(input)) {
            var unwrappedInput_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["w" /* unwrapDeep */])(input);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(unwrappedInput_1)) {
                return unwrappedInput_1;
            }
            return unwrappedInput_1.filter(function (value, index) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["x" /* deepIndexOf */])(unwrappedInput_1, value) === index;
            });
        }
        return input.filter(function (value, index) { return input.indexOf(value) === index; });
    };
    return UniqPipe;
}());

UniqPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'uniq'
            },] },
];
/** @nocollapse */
UniqPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=uniq.pipe.js.map

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WherePipe; });


var WherePipe = (function () {
    function WherePipe() {
    }
    /**
    * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
    */
    WherePipe.prototype.transform = function (input, fn) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["m" /* isFunction */])(fn)) {
            return input.filter(fn);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(fn)) {
            var key_1 = fn[0], value_1 = fn[1];
            return input.filter(function (item) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["c" /* getProperty */])(item, key_1) === value_1; });
        }
        else if (fn) {
            return input.filter(function (item) { return item === fn; });
        }
        else {
            return input;
        }
    };
    return WherePipe;
}());

WherePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'where'
            },] },
];
/** @nocollapse */
WherePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=where.pipe.js.map

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithoutPipe; });


var WithoutPipe = (function () {
    function WithoutPipe() {
    }
    WithoutPipe.prototype.transform = function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(input)) {
            return input;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["v" /* isDeepObject */])(input)) {
            var unwrappedInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["w" /* unwrapDeep */])(input);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(unwrappedInput)) {
                return unwrappedInput;
            }
            return unwrappedInput.filter(function (value) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["x" /* deepIndexOf */])(args, value) === -1;
            });
        }
        return input.filter(function (value) { return args.indexOf(value) === -1; });
    };
    return WithoutPipe;
}());

WithoutPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'without'
            },] },
];
/** @nocollapse */
WithoutPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=without.pipe.js.map

/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsGreaterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IsGreaterOrEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IsLessPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IsLessOrEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return IsEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return IsNotEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IsIdenticalPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IsNotIdenticalPipe; });

var IsGreaterPipe = (function () {
    function IsGreaterPipe() {
    }
    IsGreaterPipe.prototype.transform = function (first, second) {
        return first > second;
    };
    return IsGreaterPipe;
}());

IsGreaterPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'greater'
            },] },
];
/** @nocollapse */
IsGreaterPipe.ctorParameters = function () { return []; };
var IsGreaterOrEqualPipe = (function () {
    function IsGreaterOrEqualPipe() {
    }
    IsGreaterOrEqualPipe.prototype.transform = function (first, second) {
        return first >= second;
    };
    return IsGreaterOrEqualPipe;
}());

IsGreaterOrEqualPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'greaterOrEqual'
            },] },
];
/** @nocollapse */
IsGreaterOrEqualPipe.ctorParameters = function () { return []; };
var IsLessPipe = (function () {
    function IsLessPipe() {
    }
    IsLessPipe.prototype.transform = function (first, second) {
        return first < second;
    };
    return IsLessPipe;
}());

IsLessPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'less'
            },] },
];
/** @nocollapse */
IsLessPipe.ctorParameters = function () { return []; };
var IsLessOrEqualPipe = (function () {
    function IsLessOrEqualPipe() {
    }
    IsLessOrEqualPipe.prototype.transform = function (first, second) {
        return first <= second;
    };
    return IsLessOrEqualPipe;
}());

IsLessOrEqualPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'lessOrEqual'
            },] },
];
/** @nocollapse */
IsLessOrEqualPipe.ctorParameters = function () { return []; };
var IsEqualPipe = (function () {
    function IsEqualPipe() {
    }
    IsEqualPipe.prototype.transform = function (first, second) {
        return first == second;
    };
    return IsEqualPipe;
}());

IsEqualPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'equal'
            },] },
];
/** @nocollapse */
IsEqualPipe.ctorParameters = function () { return []; };
var IsNotEqualPipe = (function () {
    function IsNotEqualPipe() {
    }
    IsNotEqualPipe.prototype.transform = function (first, second) {
        return first != second;
    };
    return IsNotEqualPipe;
}());

IsNotEqualPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'notEqual'
            },] },
];
/** @nocollapse */
IsNotEqualPipe.ctorParameters = function () { return []; };
var IsIdenticalPipe = (function () {
    function IsIdenticalPipe() {
    }
    IsIdenticalPipe.prototype.transform = function (first, second) {
        return first === second;
    };
    return IsIdenticalPipe;
}());

IsIdenticalPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'identical'
            },] },
];
/** @nocollapse */
IsIdenticalPipe.ctorParameters = function () { return []; };
var IsNotIdenticalPipe = (function () {
    function IsNotIdenticalPipe() {
    }
    IsNotIdenticalPipe.prototype.transform = function (first, second) {
        return first !== second;
    };
    return IsNotIdenticalPipe;
}());

IsNotIdenticalPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'notIdentical'
            },] },
];
/** @nocollapse */
IsNotIdenticalPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=conditions.pipe.js.map

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_pipe__ = __webpack_require__(1148);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgBooleanPipesModule; });



var NgBooleanPipesModule = (function () {
    function NgBooleanPipesModule() {
    }
    return NgBooleanPipesModule;
}());

NgBooleanPipesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["a" /* IsGreaterPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["b" /* IsGreaterOrEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["c" /* IsLessPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["d" /* IsLessOrEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["e" /* IsEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["f" /* IsNotEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["g" /* IsIdenticalPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["h" /* IsNotIdenticalPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["a" /* IsNilPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["b" /* IsNullPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["c" /* IsUndefinedPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["d" /* IsFunctionPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["e" /* IsNumberPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["f" /* IsStringPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["g" /* IsArrayPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["h" /* IsObjectPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["i" /* IsDefinedPipe */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["a" /* IsGreaterPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["b" /* IsGreaterOrEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["c" /* IsLessPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["d" /* IsLessOrEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["e" /* IsEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["f" /* IsNotEqualPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["g" /* IsIdenticalPipe */],
                    __WEBPACK_IMPORTED_MODULE_1__conditions_pipe__["h" /* IsNotIdenticalPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["a" /* IsNilPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["b" /* IsNullPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["c" /* IsUndefinedPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["d" /* IsFunctionPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["e" /* IsNumberPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["f" /* IsStringPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["g" /* IsArrayPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["h" /* IsObjectPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__types_pipe__["i" /* IsDefinedPipe */]
                ]
            },] },
];
/** @nocollapse */
NgBooleanPipesModule.ctorParameters = function () { return []; };


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsNilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return IsDefinedPipe; });


var IsNullPipe = (function () {
    function IsNullPipe() {
    }
    IsNullPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["h" /* isNull */])(value);
    };
    return IsNullPipe;
}());

IsNullPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isNull'
            },] },
];
/** @nocollapse */
IsNullPipe.ctorParameters = function () { return []; };
var IsUndefinedPipe = (function () {
    function IsUndefinedPipe() {
    }
    IsUndefinedPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* isUndefined */])(value);
    };
    return IsUndefinedPipe;
}());

IsUndefinedPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isUndefined'
            },] },
];
/** @nocollapse */
IsUndefinedPipe.ctorParameters = function () { return []; };
var IsNilPipe = (function () {
    function IsNilPipe() {
    }
    IsNilPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["f" /* isNil */])(value);
    };
    return IsNilPipe;
}());

IsNilPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isNil'
            },] },
];
/** @nocollapse */
IsNilPipe.ctorParameters = function () { return []; };
var IsFunctionPipe = (function () {
    function IsFunctionPipe() {
    }
    IsFunctionPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["m" /* isFunction */])(value);
    };
    return IsFunctionPipe;
}());

IsFunctionPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isFunction'
            },] },
];
/** @nocollapse */
IsFunctionPipe.ctorParameters = function () { return []; };
var IsNumberPipe = (function () {
    function IsNumberPipe() {
    }
    IsNumberPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["n" /* isNumber */])(value);
    };
    return IsNumberPipe;
}());

IsNumberPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isNumber'
            },] },
];
/** @nocollapse */
IsNumberPipe.ctorParameters = function () { return []; };
var IsStringPipe = (function () {
    function IsStringPipe() {
    }
    IsStringPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(value);
    };
    return IsStringPipe;
}());

IsStringPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isString'
            },] },
];
/** @nocollapse */
IsStringPipe.ctorParameters = function () { return []; };
var IsArrayPipe = (function () {
    function IsArrayPipe() {
    }
    IsArrayPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(value);
    };
    return IsArrayPipe;
}());

IsArrayPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isArray'
            },] },
];
/** @nocollapse */
IsArrayPipe.ctorParameters = function () { return []; };
var IsObjectPipe = (function () {
    function IsObjectPipe() {
    }
    IsObjectPipe.prototype.transform = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["e" /* isObject */])(value);
    };
    return IsObjectPipe;
}());

IsObjectPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isObject'
            },] },
];
/** @nocollapse */
IsObjectPipe.ctorParameters = function () { return []; };
var IsDefinedPipe = (function () {
    function IsDefinedPipe() {
    }
    IsDefinedPipe.prototype.transform = function (value) {
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* isUndefined */])(value);
    };
    return IsDefinedPipe;
}());

IsDefinedPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'isDefined'
            },] },
];
/** @nocollapse */
IsDefinedPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=types.pipe.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BytesPipe; });


var BytesPipe = (function () {
    function BytesPipe() {
    }
    BytesPipe.prototype.transform = function (input, decimal, from) {
        if (decimal === void 0) { decimal = 0; }
        if (from === void 0) { from = 'B'; }
        if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(input) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(decimal) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["q" /* isInteger */])(decimal) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["r" /* isPositive */])(decimal))) {
            return input;
        }
        var bytes = input;
        var unit = from;
        while (unit != 'B') {
            bytes *= 1024;
            unit = BytesPipe.formats[unit].prev;
        }
        for (var key in BytesPipe.formats) {
            var format = BytesPipe.formats[key];
            if (bytes < format.max) {
                var prev = BytesPipe.formats[format.prev];
                var result = prev ?
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["s" /* toDecimal */])(bytes / prev.max, decimal) :
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["s" /* toDecimal */])(bytes, decimal);
                return result + " " + key;
            }
        }
    };
    return BytesPipe;
}());

BytesPipe.formats = {
    'B': { max: 1024 },
    'KB': { max: Math.pow(1024, 2), prev: 'B' },
    'MB': { max: Math.pow(1024, 3), prev: 'KB' },
    'GB': { max: Math.pow(1024, 4), prev: 'MB' },
    'TB': { max: Number.MAX_SAFE_INTEGER, prev: 'GB' }
};
BytesPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'bytes'
            },] },
];
/** @nocollapse */
BytesPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=bytes.pipe.js.map

/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeilPipe; });


var CeilPipe = (function () {
    function CeilPipe() {
    }
    CeilPipe.prototype.transform = function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(precision)) {
            precision = parseInt(precision);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["p" /* createRound */])('ceil')(value, precision);
    };
    return CeilPipe;
}());

CeilPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'ceil'
            },] },
];
/** @nocollapse */
CeilPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=ceil.pipe.js.map

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DegreesPipe; });


var DegreesPipe = (function () {
    function DegreesPipe() {
    }
    DegreesPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(input)) {
            return 'NaN';
        }
        return (input * 180) / Math.PI;
    };
    return DegreesPipe;
}());

DegreesPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'degrees'
            },] },
];
/** @nocollapse */
DegreesPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=degrees.pipe.js.map

/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorPipe; });


var FloorPipe = (function () {
    function FloorPipe() {
    }
    FloorPipe.prototype.transform = function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(precision)) {
            precision = parseInt(precision);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["p" /* createRound */])('floor')(value, precision);
    };
    return FloorPipe;
}());

FloorPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'floor'
            },] },
];
/** @nocollapse */
FloorPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=floor.pipe.js.map

/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bytes_pipe__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ceil_pipe__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__floor_pipe__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__round_pipe__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__degrees_pipe__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radians_pipe__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__random_pipe__ = __webpack_require__(1156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sqrt_pipe__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pow_pipe__ = __webpack_require__(1154);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgMathPipesModule; });



















var NgMathPipesModule = (function () {
    function NgMathPipesModule() {
    }
    return NgMathPipesModule;
}());

NgMathPipesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__bytes_pipe__["a" /* BytesPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__ceil_pipe__["a" /* CeilPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__floor_pipe__["a" /* FloorPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__round_pipe__["a" /* RoundPipe */],
                    __WEBPACK_IMPORTED_MODULE_5__degrees_pipe__["a" /* DegreesPipe */],
                    __WEBPACK_IMPORTED_MODULE_6__radians_pipe__["a" /* RadiansPipe */],
                    __WEBPACK_IMPORTED_MODULE_7__random_pipe__["a" /* RandomPipe */],
                    __WEBPACK_IMPORTED_MODULE_8__sqrt_pipe__["a" /* SqrtPipe */],
                    __WEBPACK_IMPORTED_MODULE_9__pow_pipe__["a" /* PowPipe */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__bytes_pipe__["a" /* BytesPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__ceil_pipe__["a" /* CeilPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__floor_pipe__["a" /* FloorPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__round_pipe__["a" /* RoundPipe */],
                    __WEBPACK_IMPORTED_MODULE_5__degrees_pipe__["a" /* DegreesPipe */],
                    __WEBPACK_IMPORTED_MODULE_6__radians_pipe__["a" /* RadiansPipe */],
                    __WEBPACK_IMPORTED_MODULE_7__random_pipe__["a" /* RandomPipe */],
                    __WEBPACK_IMPORTED_MODULE_8__sqrt_pipe__["a" /* SqrtPipe */],
                    __WEBPACK_IMPORTED_MODULE_9__pow_pipe__["a" /* PowPipe */]
                ]
            },] },
];
/** @nocollapse */
NgMathPipesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowPipe; });


var PowPipe = (function () {
    function PowPipe() {
    }
    PowPipe.prototype.transform = function (input, power) {
        if (power === void 0) { power = 2; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(input)) {
            return 'NaN';
        }
        return Math.pow(input, power);
    };
    return PowPipe;
}());

PowPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'pow'
            },] },
];
/** @nocollapse */
PowPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=pow.pipe.js.map

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadiansPipe; });


var RadiansPipe = (function () {
    function RadiansPipe() {
    }
    RadiansPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(input)) {
            return 'NaN';
        }
        return (input * Math.PI) / 180;
    };
    return RadiansPipe;
}());

RadiansPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'radians'
            },] },
];
/** @nocollapse */
RadiansPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=radians.pipe.js.map

/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomPipe; });


var RandomPipe = (function () {
    function RandomPipe() {
    }
    RandomPipe.prototype.transform = function (input, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(min) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(max)) {
            return input;
        }
        if (min > max) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    };
    return RandomPipe;
}());

RandomPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'random'
            },] },
];
/** @nocollapse */
RandomPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=random.pipe.js.map

/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });


var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(precision)) {
            precision = parseInt(precision);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["p" /* createRound */])('round')(value, precision);
    };
    return RoundPipe;
}());

RoundPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'round'
            },] },
];
/** @nocollapse */
RoundPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqrtPipe; });


var SqrtPipe = (function () {
    function SqrtPipe() {
    }
    SqrtPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["o" /* isNumberFinite */])(input)) {
            return 'NaN';
        }
        return Math.sqrt(input);
    };
    return SqrtPipe;
}());

SqrtPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'sqrt'
            },] },
];
/** @nocollapse */
SqrtPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=sqrt.pipe.js.map

/***/ }),

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultsPipe; });


var DefaultsPipe = (function () {
    function DefaultsPipe() {
    }
    DefaultsPipe.prototype.transform = function (input, defaults) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["e" /* isObject */])(defaults)) {
            return input;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["f" /* isNil */])(input)) {
            return defaults;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isArray */])(input)) {
            return input.map(function (item) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["e" /* isObject */])(item)) {
                    return Object.assign({}, defaults, item);
                }
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["f" /* isNil */])(item)) {
                    return defaults;
                }
                return item;
            });
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["e" /* isObject */])(input)) {
            return Object.assign({}, defaults, input);
        }
        return input;
    };
    return DefaultsPipe;
}());

DefaultsPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'defaults' },] },
];
/** @nocollapse */
DefaultsPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=defaults.pipe.js.map

/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_pipe__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__to_array_pipe__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaults_pipe__ = __webpack_require__(1159);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgObjectPipesModule; });







var NgObjectPipesModule = (function () {
    function NgObjectPipesModule() {
    }
    return NgObjectPipesModule;
}());

NgObjectPipesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__to_array_pipe__["a" /* ToArrayPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__defaults_pipe__["a" /* DefaultsPipe */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__to_array_pipe__["a" /* ToArrayPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__defaults_pipe__["a" /* DefaultsPipe */]
                ]
            },] },
];
/** @nocollapse */
NgObjectPipesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });


var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["e" /* isObject */])(input)) {
            return input;
        }
        return Object.keys(input);
    };
    return KeysPipe;
}());

KeysPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'keys' },] },
];
/** @nocollapse */
KeysPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToArrayPipe; });


var ToArrayPipe = (function () {
    function ToArrayPipe() {
    }
    ToArrayPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["e" /* isObject */])(input)) {
            return input;
        }
        return Object.keys(input).map(function (value) { return input[value]; });
    };
    return ToArrayPipe;
}());

ToArrayPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'toArray' },] },
];
/** @nocollapse */
ToArrayPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=to-array.pipe.js.map

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });


var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input, all) {
        if (all === void 0) { all = false; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        if (!all) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["i" /* upperFirst */])(input.toLowerCase());
        }
        else {
            return input.toLowerCase()
                .split(' ')
                .map(function (value) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["i" /* upperFirst */])(value); })
                .join(' ');
        }
    };
    return CapitalizePipe;
}());

CapitalizePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'capitalize'
            },] },
];
/** @nocollapse */
CapitalizePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecodeURIComponentPipe; });


var DecodeURIComponentPipe = (function () {
    function DecodeURIComponentPipe() {
    }
    DecodeURIComponentPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return decodeURIComponent(input);
    };
    return DecodeURIComponentPipe;
}());

DecodeURIComponentPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'decodeURIComponent'
            },] },
];
/** @nocollapse */
DecodeURIComponentPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=decode-uri-component.pipe.js.map

/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecodeURIPipe; });


var DecodeURIPipe = (function () {
    function DecodeURIPipe() {
    }
    DecodeURIPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return decodeURI(input);
    };
    return DecodeURIPipe;
}());

DecodeURIPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'decodeURI'
            },] },
];
/** @nocollapse */
DecodeURIPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=decode-uri.pipe.js.map

/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncodeURIComponentPipe; });


var EncodeURIComponentPipe = (function () {
    function EncodeURIComponentPipe() {
    }
    EncodeURIComponentPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return encodeURIComponent(input);
    };
    return EncodeURIComponentPipe;
}());

EncodeURIComponentPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'encodeURIComponent'
            },] },
];
/** @nocollapse */
EncodeURIComponentPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=encode-uri-component.pipe.js.map

/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncodeURIPipe; });


var EncodeURIPipe = (function () {
    function EncodeURIPipe() {
    }
    EncodeURIPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return encodeURI(input);
    };
    return EncodeURIPipe;
}());

EncodeURIPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'encodeURI'
            },] },
];
/** @nocollapse */
EncodeURIPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=encode-uri.pipe.js.map

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_pad_pipe__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_pipe__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pad_pipe__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__replace_pipe__ = __webpack_require__(1175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__right_pad_pipe__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__split_pipe__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_pipe__ = __webpack_require__(1182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trim_pipe__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newlines_pipe__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__capitalize_pipe__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upperfirst_pipe__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__template_pipe__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__encode_uri_pipe__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__encode_uri_component_pipe__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__decode_uri_pipe__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__decode_uri_component_pipe__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__truncate_pipe__ = __webpack_require__(1184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__repeat_pipe__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__slugify_pipe__ = __webpack_require__(1178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__strip_tags_pipe__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__latinize_pipe__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__wrap_pipe__ = __webpack_require__(1187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__with_pipe__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reverse_str_pipe__ = __webpack_require__(1176);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgStringPipesModule; });

















































var NgStringPipesModule = (function () {
    function NgStringPipesModule() {
    }
    return NgStringPipesModule;
}());

NgStringPipesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__left_pad_pipe__["a" /* LeftPadPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__match_pipe__["a" /* MatchPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__pad_pipe__["a" /* PadPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__replace_pipe__["a" /* ReplacePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__right_pad_pipe__["a" /* RightPadPipe */],
                    __WEBPACK_IMPORTED_MODULE_6__split_pipe__["a" /* SplitPipe */],
                    __WEBPACK_IMPORTED_MODULE_7__test_pipe__["a" /* TestPipe */],
                    __WEBPACK_IMPORTED_MODULE_8__trim_pipe__["a" /* TrimPipe */],
                    __WEBPACK_IMPORTED_MODULE_9__newlines_pipe__["a" /* NewlinesPipe */],
                    __WEBPACK_IMPORTED_MODULE_10__capitalize_pipe__["a" /* CapitalizePipe */],
                    __WEBPACK_IMPORTED_MODULE_11__upperfirst_pipe__["a" /* UpperFirstPipe */],
                    __WEBPACK_IMPORTED_MODULE_12__template_pipe__["a" /* TemplatePipe */],
                    __WEBPACK_IMPORTED_MODULE_13__encode_uri_pipe__["a" /* EncodeURIPipe */],
                    __WEBPACK_IMPORTED_MODULE_14__encode_uri_component_pipe__["a" /* EncodeURIComponentPipe */],
                    __WEBPACK_IMPORTED_MODULE_15__decode_uri_pipe__["a" /* DecodeURIPipe */],
                    __WEBPACK_IMPORTED_MODULE_16__decode_uri_component_pipe__["a" /* DecodeURIComponentPipe */],
                    __WEBPACK_IMPORTED_MODULE_17__truncate_pipe__["a" /* TruncatePipe */],
                    __WEBPACK_IMPORTED_MODULE_18__repeat_pipe__["a" /* RepeatPipe */],
                    __WEBPACK_IMPORTED_MODULE_19__slugify_pipe__["a" /* SlugifyPipe */],
                    __WEBPACK_IMPORTED_MODULE_20__strip_tags_pipe__["a" /* StripTagsPipe */],
                    __WEBPACK_IMPORTED_MODULE_21__latinize_pipe__["a" /* LatinizePipe */],
                    __WEBPACK_IMPORTED_MODULE_22__wrap_pipe__["a" /* WrapPipe */],
                    __WEBPACK_IMPORTED_MODULE_23__with_pipe__["a" /* WithPipe */],
                    __WEBPACK_IMPORTED_MODULE_24__reverse_str_pipe__["a" /* ReverseStrPipe */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__left_pad_pipe__["a" /* LeftPadPipe */],
                    __WEBPACK_IMPORTED_MODULE_2__match_pipe__["a" /* MatchPipe */],
                    __WEBPACK_IMPORTED_MODULE_3__pad_pipe__["a" /* PadPipe */],
                    __WEBPACK_IMPORTED_MODULE_4__replace_pipe__["a" /* ReplacePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__right_pad_pipe__["a" /* RightPadPipe */],
                    __WEBPACK_IMPORTED_MODULE_6__split_pipe__["a" /* SplitPipe */],
                    __WEBPACK_IMPORTED_MODULE_7__test_pipe__["a" /* TestPipe */],
                    __WEBPACK_IMPORTED_MODULE_8__trim_pipe__["a" /* TrimPipe */],
                    __WEBPACK_IMPORTED_MODULE_9__newlines_pipe__["a" /* NewlinesPipe */],
                    __WEBPACK_IMPORTED_MODULE_10__capitalize_pipe__["a" /* CapitalizePipe */],
                    __WEBPACK_IMPORTED_MODULE_11__upperfirst_pipe__["a" /* UpperFirstPipe */],
                    __WEBPACK_IMPORTED_MODULE_12__template_pipe__["a" /* TemplatePipe */],
                    __WEBPACK_IMPORTED_MODULE_13__encode_uri_pipe__["a" /* EncodeURIPipe */],
                    __WEBPACK_IMPORTED_MODULE_14__encode_uri_component_pipe__["a" /* EncodeURIComponentPipe */],
                    __WEBPACK_IMPORTED_MODULE_15__decode_uri_pipe__["a" /* DecodeURIPipe */],
                    __WEBPACK_IMPORTED_MODULE_16__decode_uri_component_pipe__["a" /* DecodeURIComponentPipe */],
                    __WEBPACK_IMPORTED_MODULE_17__truncate_pipe__["a" /* TruncatePipe */],
                    __WEBPACK_IMPORTED_MODULE_18__repeat_pipe__["a" /* RepeatPipe */],
                    __WEBPACK_IMPORTED_MODULE_19__slugify_pipe__["a" /* SlugifyPipe */],
                    __WEBPACK_IMPORTED_MODULE_20__strip_tags_pipe__["a" /* StripTagsPipe */],
                    __WEBPACK_IMPORTED_MODULE_21__latinize_pipe__["a" /* LatinizePipe */],
                    __WEBPACK_IMPORTED_MODULE_22__wrap_pipe__["a" /* WrapPipe */],
                    __WEBPACK_IMPORTED_MODULE_23__with_pipe__["a" /* WithPipe */],
                    __WEBPACK_IMPORTED_MODULE_24__reverse_str_pipe__["a" /* ReverseStrPipe */]
                ]
            },] },
];
/** @nocollapse */
NgStringPipesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatinizePipe; });
// idea from https://github.com/a8m/angular-filter


var LatinizePipe = (function () {
    function LatinizePipe() {
    }
    LatinizePipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* isUndefined */])(input)) {
            return input;
        }
        var replacementList = [
            { base: ' ', chars: "\u00A0" },
            { base: '0', chars: "\u07C0" },
            { base: 'A', chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F" },
            { base: 'AA', chars: "\uA732" },
            { base: 'AE', chars: "\u00C6\u01FC\u01E2" },
            { base: 'AO', chars: "\uA734" },
            { base: 'AU', chars: "\uA736" },
            { base: 'AV', chars: "\uA738\uA73A" },
            { base: 'AY', chars: "\uA73C" },
            { base: 'B', chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181" },
            { base: 'C', chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B" },
            { base: 'D', chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779" },
            { base: 'Dh', chars: "\u00D0" },
            { base: 'DZ', chars: "\u01F1\u01C4" },
            { base: 'Dz', chars: "\u01F2\u01C5" },
            { base: 'E', chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07" },
            { base: 'F', chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B" },
            { base: 'G', chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262" },
            { base: 'H', chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D" },
            { base: 'I', chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197" },
            { base: 'J', chars: "\u24BF\uFF2A\u0134\u0248\u0237" },
            { base: 'K', chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2" },
            { base: 'L', chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780" },
            { base: 'LJ', chars: "\u01C7" },
            { base: 'Lj', chars: "\u01C8" },
            { base: 'M', chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB" },
            { base: 'N', chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E" },
            { base: 'NJ', chars: "\u01CA" },
            { base: 'Nj', chars: "\u01CB" },
            { base: 'O', chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C" },
            { base: 'OE', chars: "\u0152" },
            { base: 'OI', chars: "\u01A2" },
            { base: 'OO', chars: "\uA74E" },
            { base: 'OU', chars: "\u0222" },
            { base: 'P', chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754" },
            { base: 'Q', chars: "\u24C6\uFF31\uA756\uA758\u024A" },
            { base: 'R', chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782" },
            { base: 'S', chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784" },
            { base: 'T', chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786" },
            { base: 'Th', chars: "\u00DE" },
            { base: 'TZ', chars: "\uA728" },
            { base: 'U', chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244" },
            { base: 'V', chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245" },
            { base: 'VY', chars: "\uA760" },
            { base: 'W', chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72" },
            { base: 'X', chars: "\u24CD\uFF38\u1E8A\u1E8C" },
            { base: 'Y', chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE" },
            { base: 'Z', chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762" },
            { base: 'a', chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251" },
            { base: 'aa', chars: "\uA733" },
            { base: 'ae', chars: "\u00E6\u01FD\u01E3" },
            { base: 'ao', chars: "\uA735" },
            { base: 'au', chars: "\uA737" },
            { base: 'av', chars: "\uA739\uA73B" },
            { base: 'ay', chars: "\uA73D" },
            { base: 'b', chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182" },
            { base: 'c', chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184" },
            { base: 'd', chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA" },
            { base: 'dh', chars: "\u00F0" },
            { base: 'dz', chars: "\u01F3\u01C6" },
            { base: 'e', chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD", }, { base: 'f', chars: "\u24D5\uFF46\u1E1F\u0192" },
            { base: 'ff', chars: "\uFB00" },
            { base: 'fi', chars: "\uFB01" },
            { base: 'fl', chars: "\uFB02" },
            { base: 'ffi', chars: "\uFB03" },
            { base: 'ffl', chars: "\uFB04" },
            { base: 'g', chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79" },
            { base: 'h', chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265" },
            { base: 'hv', chars: "\u0195" },
            { base: 'i', chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131" },
            { base: 'j', chars: "\u24D9\uFF4A\u0135\u01F0\u0249" },
            { base: 'k', chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3" },
            { base: 'l', chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D" },
            { base: 'lj', chars: "\u01C9" },
            { base: 'm', chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F" },
            { base: 'n', chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509" },
            { base: 'nj', chars: "\u01CC" },
            { base: 'o', chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11" },
            { base: 'oe', chars: "\u0153" },
            { base: 'oi', chars: "\u01A3" },
            { base: 'oo', chars: "\uA74F" },
            { base: 'ou', chars: "\u0223" },
            { base: 'p', chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1" },
            { base: 'q', chars: "\u24E0\uFF51\u024B\uA757\uA759" },
            { base: 'r', chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783" },
            { base: 's', chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282" },
            { base: 'ss', chars: "\xDF" },
            { base: 't', chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787" },
            { base: 'th', chars: "\u00FE" },
            { base: 'tz', chars: "\uA729" },
            { base: 'u', chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289" },
            { base: 'v', chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C" },
            { base: 'vy', chars: "\uA761" },
            { base: 'w', chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73" },
            { base: 'x', chars: "\u24E7\uFF58\u1E8B\u1E8D" },
            { base: 'y', chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF" },
            { base: 'z', chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763" }
        ];
        var diacriticsMap = {};
        for (var i = 0; i < replacementList.length; i += 1) {
            var chars = replacementList[i].chars;
            for (var j = 0; j < chars.length; j += 1) {
                diacriticsMap[chars[j]] = replacementList[i].base;
            }
        }
        return input.replace(/[^\u0000-\u007e]/g, function (c) { return diacriticsMap[c] || c; });
    };
    return LatinizePipe;
}());

LatinizePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'latinize' },] },
];
/** @nocollapse */
LatinizePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=latinize.pipe.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPadPipe; });


var LeftPadPipe = (function () {
    function LeftPadPipe() {
    }
    LeftPadPipe.prototype.transform = function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["l" /* leftPad */])(input, length, character);
    };
    return LeftPadPipe;
}());

LeftPadPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'leftpad'
            },] },
];
/** @nocollapse */
LeftPadPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=left-pad.pipe.js.map

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPipe; });


var MatchPipe = (function () {
    function MatchPipe() {
    }
    MatchPipe.prototype.transform = function (input, pattern, flag) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
        return input.match(regexp);
    };
    return MatchPipe;
}());

MatchPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'match'
            },] },
];
/** @nocollapse */
MatchPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=match.pipe.js.map

/***/ }),

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewlinesPipe; });


var NewlinesPipe = (function () {
    function NewlinesPipe() {
    }
    NewlinesPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    return NewlinesPipe;
}());

NewlinesPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'newlines'
            },] },
];
/** @nocollapse */
NewlinesPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=newlines.pipe.js.map

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadPipe; });


var PadPipe = (function () {
    function PadPipe() {
    }
    PadPipe.prototype.transform = function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["k" /* pad */])(input, length, character);
    };
    return PadPipe;
}());

PadPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'pad'
            },] },
];
/** @nocollapse */
PadPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=pad.pipe.js.map

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepeatPipe; });


var RepeatPipe = (function () {
    function RepeatPipe() {
    }
    RepeatPipe.prototype.transform = function (input, times, characters) {
        if (times === void 0) { times = 1; }
        if (characters === void 0) { characters = ''; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        if (times <= 0) {
            times = 1;
        }
        var repeated = [input];
        for (var i = 1; i < times; ++i) {
            repeated.push(input);
        }
        return repeated.join(characters);
    };
    return RepeatPipe;
}());

RepeatPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'repeat'
            },] },
];
/** @nocollapse */
RepeatPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=repeat.pipe.js.map

/***/ }),

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePipe; });


var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (input, pattern, replacement) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input) || !pattern || !replacement) {
            return input;
        }
        return input.replace(pattern, replacement);
    };
    return ReplacePipe;
}());

ReplacePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'replace'
            },] },
];
/** @nocollapse */
ReplacePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=replace.pipe.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReverseStrPipe; });


var ReverseStrPipe = (function () {
    function ReverseStrPipe() {
    }
    ReverseStrPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return Array.from(input).reverse().join('');
    };
    return ReverseStrPipe;
}());

ReverseStrPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'reverseStr'
            },] },
];
/** @nocollapse */
ReverseStrPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=reverse-str.pipe.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightPadPipe; });


var RightPadPipe = (function () {
    function RightPadPipe() {
    }
    RightPadPipe.prototype.transform = function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["j" /* rightPad */])(input, length, character);
    };
    return RightPadPipe;
}());

RightPadPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'rightpad'
            },] },
];
/** @nocollapse */
RightPadPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=right-pad.pipe.js.map

/***/ }),

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlugifyPipe; });


var SlugifyPipe = (function () {
    function SlugifyPipe() {
    }
    SlugifyPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return (input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, ' ')
            .replace(/[\s-]+/g, '-'));
    };
    return SlugifyPipe;
}());

SlugifyPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'slugify' },] },
];
/** @nocollapse */
SlugifyPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=slugify.pipe.js.map

/***/ }),

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPipe; });


var SplitPipe = (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (input, separator, limit) {
        if (separator === void 0) { separator = ' '; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return input.split(separator, limit);
    };
    return SplitPipe;
}());

SplitPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'split'
            },] },
];
/** @nocollapse */
SplitPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=split.pipe.js.map

/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripTagsPipe; });
// idea from https://github.com/a8m/angular-filter


var StripTagsPipe = (function () {
    function StripTagsPipe() {
    }
    StripTagsPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* isUndefined */])(input))
            return input;
        return input.replace(/<\S[^><]*>/g, '');
    };
    return StripTagsPipe;
}());

StripTagsPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'stripTags'
            },] },
];
/** @nocollapse */
StripTagsPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=strip-tags.pipe.js.map

/***/ }),

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePipe; });


var TemplatePipe = (function () {
    function TemplatePipe() {
    }
    TemplatePipe.prototype.transform = function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input) || args.length === 0) {
            return input;
        }
        var template = input;
        for (var i = 0; i < args.length; ++i) {
            template = template.replace("$" + (i + 1), args[i]);
        }
        return template;
    };
    return TemplatePipe;
}());

TemplatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'template'
            },] },
];
/** @nocollapse */
TemplatePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=template.pipe.js.map

/***/ }),

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPipe; });


var TestPipe = (function () {
    function TestPipe() {
    }
    TestPipe.prototype.transform = function (input, pattern, flag) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input) || !pattern) {
            return input;
        }
        var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
        return regexp.test(input);
    };
    return TestPipe;
}());

TestPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'test'
            },] },
];
/** @nocollapse */
TestPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=test.pipe.js.map

/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimPipe; });


var TrimPipe = (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return input.trim();
    };
    return TrimPipe;
}());

TrimPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'trim'
            },] },
];
/** @nocollapse */
TrimPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=trim.pipe.js.map

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
// Inspired from https://github.com/a8m/angular-filter/blob/master/src/_filter/string/truncate.js


var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (input, length, suffix, preserve) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        length = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* isUndefined */])(length) ? input.length : length;
        if (input.length <= length) {
            return input;
        }
        preserve = preserve || false;
        suffix = suffix || '';
        var index = length;
        if (preserve) {
            if (input.indexOf(' ', length) === -1) {
                index = input.length;
            }
            else {
                index = input.indexOf(' ', length);
            }
        }
        return input.substring(0, index) + suffix;
    };
    return TruncatePipe;
}());

TruncatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'truncate'
            },] },
];
/** @nocollapse */
TruncatePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpperFirstPipe; });


var UpperFirstPipe = (function () {
    function UpperFirstPipe() {
    }
    UpperFirstPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input)) {
            return input;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["i" /* upperFirst */])(input);
    };
    return UpperFirstPipe;
}());

UpperFirstPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'upperfirst'
            },] },
];
/** @nocollapse */
UpperFirstPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=upperfirst.pipe.js.map

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithPipe; });


var WithPipe = (function () {
    function WithPipe() {
    }
    WithPipe.prototype.transform = function (input, start, ends, csensitive) {
        if (start === void 0) { start = null; }
        if (ends === void 0) { ends = null; }
        if (csensitive === void 0) { csensitive = false; }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input) || (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["h" /* isNull */])(start) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["h" /* isNull */])(ends)) || (start == '') || (ends == '')) {
            return input;
        }
        input = (csensitive) ? input : input.toLowerCase();
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["h" /* isNull */])(start) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["h" /* isNull */])(ends)) {
            var a = !input.indexOf((csensitive) ? start : start.toLowerCase());
            var b = input.indexOf((csensitive) ? ends : ends.toLowerCase(), (input.length - ends.length)) !== -1;
            if (a == true && b == true) {
                return true;
            }
            else {
                return false;
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["h" /* isNull */])(start)) {
            return !input.indexOf((csensitive) ? start : start.toLowerCase());
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["h" /* isNull */])(ends)) {
            var position = input.length - ends.length;
            return input.indexOf((csensitive) ? ends : ends.toLowerCase(), position) !== -1;
        }
    };
    return WithPipe;
}());

WithPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'with' },] },
];
/** @nocollapse */
WithPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=with.pipe.js.map

/***/ }),

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrapPipe; });
// idea from https://github.com/a8m/angular-filter


var WrapPipe = (function () {
    function WrapPipe() {
    }
    WrapPipe.prototype.transform = function (input, wrap, ends) {
        return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["g" /* isString */])(input) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* isUndefined */])(wrap)) ? [wrap, input, ends || wrap].join('') : input;
    };
    return WrapPipe;
}());

WrapPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'wrap'
            },] },
];
/** @nocollapse */
WrapPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=wrap.pipe.js.map

/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var dragula_provider_1 = __webpack_require__(1109);
var dragula_class_1 = __webpack_require__(1108);
var DragulaDirective = (function () {
    function DragulaDirective(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.container = el.nativeElement;
    }
    DragulaDirective.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.bag);
        var bag = this.dragulaService.find(this.dragula);
        var checkModel = function () {
            if (_this.dragulaModel) {
                if (_this.drake.models) {
                    _this.drake.models.push(_this.dragulaModel);
                }
                else {
                    _this.drake.models = [_this.dragulaModel];
                }
            }
        };
        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }
        else {
            this.drake = dragula_class_1.dragula([this.container], Object.assign({}, this.dragulaOptions));
            checkModel();
            this.dragulaService.add(this.dragula, this.drake);
        }
    };
    DragulaDirective.prototype.ngOnChanges = function (changes) {
        // console.log('dragula.directive: ngOnChanges');
        // console.log(changes);
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    };
    return DragulaDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DragulaDirective.prototype, "dragula", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DragulaDirective.prototype, "dragulaModel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DragulaDirective.prototype, "dragulaOptions", void 0);
DragulaDirective = __decorate([
    core_1.Directive({ selector: '[dragula]' }),
    __metadata("design:paramtypes", [core_1.ElementRef, dragula_provider_1.DragulaService])
], DragulaDirective);
exports.DragulaDirective = DragulaDirective;


/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dragula_class_1 = __webpack_require__(1108);
exports.dragula = dragula_class_1.dragula;
var dragula_directive_1 = __webpack_require__(1188);
exports.DragulaDirective = dragula_directive_1.DragulaDirective;
var dragula_provider_1 = __webpack_require__(1109);
exports.DragulaService = dragula_provider_1.DragulaService;
var dragular_module_1 = __webpack_require__(1206);
exports.DragulaModule = dragular_module_1.DragulaModule;


/***/ }),

/***/ 1190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isUndefined */
/* unused harmony export isNull */
/* unused harmony export isNumber */
/* harmony export (immutable) */ __webpack_exports__["a"] = isNumberFinite;
/* harmony export (immutable) */ __webpack_exports__["c"] = isPositive;
/* harmony export (immutable) */ __webpack_exports__["b"] = isInteger;
/* unused harmony export isNil */
/* unused harmony export isString */
/* harmony export (immutable) */ __webpack_exports__["e"] = isObject;
/* unused harmony export isArray */
/* unused harmony export isFunction */
/* harmony export (immutable) */ __webpack_exports__["d"] = toDecimal;
/* unused harmony export upperFirst */
/* unused harmony export createRound */
/* unused harmony export leftPad */
/* unused harmony export rightPad */
/* unused harmony export toString */
/* unused harmony export pad */
/* unused harmony export flatten */
/* unused harmony export getProperty */
/* unused harmony export sum */
/* unused harmony export shuffle */
/* unused harmony export deepIndexOf */
/* unused harmony export deepEqual */
/* unused harmony export isDeepObject */
/* unused harmony export wrapDeep */
/* unused harmony export unwrapDeep */
/* unused harmony export DeepWrapper */
/* unused harmony export count */
/* unused harmony export empty */
/* unused harmony export every */
/* unused harmony export takeUntil */
/* unused harmony export takeWhile */
function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isNumber(value) {
    return typeof value === 'number';
}
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
// Not strict positive
function isPositive(value) {
    return value >= 0;
}
function isInteger(value) {
    // No rest, is an integer
    return (value % 1) === 0;
}
function isNil(value) {
    return value === null || typeof (value) === 'undefined';
}
function isString(value) {
    return typeof value === 'string';
}
function isObject(value) {
    return typeof value === 'object';
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function toDecimal(value, decimal) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
function upperFirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
}
function createRound(method) {
    // <any>Math to suppress error
    var func = Math[method];
    return function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (typeof value === 'string') {
            throw new TypeError('Rounding method needs a number');
        }
        if (typeof precision !== 'number' || isNaN(precision)) {
            precision = 0;
        }
        if (precision) {
            var pair = (value + "e").split('e');
            var val = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (val + "e").split('e');
            return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(value);
    };
}
function leftPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str = ch + str;
    }
    return str;
}
function rightPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str += ch;
    }
    return str;
}
function toString(value) {
    return "" + value;
}
function pad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    var left = true;
    while (++i < length) {
        var l = (str.length + ch.length <= len) ? (str.length + ch.length) : (str.length + 1);
        if (left) {
            str = leftPad(str, l, ch);
        }
        else {
            str = rightPad(str, l, ch);
        }
        left = !left;
    }
    return str;
}
function flatten(input, index) {
    if (index === void 0) { index = 0; }
    if (index >= input.length) {
        return input;
    }
    if (isArray(input[index])) {
        return flatten(input.slice(0, index).concat(input[index], input.slice(index + 1)), index);
    }
    return flatten(input, index + 1);
}
function getProperty(value, key) {
    if (isNil(value) || !isObject(value)) {
        return undefined;
    }
    var keys = key.split('.');
    var result = value[keys.shift()];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key_1 = keys_1[_i];
        if (isNil(result) || !isObject(result)) {
            return undefined;
        }
        result = result[key_1];
    }
    return result;
}
function sum(input, initial) {
    if (initial === void 0) { initial = 0; }
    return input.reduce(function (previous, current) { return previous + current; }, initial);
}
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(input) {
    if (!isArray(input)) {
        return input;
    }
    var copy = input.slice();
    for (var i = copy.length; i; --i) {
        var j = Math.floor(Math.random() * i);
        var x = copy[i - 1];
        copy[i - 1] = copy[j];
        copy[j] = x;
    }
    return copy;
}
function deepIndexOf(collection, value) {
    var index = -1;
    var length = collection.length;
    while (++index < length) {
        if (deepEqual(value, collection[index])) {
            return index;
        }
    }
    return -1;
}
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!(typeof a === 'object' && typeof b === 'object')) {
        return a === b;
    }
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
        var key = keysA[i];
        if (!hasOwn.call(b, keysA[i]) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
function isDeepObject(object) {
    return object.__isDeepObject__;
}
function wrapDeep(object) {
    return new DeepWrapper(object);
}
function unwrapDeep(object) {
    if (isDeepObject(object)) {
        return object.data;
    }
    return object;
}
var DeepWrapper = (function () {
    function DeepWrapper(data) {
        this.data = data;
        this.__isDeepObject__ = true;
    }
    return DeepWrapper;
}());

function count(input) {
    if (!isArray(input) && !isObject(input) && !isString(input)) {
        return input;
    }
    if (isObject(input)) {
        return Object.keys(input).map(function (value) { return input[value]; }).length;
    }
    return input.length;
}
function empty(input) {
    if (!isArray(input)) {
        return input;
    }
    return input.length === 0;
}
function every(input, predicate) {
    if (!isArray(input) || !predicate) {
        return input;
    }
    var result = true;
    var i = -1;
    while (++i < input.length && result) {
        result = predicate(input[i], i, input);
    }
    return result;
}
function takeUntil(input, predicate) {
    var i = -1;
    var result = [];
    while (++i < input.length && !predicate(input[i], i, input)) {
        result[i] = input[i];
    }
    return result;
}
function takeWhile(input, predicate) {
    return takeUntil(input, function (item, index, collection) { return !predicate(item, index, collection); });
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 1192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BytesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BytesPipe = BytesPipe_1 = (function () {
    function BytesPipe() {
    }
    BytesPipe.prototype.transform = function (input, decimal, from) {
        if (decimal === void 0) { decimal = 0; }
        if (from === void 0) { from = 'B'; }
        if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isNumberFinite */])(input) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* isNumberFinite */])(decimal) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["b" /* isInteger */])(decimal) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["c" /* isPositive */])(decimal))) {
            return input;
        }
        var bytes = input;
        var unit = from;
        while (unit != 'B') {
            bytes *= 1024;
            unit = BytesPipe_1.formats[unit].prev;
        }
        for (var key in BytesPipe_1.formats) {
            var format = BytesPipe_1.formats[key];
            if (bytes < format.max) {
                var prev = BytesPipe_1.formats[format.prev];
                var result = prev ?
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* toDecimal */])(bytes / prev.max, decimal) :
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["d" /* toDecimal */])(bytes, decimal);
                return result + " " + key;
            }
        }
    };
    return BytesPipe;
}());
BytesPipe.formats = {
    'B': { max: 1024 },
    'KB': { max: Math.pow(1024, 2), prev: 'B' },
    'MB': { max: Math.pow(1024, 3), prev: 'KB' },
    'GB': { max: Math.pow(1024, 4), prev: 'MB' },
    'TB': { max: Number.MAX_SAFE_INTEGER, prev: 'GB' }
};
BytesPipe = BytesPipe_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'bytes'
    })
], BytesPipe);

var BytesPipe_1;
//# sourceMappingURL=bytes.pipe.js.map

/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_map_component__ = __webpack_require__(1235);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__map_map_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__ = __webpack_require__(1237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_switcher_layer_switcher_component__ = __webpack_require__(1234);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__layer_switcher_layer_switcher_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_wms_add_wms_component__ = __webpack_require__(1233);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__add_wms_add_wms_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__(1238);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__search_search_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__measure_measure_component__ = __webpack_require__(1209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__measure_measure_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__measure_measure_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_layer_edit_layer_component__ = __webpack_require__(1208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__edit_layer_edit_layer_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__edit_layer_edit_layer_component__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__edit_layer_edit_layer_component__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_datatables_directive__ = __webpack_require__(1110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablesModule; });
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    return DataTablesModule;
}());

DataTablesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__angular_datatables_directive__["a" /* DataTableDirective */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__angular_datatables_directive__["a" /* DataTableDirective */]]
            },] },
];
/** @nocollapse */
DataTablesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aggregate__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math__ = __webpack_require__(1153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(1168);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__math__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__object__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony export NgPipesModule */







var NgPipesModule = (function () {
    function NgPipesModule() {
    }
    return NgPipesModule;
}());

NgPipesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__array__["a" /* NgArrayPipesModule */],
                    __WEBPACK_IMPORTED_MODULE_4__math__["a" /* NgMathPipesModule */],
                    __WEBPACK_IMPORTED_MODULE_3__boolean__["a" /* NgBooleanPipesModule */],
                    __WEBPACK_IMPORTED_MODULE_6__string__["a" /* NgStringPipesModule */],
                    __WEBPACK_IMPORTED_MODULE_5__object__["a" /* NgObjectPipesModule */],
                    __WEBPACK_IMPORTED_MODULE_1__aggregate__["a" /* NgAggregatePipesModule */]
                ]
            },] },
];
/** @nocollapse */
NgPipesModule.ctorParameters = function () { return []; };
// Export individual pipes and modules






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1197:
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(1207);

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(1197);
var debounce = __webpack_require__(1198);

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__(1202);
var eventmap = __webpack_require__(1201);
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__(1199);
var crossvent = __webpack_require__(1200);
var classes = __webpack_require__(1203);
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var dragula_directive_1 = __webpack_require__(1188);
var dragula_provider_1 = __webpack_require__(1109);
var DragulaModule = (function () {
    function DragulaModule() {
    }
    return DragulaModule;
}());
DragulaModule = __decorate([
    core_1.NgModule({
        exports: [dragula_directive_1.DragulaDirective],
        declarations: [dragula_directive_1.DragulaDirective],
        providers: [dragula_provider_1.DragulaService]
    })
], DragulaModule);
exports.DragulaModule = DragulaModule;


/***/ }),

/***/ 1207:
/***/ (function(module, exports) {

var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

/***/ }),

/***/ 1208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_pipes_src_math_bytes_pipe__ = __webpack_require__(1192);
/* unused harmony export Actions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FeatureEditDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FeatureDeleteDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var wktParser = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].WKT();
var FeatureTypesDB = {
    'POINT': 'Point',
    'LINESTRING': 'LineString',
    'POLYGON': 'Polygon',
    'MULTIPOINT': 'MultiPoint',
    'MULTILINESTRING': 'MultiLineString',
    'MULTIPOLYGON': 'MultiPolygon'
};
var Actions;
(function (Actions) {
    Actions[Actions["PAN"] = 0] = "PAN";
    Actions[Actions["CREATE"] = 1] = "CREATE";
    Actions[Actions["UPDATE"] = 2] = "UPDATE";
    Actions[Actions["DELETE"] = 3] = "DELETE";
})(Actions || (Actions = {}));
var EditLayerComponent = (function () {
    function EditLayerComponent(http, loading, dialog) {
        this.http = http;
        this.loading = loading;
        this.dialog = dialog;
        this.controlActive = false;
        this.dirty = {};
        this.action = Actions.PAN;
        this.actions = [
            { action: Actions.PAN, icon: '', text: 'Ninguna' },
            { action: Actions.CREATE, icon: 'add', text: 'Crear' },
            { action: Actions.UPDATE, icon: 'update', text: 'Actualizar' },
            { action: Actions.DELETE, icon: 'remove', text: 'Eliminar' }
        ];
    }
    EditLayerComponent.prototype.ngOnInit = function () {
    };
    EditLayerComponent.prototype.ngAfterViewInit = function () {
        //this.startEditing('aljubs');
    };
    EditLayerComponent.prototype.getActionDisable = function (action) {
        if (!this.layerWMS) {
            return false;
        }
        //console.log(action, this.layerWMS.get('rol'))
        switch (action) {
            case Actions.CREATE:
                return ['c', 'e', 'd'].includes(this.layerWMS.get('rol')) === false;
            case Actions.UPDATE:
                return ['e', 'd'].includes(this.layerWMS.get('rol')) === false;
            case Actions.DELETE:
                return ['d'].includes(this.layerWMS.get('rol')) === false;
            case Actions.PAN:
                return false;
            default:
                return true;
        }
    };
    EditLayerComponent.prototype.layerChanged = function (event) {
        console.log(event);
        var capa = event.value;
        this.layerWMS = this.getEditableLayers().find(function (l) { return l.get('name') == capa; });
        this.map.removeInteraction(this.interactionSelectPointerMove);
        this.startEditing(capa);
        this.interactionSelectPointerMove = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Select({
            layers: [this.editingLayer],
            condition: __WEBPACK_IMPORTED_MODULE_2_openlayers__["events"].condition.pointerMove
        });
        this.interactionSelect = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Select({
            layers: [this.editingLayer],
            style: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                    color: '#ffd740'
                })
            })
        });
        this.interactionSnap = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Snap({
            source: this.editingLayer.getSource()
        });
        //this.map.addInteraction(this.interactionSelectPointerMove);
        this.actionChanged({ value: Actions.PAN });
    };
    EditLayerComponent.prototype.actionChanged = function (event) {
        var _this = this;
        console.log(event);
        this.map.removeInteraction(this.interaction);
        this.interactionSelect.getFeatures().clear();
        this.map.removeInteraction(this.interactionSelect);
        this.map.removeInteraction(this.interactionDoubleClick);
        var action = event.value;
        //this.action = action;
        switch (action) {
            case Actions.CREATE:
                var featureType = FeatureTypesDB[this.geometryType];
                console.log(featureType, this.geometryType);
                this.interaction = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Draw({
                    type: featureType,
                    source: this.editingLayer.getSource()
                });
                this.map.addInteraction(this.interaction);
                this.interaction.on('drawend', function (e) {
                    //transactWFS('insert', e.feature);
                    var dialogRef = _this.dialog.open(FeatureEditDialog, { disableClose: true });
                    dialogRef.componentInstance.feature = e.feature;
                    dialogRef.componentInstance.fields = _this.layerSchema;
                    dialogRef.componentInstance.action = _this.action;
                    dialogRef.componentInstance.layerName = _this.layerName;
                    dialogRef.afterClosed().subscribe(function (val) {
                        if (val == -1) {
                            _this.editingLayer.getSource().removeFeature(e.feature);
                        }
                    });
                    console.log('add', e.feature);
                });
                break;
            case Actions.UPDATE:
                this.map.addInteraction(this.interactionSelect);
                this.interaction = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Modify({
                    features: this.interactionSelect.getFeatures()
                });
                this.interactionDoubleClick = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Select({
                    layers: [this.editingLayer],
                    condition: __WEBPACK_IMPORTED_MODULE_2_openlayers__["events"].condition.doubleClick
                });
                this.map.addInteraction(this.interactionDoubleClick);
                this.map.addInteraction(this.interaction);
                this.map.addInteraction(this.interactionSnap);
                this.dirty = {};
                this.interactionDoubleClick.getFeatures().on('add', function (e) {
                    console.log('double click', e.target);
                    var dialogRef = _this.dialog.open(FeatureEditDialog, { disableClose: true });
                    dialogRef.componentInstance.fields = _this.layerSchema;
                    dialogRef.componentInstance.feature = e.element;
                    dialogRef.componentInstance.action = _this.action;
                    dialogRef.componentInstance.layerName = _this.layerName;
                    dialogRef.componentInstance.layerWMS = _this.layerWMS;
                    dialogRef.afterClosed().subscribe(function () {
                        _this.editingLayer.getSource().clear();
                        _this.editingLayer.getSource().refresh();
                        _this.layerWMS.getSource().updateParams({ "time": Date.now() });
                    });
                    console.log('add', e.element.getProperties());
                });
                this.interactionSelect.getFeatures().on('add', function (e) {
                    e.element.on('change', function (e) {
                        _this.dirty[e.target.getId()] = true;
                    });
                });
                this.interactionSelect.getFeatures().on('remove', function (e) {
                    var f = e.element;
                    if (_this.dirty[f.getId()]) {
                        delete _this.dirty[f.getId()];
                        //delete featureProperties.boundedBy;
                        var dialogRef = _this.dialog.open(FeatureEditDialog, { disableClose: true });
                        dialogRef.componentInstance.fields = _this.layerSchema;
                        dialogRef.componentInstance.feature = f;
                        dialogRef.componentInstance.action = _this.action;
                        dialogRef.componentInstance.layerName = _this.layerName;
                        dialogRef.componentInstance.layerWMS = _this.layerWMS;
                        dialogRef.afterClosed().subscribe(function () {
                            _this.editingLayer.getSource().clear();
                            _this.editingLayer.getSource().refresh();
                            _this.layerWMS.getSource().updateParams({ "time": Date.now() });
                        });
                    }
                });
                break;
            case Actions.DELETE:
                this.interaction = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Select({
                    layers: [this.editingLayer]
                });
                this.interaction.getFeatures().on('add', function (e) {
                    //transactWFS('delete', e.target.item(0));
                    var dialogRef = _this.dialog.open(FeatureDeleteDialog, { disableClose: true });
                    dialogRef.componentInstance.layerName = _this.layerName;
                    dialogRef.componentInstance.gid = e.element.getProperties().gid;
                    dialogRef.afterClosed().subscribe(function (val) {
                        if (val == 0) {
                            console.log('okkk');
                            console.log('delete', e.target.item(0), e.element);
                        }
                        else {
                            console.log('err');
                        }
                        _this.interactionSelectPointerMove.getFeatures().clear();
                        _this.interaction.getFeatures().clear();
                        _this.editingLayer.getSource().clear();
                        _this.editingLayer.getSource().refresh();
                        //let layerWMS = this.getEditableLayers().find( l => l.get('name') == this.layerName );
                        //console.log(layerWMS);
                        _this.layerWMS.getSource().updateParams({ "time": Date.now() });
                    });
                });
                this.map.addInteraction(this.interaction);
                break;
            case Actions.PAN:
            default: return;
        }
        //this.layerChanged({ value : this.layerName })
    };
    EditLayerComponent.prototype.setActive = function (active) {
        if (this.controlActive == active)
            return;
        this.controlActive = active;
        if (!active) {
            this.map.removeInteraction(this.interaction);
            if (this.interactionSelect)
                this.interactionSelect.getFeatures().clear();
            this.map.removeInteraction(this.interactionSelect);
            this.map.removeInteraction(this.interactionDoubleClick);
        }
    };
    EditLayerComponent.prototype.getEditableLayers = function () {
        try {
            return this.map
                .getLayers()
                .getArray()
                .filter(function (l) { return l.get('group_capas_map') === true; })[0]
                .get('layers')
                .getArray()
                .filter(function (l) { return l.get('rol') == 'c' || l.get('rol') == 'e' || l.get('rol') == 'd'; });
        }
        catch (e) {
            return [];
        }
    };
    EditLayerComponent.prototype.startEditing = function (layerName) {
        var _this = this;
        if (this.editingLayer) {
            this.editingLayer.setMap(null);
        }
        var vectorSource = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector({
            format: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].GeoJSON(),
            url: function (extent) {
                return "http://localhost:8080/geoserver/betera/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=betera:" + layerName + "&outputFormat=application/json&srsname=EPSG:25830&bbox="
                    + extent.join(',') + ',EPSG:25830';
            },
            strategy: __WEBPACK_IMPORTED_MODULE_2_openlayers__["loadingstrategy"].bbox
        });
        this.editingLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: vectorSource
        });
        this.editingLayer.setMap(this.map);
        this.loading.setValue(true);
        this.http.get("/api/layers/schema/" + layerName)
            .subscribe(function (res) {
            var info = res.json();
            console.log(info);
            _this.layerSchema = info.layerSchema;
            _this.geometryType = info.geometryType;
            if (_this.action)
                _this.actionChanged({ value: _this.action });
            _this.loading.setValue(false);
        });
    };
    return EditLayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map'),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2_openlayers__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_openlayers__).Map) === "function" && _a || Object)
], EditLayerComponent.prototype, "map", void 0);
EditLayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-layer',
        template: __webpack_require__(1290),
        styles: [__webpack_require__(1262)],
        providers: [__WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */]) === "function" && _d || Object])
], EditLayerComponent);

var FeatureEditDialog = (function () {
    function FeatureEditDialog(dialogRef, userLayersService) {
        this.dialogRef = dialogRef;
        this.userLayersService = userLayersService;
        this.excludedProperties = ['gid'];
        this.tabIdx = 1;
    }
    FeatureEditDialog.prototype.getGeomColumn = function () {
        return this.fields.find(function (col) { return col.type === 'USER-DEFINED' && col.udt === 'geometry'; });
    };
    FeatureEditDialog.prototype.ngOnInit = function () {
        //console.log('GUUU', this.fields, this.feature);
        //console.log(this.feature.getProperties())
        var geomColumnName = this.getGeomColumn().name;
        this.excludedProperties.push(geomColumnName);
        this.properties = this.feature.getProperties() || {};
        if (this.feature.get('gid')) {
            this.featureData = this.userLayersService.getFeatureData(this.layerName, this.feature.get('gid'));
        }
    };
    FeatureEditDialog.prototype.ngAfterViewInit = function () {
        this.dropzone.nativeElement.addEventListener('drop', this.handleFileSelect.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragover', this.handleDragOver.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
    };
    FeatureEditDialog.prototype.handleFileSelect = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
    };
    FeatureEditDialog.prototype.handleDragOver = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        this.dropzone.nativeElement.style.opacity = '0.3';
    };
    FeatureEditDialog.prototype.handleDragLeave = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
    };
    FeatureEditDialog.prototype.fileSelected = function (e) {
        console.log(e.target.files);
        this.selectedFile = e.target.files[0];
    };
    FeatureEditDialog.prototype.addData = function () {
        var _this = this;
        if (!this.dataUrl || this.dataUrl.length <= 0) {
            return;
        }
        this.userLayersService.addFeatureData(this.layerName, this.feature.get('gid'), this.dataUrl)
            .subscribe(function (e) {
            _this.featureData = _this.userLayersService.getFeatureData(_this.layerName, _this.feature.get('gid'));
        });
    };
    FeatureEditDialog.prototype.deleteData = function (id) {
        var _this = this;
        console.log('featureData', this.featureData);
        console.log('idoieodie', id);
        this.userLayersService.deleteFeatureData(this.layerName, this.feature.get('gid'), id)
            .subscribe(function (e) {
            _this.featureData = _this.userLayersService.getFeatureData(_this.layerName, _this.feature.get('gid'));
        });
    };
    FeatureEditDialog.prototype.uploadFile = function () {
        var _this = this;
        //let file = this.fileForm.nativeElement.files[0];
        console.log(this.selectedFile);
        if (this.selectedFile) {
            this.userLayersService.uploadData(this.layerName, this.feature.get('gid'), this.selectedFile)
                .subscribe(function (e) {
                _this.featureData = _this.userLayersService.getFeatureData(_this.layerName, _this.feature.get('gid'));
            });
        }
        //this.userLayersService.addFeatureData()
    };
    FeatureEditDialog.prototype.saveFeature = function () {
        var _this = this;
        console.log('SAVE FEATURE', this.action, this.layerName, Object.assign({}, this.properties), this.properties);
        var geometry = wktParser.writeFeature(this.feature);
        delete this.properties['geometry'];
        console.log('cccc', geometry);
        if (this.action == Actions.CREATE) {
            this.userLayersService.addFeature(this.layerName, geometry, this.properties)
                .subscribe(function (res) {
                console.log(res);
                var gid = res.gid;
                _this.feature.setProperties(_this.properties);
                _this.feature.set('gid', gid);
                _this.dialogRef.close();
            }, function (err) { return console.log(err.json()); });
        }
        else if (this.action == Actions.UPDATE) {
            this.userLayersService.editFeature(this.layerName, geometry, this.properties)
                .subscribe(function (e) {
                _this.feature.setProperties(_this.properties);
                _this.dialogRef.close();
            }, function (err) { return console.log(err.json()); });
        }
    };
    return FeatureEditDialog;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropZone'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], FeatureEditDialog.prototype, "dropzone", void 0);
FeatureEditDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n        <md-tab-group [(selectedIndex)]=\"tabIdx\">\n          <md-tab label=\"Atributos\">\n          </md-tab>\n          <md-tab label=\"Datos\" [disabled]=\"action == 1\" style=\"overflow: hidden;\">\n          </md-tab>\n        </md-tab-group>\n        <div md-dialog-content>\n\n          <div *ngIf=\"tabIdx == 0\">\n            <div *ngFor=\"let field of fields\">\n                <md-input-container>\n                    <input [disabled]=\"excludedProperties.indexOf(field.name) >= 0\" mdInput [(ngModel)]=\"properties[field.name]\" placeholder=\"{{field.name}}\" value=\"{{ properties[field.name] }}\">\n                </md-input-container>\n                <br>\n            </div>\n          </div>\n\n          <div *ngIf=\"tabIdx == 1\">\n            <h4><md-icon>file_upload</md-icon> A\u00F1adir archivos o enlaces externos</h4>\n            <p md-subheader>A\u00F1ade un fichero</p>\n            <input id=\"input-file-id\" type=\"file\" style=\"display: none;\" (change)=\"fileSelected($event)\" name=\"data\" />\n            <label #dropZone for=\"input-file-id\" md-button class=\"mat-button\" style=\"border: 2px solid #000; margin-top: 16px; width: 100%; padding : 10px;\">\n              Selecciona el archivo\n            </label>\n            <button [disabled]=\"!this.selectedFile\" md-button (click)=\"uploadFile()\" style=\"width : 100%;\">Subir</button>\n            <md-list *ngIf=\"selectedFile\">\n              <h3 md-subheader>Archivos a subir</h3>\n              <md-list-item>\n                <md-icon md-list-avatar>attachment</md-icon>\n                <h4 md-line>{{selectedFile.name}}</h4>\n                <p md-line> {{selectedFile?.size | bytes}} {{selectedFile?.lastModified | date}} </p>\n              </md-list-item>\n            </md-list>\n            \n            <p md-subheader>A\u00F1ade un enlace externo</p>\n            \n            <md-input-container style=\"width : 100%;\">\n              <input mdInput [(ngModel)]=\"dataUrl\" type=\"url\">\n            </md-input-container>\n            <button md-button style=\"width : 100%;\" (click)=\"addData()\">Subir</button>\n            <md-list>\n              <h3 md-subheader>Archivos</h3>\n              <md-list-item *ngFor=\"let data of (featureData | async)\">\n                <md-icon md-list-icon>insert_drive_files</md-icon>\n                <h4 md-line>\n                  <a href=\"{{data.url}}\">{{data.url}}</a>\n                </h4>\n                <button md-mini-fab *ngIf=\" layerWMS && layerWMS.get('rol') == 'd' \" (click)=\"deleteData(data.id)\"><md-icon>remove</md-icon></button>\n              </md-list-item>\n            </md-list>\n          </div>\n\n        </div>\n        <div md-dialog-actions>\n          <button md-button (click)=\"dialogRef.close(-1)\">Cancelar</button>\n          <button md-button (click)=\"saveFeature()\">Guardar</button>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_5__services__["b" /* UserLayersService */], __WEBPACK_IMPORTED_MODULE_6_angular_pipes_src_math_bytes_pipe__["a" /* BytesPipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialogRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UserLayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UserLayersService */]) === "function" && _g || Object])
], FeatureEditDialog);

var FeatureDeleteDialog = (function () {
    function FeatureDeleteDialog(userLayersService, dialogRef) {
        this.userLayersService = userLayersService;
        this.dialogRef = dialogRef;
    }
    FeatureDeleteDialog.prototype.deleteFeature = function () {
        var _this = this;
        this.userLayersService.deleteFeature(this.layerName, this.gid)
            .subscribe(function (e) { _this.dialogRef.close(0), function (err) { _this.dialogRef.close(1); }; });
    };
    return FeatureDeleteDialog;
}());
FeatureDeleteDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n        <div md-dialog-content>\n            <h4>\u00BFDeseas eliminar la feature?</h4>\n            <ul>\n              <li>capa : {{layerName}}</li>\n              <li>gid  : {{gid}}</li>\n            </ul>\n        </div>\n        <div md-dialog-actions>\n          <button md-button (click)=\"dialogRef.close()\">Cancelar</button>\n          <button md-button (click)=\"deleteFeature()\">Eliminar</button>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_5__services__["b" /* UserLayersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UserLayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UserLayersService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialogRef */]) === "function" && _j || Object])
], FeatureDeleteDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=edit-layer.component.js.map

/***/ }),

/***/ 1209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MeasureSnackBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeasureInteraction;
(function (MeasureInteraction) {
    MeasureInteraction[MeasureInteraction["Length"] = 1] = "Length";
    MeasureInteraction[MeasureInteraction["Area"] = 2] = "Area";
})(MeasureInteraction || (MeasureInteraction = {}));
var MeasureComponent = (function () {
    function MeasureComponent(snackbar, zone, loading) {
        this.snackbar = snackbar;
        this.zone = zone;
        this.loading = loading;
        this.wgs84Sphere = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["Sphere"](6378137);
        this.active = false;
        this.activeInteraction = null;
        this.measureLayer = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["source"].Vector()
        });
        this.measureLayer.set('name', 'MeasureLayer');
    }
    MeasureComponent.prototype.setActive = function (value, interaction) {
        if (!value) {
            this.active = false;
            this.activeInteraction = null;
            this.measureLayer.getSource().clear();
            //this.map.removeLayer(this.measureLayer);
            this.measureLayer.setMap(null);
            this.map.removeInteraction(this.drawInteraction);
            if (this.listenerGeomChange) {
                __WEBPACK_IMPORTED_MODULE_1_openlayers__["Observable"].unByKey(this.listenerGeomChange);
            }
            //this.dialogCollapsed = false;
            this.snackbar._openedSnackBarRef ? this.snackbar._openedSnackBarRef.dismiss() : '';
        }
        else {
            if (!interaction)
                return;
            this.active = true;
            this.setInteraction(interaction);
            this.addLayer();
        }
    };
    MeasureComponent.prototype.addLayer = function () {
        this.measureLayer.setMap(this.map);
    };
    MeasureComponent.prototype.setInteraction = function (interaction) {
        //console.log(interaction, this.activeInteraction, SearchInteraction.Point, SearchInteraction.Box, 'slsjlsk');
        if (interaction == this.activeInteraction)
            return;
        var snackRef = this.snackbar.openFromComponent(MeasureSnackBar);
        snackRef.instance.interactionType = interaction;
        if (interaction == MeasureInteraction.Length) {
            __WEBPACK_IMPORTED_MODULE_1_openlayers__["Observable"].unByKey(this.listenerGeomChange);
            this.map.removeInteraction(this.drawInteraction);
            this.activeInteraction = MeasureInteraction.Length;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_openlayers__["Observable"].unByKey(this.listenerGeomChange);
            this.map.removeInteraction(this.drawInteraction);
            this.activeInteraction = MeasureInteraction.Area;
        }
        this.addInteraction(interaction);
    };
    MeasureComponent.prototype.addInteraction = function (interaction) {
        var _this = this;
        var type = (interaction == MeasureInteraction.Length ? 'LineString' : 'Polygon');
        this.drawInteraction = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["interaction"].Draw({
            source: this.measureLayer.getSource(),
            type: /** @type {ol.geom.GeometryType} */ (type),
            style: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["style"].Style({
                fill: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["style"].Fill({
                    color: 'rgba(255, 255, 255, 0.2)'
                }),
                stroke: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["style"].Stroke({
                    color: 'rgba(0, 0, 0, 0.5)',
                    lineDash: [10, 10],
                    width: 2
                }),
                image: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["style"].Circle({
                    radius: 5,
                    stroke: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["style"].Stroke({
                        color: 'rgba(0, 0, 0, 0.7)'
                    }),
                    fill: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["style"].Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    })
                })
            })
        });
        this.map.addInteraction(this.drawInteraction);
        var sketch;
        this.drawInteraction.on('drawstart', function (evt) {
            _this.measureLayer.getSource().clear();
            sketch = evt.feature;
            _this.listenerGeomChange = sketch.getGeometry().on('change', function (evt) {
                var geom = evt.target;
                var measure = (geom instanceof __WEBPACK_IMPORTED_MODULE_1_openlayers__["geom"].Polygon ? _this.formatArea(geom) : _this.formatLength(geom));
                _this.snackbar._openedSnackBarRef.instance.measure = measure;
                _this.snackbar._openedSnackBarRef.instance.interactionType = _this.activeInteraction;
            });
        }, this);
        this.drawInteraction.on('drawend', function () {
            sketch = null;
            __WEBPACK_IMPORTED_MODULE_1_openlayers__["Observable"].unByKey(_this.listenerGeomChange);
        }, this);
    };
    MeasureComponent.prototype.formatArea = function (polygon) {
        var area;
        var sourceProj = this.map.getView().getProjection();
        var geom = (polygon.clone().transform(sourceProj, 'EPSG:4326'));
        var coordinates = geom.getLinearRing(0).getCoordinates();
        return Math.abs(this.wgs84Sphere.geodesicArea(coordinates));
    };
    MeasureComponent.prototype.formatLength = function (line) {
        var length = 0;
        var coordinates = line.getCoordinates();
        var sourceProj = this.map.getView().getProjection();
        for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
            var c1 = __WEBPACK_IMPORTED_MODULE_1_openlayers__["proj"].transform(coordinates[i], sourceProj, 'EPSG:4326');
            var c2 = __WEBPACK_IMPORTED_MODULE_1_openlayers__["proj"].transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
            length += this.wgs84Sphere.haversineDistance(c1, c2);
        }
        return length;
    };
    return MeasureComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map'),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_openlayers__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_openlayers__).Map) === "function" && _a || Object)
], MeasureComponent.prototype, "map", void 0);
MeasureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-measure',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _d || Object])
], MeasureComponent);

var MeasureSnackBar = (function () {
    function MeasureSnackBar() {
        this.Math = Math;
    }
    return MeasureSnackBar;
}());
MeasureSnackBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1293),
        styles: [__webpack_require__(1265)]
    }),
    __metadata("design:paramtypes", [])
], MeasureSnackBar);

var _a, _b, _c, _d;
//# sourceMappingURL=measure.component.js.map

/***/ }),

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartPointComponent = (function () {
    function ChartPointComponent() {
        this.click = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.unselect = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
    }
    return ChartPointComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "unselect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "mouseOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "update", void 0);
ChartPointComponent = __decorate([
    core_1.Directive({
        selector: 'point'
    })
], ChartPointComponent);
exports.ChartPointComponent = ChartPointComponent;
//# sourceMappingURL=ChartPointComponent.js.map

/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartPointComponent_1 = __webpack_require__(1210);
var ChartSeriesComponent = (function () {
    function ChartSeriesComponent() {
        this.click = new core_1.EventEmitter();
        this.afterAnimate = new core_1.EventEmitter();
        this.checkboxClick = new core_1.EventEmitter();
        this.hide = new core_1.EventEmitter();
        this.legendItemClick = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.show = new core_1.EventEmitter();
    }
    return ChartSeriesComponent;
}());
__decorate([
    core_1.ContentChild(ChartPointComponent_1.ChartPointComponent),
    __metadata("design:type", ChartPointComponent_1.ChartPointComponent)
], ChartSeriesComponent.prototype, "point", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "afterAnimate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "checkboxClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "hide", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "legendItemClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "mouseOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "show", void 0);
ChartSeriesComponent = __decorate([
    core_1.Directive({
        selector: 'series'
    })
], ChartSeriesComponent);
exports.ChartSeriesComponent = ChartSeriesComponent;
//# sourceMappingURL=ChartSeriesComponent.js.map

/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartXAxisComponent = (function () {
    function ChartXAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    return ChartXAxisComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartXAxisComponent.prototype, "setExtremes", void 0);
ChartXAxisComponent = __decorate([
    core_1.Directive({
        selector: 'xAxis'
    })
], ChartXAxisComponent);
exports.ChartXAxisComponent = ChartXAxisComponent;
//# sourceMappingURL=ChartXAxisComponent.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartYAxisComponent = (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    return ChartYAxisComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "setExtremes", void 0);
ChartYAxisComponent = __decorate([
    core_1.Directive({
        selector: 'yAxis'
    })
], ChartYAxisComponent);
exports.ChartYAxisComponent = ChartYAxisComponent;
//# sourceMappingURL=ChartYAxisComponent.js.map

/***/ }),

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(1190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (input) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["e" /* isObject */])(input)) {
            return input;
        }
        return Object.keys(input);
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ 1233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddWmsComponent = (function () {
    function AddWmsComponent(capabilitiesService, dialogRef) {
        this.capabilitiesService = capabilitiesService;
        this.dialogRef = dialogRef;
        this.capasSeleccionadas = [];
    }
    AddWmsComponent.prototype.ngOnInit = function () {
    };
    AddWmsComponent.prototype.onChangeCheckbox = function (event, name) {
        //console.log(event, name);
        var checked = event.checked;
        if (!checked) {
            this.capasSeleccionadas =
                this.capasSeleccionadas.filter(function (c) { return c.Name !== name; });
        }
        else {
            var capa = this.capas.find(function (c) { return c.Name === name; });
            this.capasSeleccionadas.push(capa);
        }
    };
    AddWmsComponent.prototype.getCapabilities = function () {
        var _this = this;
        if (!this.serviceUrl) {
            this.error = 'Debe añadir la url del servicio';
        }
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var url = this.serviceUrl.replace(extract, '') + '?service=WMS&request=GetCapabilities';
        this.capabilitiesService.getCapabilities(url).subscribe(function (layers) {
            _this.error = null;
            _this.capas = layers.json();
        }, function (error) {
            _this.error = error.json();
        });
    };
    AddWmsComponent.prototype.closeWithData = function () {
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var serviceURL = this.serviceUrl.replace(extract, '');
        var layers = this.capasSeleccionadas;
        this.dialogRef.close({ serviceURL: serviceURL, layers: layers });
    };
    AddWmsComponent.prototype.reset = function () {
        this.capas = null;
        this.capasSeleccionadas = [];
    };
    return AddWmsComponent;
}());
AddWmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-wms',
        template: __webpack_require__(1289),
        styles: [__webpack_require__(1261)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* WMSCapabilitiesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* WMSCapabilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* WMSCapabilitiesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _b || Object])
], AddWmsComponent);

var _a, _b;
//# sourceMappingURL=add-wms.component.js.map

/***/ }),

/***/ 1234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerSwitcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayerSwitcherComponent = (function () {
    function LayerSwitcherComponent(dragulaService) {
        this.dragulaService = dragulaService;
        this.maxLayerNameLength = 40;
        this.emmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapsDetailsContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], LayerSwitcherComponent.prototype, "mapsDetailsContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map'),
    __metadata("design:type", typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_2_openlayers__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_openlayers__).Map) === "function" && _b || Object)
], LayerSwitcherComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('layersChanged'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], LayerSwitcherComponent.prototype, "emmiter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('visibility'),
    __metadata("design:type", Object)
], LayerSwitcherComponent.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LayerSwitcherComponent.prototype, "updateLayerNamesLength", null);
LayerSwitcherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layer-switcher',
        template: __webpack_require__(1291),
        styles: [__webpack_require__(1263)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('collapsed', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translateY(-200%)',
                    opacity: 0,
                    display: 'none'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translateY(0%)',
                    opacity: 1,
                    display: ''
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('invisible => visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('visible => invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]) === "function" && _d || Object])
], LayerSwitcherComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=layer-switcher.component.js.map

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7____ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_loading_animate__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MapComponent = (function () {
    function MapComponent(zone, dialog, el, route, router, location, loading, userMapsService, projService, profileService, exportMapService) {
        this.zone = zone;
        this.dialog = dialog;
        this.el = el;
        this.route = route;
        this.router = router;
        this.location = location;
        this.loading = loading;
        this.userMapsService = userMapsService;
        this.projService = projService;
        this.profileService = profileService;
        this.exportMapService = exportMapService;
        this.DEVELOPMENT_GEOSERVER_URL = 'http://localhost:8080/geoserver/betera/wms';
        this.customComponentsWithInteractions = [];
        this.accesibleMaps = [];
        this.actualMap = -1;
        this.mapsControlVisible = 'invisible';
        this.toolsControlVisible = 'invisible';
        this.overviewControlVisible = 'visible';
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidenav.onOpenStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
        this.sidenav.onCloseStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
        this.sidenav.onOpen.subscribe(this.clearIntervalUpdateMapSize.bind(this));
        this.sidenav.onClose.subscribe(this.clearIntervalUpdateMapSize.bind(this));
        this.createMap();
        this.route.params.subscribe(function () { return _this.addUserMaps(); });
        //this.map.getLayers().on('change:length', ()=>{ this.updateMapAndOverview() });
        this.customComponentsWithInteractions = [
            this.searchControl, this.profileControl, this.measureControl, this.editLayerControl
        ];
    };
    MapComponent.prototype.exportMap = function (event) {
        this.exportMapService.exportMap(this.map, {}, event);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.el.nativeElement.parentNode);
        this.el.nativeElement.parentNode.parentNode.childNodes[0].style.position = 'relative';
        setTimeout(function () { window.scrollTo(0, 1); }, 1000);
        document.body.style.overflow = 'hidden';
        /*let toolbar = <HTMLElement>document.querySelector('md-toolbar');
        toolbar.style.boxShadow = '0 4px 6px 0 rgba(0,0,0,.3);';*/
        //this.createMap();
    };
    MapComponent.prototype.onChangeMap = function () {
        this.router.navigate(['/map', this.actualMap]);
    };
    MapComponent.prototype.getBackgroundColor = function (bool) {
        return bool ? '#8BC34A' : '#f7f7f7';
    };
    MapComponent.prototype.disableControls = function () {
        this.customComponentsWithInteractions.forEach(function (control) {
            control.setActive(false);
        });
    };
    MapComponent.prototype.setIntervalUpdateMapSize = function () {
        var _this = this;
        clearInterval(this.sideNavMapInterval);
        this.sideNavMapInterval = setInterval(function () { return _this.map.updateSize(); }, 20);
    };
    MapComponent.prototype.clearIntervalUpdateMapSize = function () {
        if (!this.overviewCtrl) {
            this.createOverviewMap();
        }
        else {
            this.overviewCtrl.getView().setProperties(this.map.getView().getProperties());
        }
        this.map.updateSize();
        clearInterval(this.sideNavMapInterval);
    };
    MapComponent.prototype.updateMapAndOverview = function () {
        var _this = this;
        this.map.getLayers().getArray().forEach(function (l) { return l.changed(); });
        this.map.render();
        this.map.once('postcompose', function () {
            if (_this.overviewCtrl) {
                _this.overviewCtrl.getLayers().clear();
                _this.overviewCtrl.getLayers().extend(_this.map.getLayers().getArray());
            }
        });
    };
    MapComponent.prototype.toggleMaps = function () {
        //this.layerSwitcherControl.toggleMaps.call(this.layerSwitcherControl);
        this.mapsControlVisible = (this.mapsControlVisible === 'visible') ? 'invisible' : 'visible';
    };
    MapComponent.prototype.toggleTools = function () {
        /*this.toolsContainer.forEach(element =>{
          element.nativeElement.classList.toggle('collapsed');
        });*/
        this.toolsControlVisible = (this.toolsControlVisible === 'visible') ? 'invisible' : 'visible';
    };
    MapComponent.prototype.toggleOverview = function () {
        this.overviewControlVisible = (this.overviewControlVisible === 'visible') ? 'invisible' : 'visible';
    };
    MapComponent.prototype.createMap = function () {
        var _this = this;
        this.mapProperties = {
            target: 'map',
            controls: __WEBPACK_IMPORTED_MODULE_4_openlayers__["control"].defaults().extend([
                new __WEBPACK_IMPORTED_MODULE_4_openlayers__["control"].FullScreen({
                    source: 'app-body'
                })
            ]),
            view: new __WEBPACK_IMPORTED_MODULE_4_openlayers__["View"]({
                projection: 'EPSG:4326',
                center: [-0.459108, 39.589353],
                zoom: 12,
                maxZoom: 20
            })
        };
        this.map = new __WEBPACK_IMPORTED_MODULE_4_openlayers__["Map"](this.mapProperties);
        this.projService.setProjection(this.map, '25830');
        var view = this.map.getView();
        this.map.once('postcompose', function () {
            return view.fit(__WEBPACK_IMPORTED_MODULE_4_openlayers__["proj"].transformExtent([-0.4958, 39.563, -0.44153, 39.633], 'EPSG:4326', _this.map.getView().getProjection()));
        });
        //this.addDummyLayers(this.map);
        //this.addUserMaps();
    };
    MapComponent.prototype.createOverviewMap = function () {
        var _this = this;
        var overviewMapProperties = {
            target: this.overviewMapEl.nativeElement,
            view: new __WEBPACK_IMPORTED_MODULE_4_openlayers__["View"]({
                projection: 'EPSG:4326',
                center: [-0.459108, 39.589353],
                zoom: 12
            })
        };
        this.overviewCtrl = new __WEBPACK_IMPORTED_MODULE_4_openlayers__["Map"](overviewMapProperties);
        this.overviewCtrl.getControls().forEach(function (c) { return _this.overviewCtrl.removeControl(c); });
        this.projService.setProjection(this.overviewCtrl, '25830');
        this.overviewCtrl.getView().on('change', function () {
            _this.map.getView().setProperties(_this.overviewCtrl.getView().getProperties());
            _this.overviewCtrl.updateSize();
        });
        //window.on('resize', ()=>this.overviewCtrl.updateSize());
        this.overviewCtrl.getLayers().clear();
        this.overviewCtrl.getLayers().extend(this.map.getLayers().getArray().slice());
    };
    MapComponent.prototype.addUserMaps = function () {
        var _this = this;
        this.disableControls();
        this.map.getLayers().clear();
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        var idMap = params.id;
        var visibleMap = false;
        this.userMapsService.getUserMaps()
            .subscribe(function (mapas) {
            console.log('mapas', mapas);
            _this.loading.setValue(false);
            if (!idMap) {
                if (!mapas[0])
                    return;
                var firstMap = mapas[0].id;
                _this.router.navigateByUrl("/map/" + firstMap);
                return;
            }
            _this.accesibleMaps = mapas;
            _this.actualMap = mapas.find(function (m) { return m.id == idMap; }).id;
            _this.location.replaceState("/map/" + _this.actualMap + "/" + mapas.find(function (m) { return m.id == _this.actualMap; }).name);
            // Obtenemos una lista de mapas con las capas ya ordenadas
            // y la recorremos 
            mapas.forEach(function (mapa, index, arr) {
                if (mapa.id != idMap)
                    return;
                //console.log('mapa', mapa);
                // Creamos un grupo de capas vacío
                var groupCapasMap = new __WEBPACK_IMPORTED_MODULE_4_openlayers__["layer"].Group();
                // Le damos un nombre
                groupCapasMap.set('name', mapa.name);
                groupCapasMap.set('group_capas_map', true);
                groupCapasMap.set('collapsed', 'invisible');
                // Lo añadimos al mapa
                _this.map.addLayer(groupCapasMap);
                mapa.capas.forEach(function (capa) {
                    //console.log('capaa', capa);
                    if (capa.type == 'base')
                        _this.addBaseLayerToGroup(capa, groupCapasMap);
                    else if (capa.type == 'layer')
                        _this.addLayerToGroup(capa, groupCapasMap);
                });
            });
            if (_this.overviewCtrl) {
                _this.overviewCtrl.getLayers().clear();
                _this.overviewCtrl.getLayers().extend(_this.map.getLayers().getArray().slice());
            }
        });
    };
    MapComponent.prototype.getTile = function (opts) {
        var tile = new __WEBPACK_IMPORTED_MODULE_4_openlayers__["layer"].Tile({
            visible: true,
            source: new __WEBPACK_IMPORTED_MODULE_4_openlayers__["source"].TileWMS({
                url: opts.service_url,
                gutter: opts.gutter <= 0 ? 0 : 250,
                projection: opts.projection || 'EPSG:25830',
                //crossOrigin: opts.crossOrigin || 'anonymous', // Configurar Geoserver para orígenes remotos primero
                //crossOrigin : 'anonymous',
                params: {
                    'FORMAT': 'image/png',
                    'TRANSPARENT': true,
                    'TILED': true,
                    'LAYERS': opts.layers,
                    'STYLES': ''
                }
            })
        });
        tile.set('service', opts.service_url);
        tile.set('name', opts.name);
        tile.set('type', opts.type);
        tile.set('rol', opts.rol);
        return tile;
    };
    MapComponent.prototype.addBaseLayerToGroup = function (params, group) {
        var tile = this.getTile({
            name: params.name,
            service_url: params.service_url,
            type: 'base',
            layers: params.layers,
            gutter: 250,
            wms_externo: true,
            crossOrigin: '',
        });
        tile.set('wms_externo', true);
        group.getLayers().extend([tile]);
    };
    MapComponent.prototype.addLayerToGroup = function (params, group) {
        var tile = this.getTile({
            service_url: this.DEVELOPMENT_GEOSERVER_URL,
            layers: params.name,
            name: params.name,
            type: 'layer',
            crossOrigin: '',
            rol: params.rol
        });
        group.getLayers().extend([tile]);
    };
    MapComponent.prototype.openWMSDialog = function () {
        var _this = this;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7____["d" /* AddWmsComponent */]);
        dialog.afterClosed().subscribe(function (wmsGroup) {
            if (!wmsGroup)
                return;
            var group = new __WEBPACK_IMPORTED_MODULE_4_openlayers__["layer"].Group();
            var idx = _this.map.getLayers().getArray().findIndex(function (l) { return l.get('showInLayerSwitcher') === false; });
            idx = (idx === -1 ? _this.map.getLayers().getArray().length : idx);
            console.log(idx);
            group.set('name', wmsGroup.serviceURL);
            group.set('removable', true);
            var layers = wmsGroup.layers
                .map(function (l) { return _this.getTile({ service_url: wmsGroup.serviceURL, layers: l.Name, name: l.Name }); });
            group.getLayers().extend(layers);
            _this.map.getLayers().insertAt(idx, group);
        });
    };
    MapComponent.prototype.toggleEditLayers = function () {
        var active = !this.editLayerControl.controlActive;
        if (active)
            this.disableControls();
        this.editLayerControl.setActive(active);
        this.sidenav.close();
    };
    MapComponent.prototype.toggleMeasureControl = function (interaction) {
        if (interaction && this.measureControl.activeInteraction != interaction) {
            this.disableControls();
            this.measureControl.setActive(true, interaction);
            this.sidenav.close();
            return;
        }
        if (!this.measureControl.active) {
            this.disableControls();
            this.measureControl.setActive(true, interaction);
        }
        else {
            this.disableControls();
            this.measureControl.setActive(false);
        }
        this.sidenav.close();
    };
    MapComponent.prototype.toggleSearchControl = function (interaction) {
        if (interaction && this.searchControl.activeInteraction != interaction) {
            this.disableControls();
            this.searchControl.setActive(true, interaction);
            this.sidenav.close();
            return;
        }
        if (!this.searchControl.active) {
            this.disableControls();
            this.searchControl.setActive(true, interaction);
        }
        else {
            this.disableControls();
            this.searchControl.setActive(false);
        }
        this.sidenav.close();
    };
    MapComponent.prototype.toggleProfileControl = function () {
        if (!this.profileControl.active) {
            this.disableControls();
            this.profileControl.setActive(true);
        }
        else {
            this.disableControls();
            this.profileControl.setActive(false);
        }
        this.sidenav.close();
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_7____["j" /* MeasureComponent */]; })),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7____["j" /* MeasureComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7____["j" /* MeasureComponent */]) === "function" && _a || Object)
], MapComponent.prototype, "measureControl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_7____["e" /* SearchComponent */]; })),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7____["e" /* SearchComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7____["e" /* SearchComponent */]) === "function" && _b || Object)
], MapComponent.prototype, "searchControl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_7____["b" /* ProfileComponent */]; })),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7____["b" /* ProfileComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7____["b" /* ProfileComponent */]) === "function" && _c || Object)
], MapComponent.prototype, "profileControl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_7____["c" /* LayerSwitcherComponent */]; })),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7____["c" /* LayerSwitcherComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7____["c" /* LayerSwitcherComponent */]) === "function" && _d || Object)
], MapComponent.prototype, "layerSwitcherControl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_7____["k" /* EditLayerComponent */]; })),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7____["k" /* EditLayerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7____["k" /* EditLayerComponent */]) === "function" && _e || Object)
], MapComponent.prototype, "editLayerControl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('overviewMap'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], MapComponent.prototype, "overviewMapEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mapTools'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _g || Object)
], MapComponent.prototype, "toolsContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSidenav */]) === "function" && _h || Object)
], MapComponent.prototype, "sidenav", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(1292),
        styles: [__webpack_require__(1264)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services__["d" /* ProjectionService */], __WEBPACK_IMPORTED_MODULE_5__services__["c" /* Profile3DService */], __WEBPACK_IMPORTED_MODULE_5__services__["e" /* UserMapsService */], __WEBPACK_IMPORTED_MODULE_5__services__["f" /* ExportMapService */]],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__router_transitions__["a" /* routerTransition */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('collapsed', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translateX(-100%)',
                    opacity: 0,
                    display: 'none'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translateX(0%)',
                    opacity: 1,
                    display: ''
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('invisible => visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('visible => invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
            ])
        ],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_5__services__["e" /* UserMapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["e" /* UserMapsService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_5__services__["d" /* ProjectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["d" /* ProjectionService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_5__services__["c" /* Profile3DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["c" /* Profile3DService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_5__services__["f" /* ExportMapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["f" /* ExportMapService */]) === "function" && _u || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MousePositionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        __WEBPACK_IMPORTED_MODULE_1_openlayers__["Observable"].unByKey(this.listenerMove);
        this.map.getViewport().removeEventListener(this.outListener);
        this.onPointerOut();
        this.outListener = null;
        this.listenerMove = null;
    };
    MousePositionComponent.prototype.onPointerMove = function (e) {
        var c25830 = e.coordinate.map(function (c) { return c.toFixed(3); });
        var c4258 = __WEBPACK_IMPORTED_MODULE_1_openlayers__["proj"].transform(c25830, this.proj25830, this.proj4258).map(function (c) { return +c.toFixed(5); });
        c4258 = __WEBPACK_IMPORTED_MODULE_1_openlayers__["coordinate"]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_openlayers__["Map"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_openlayers__["Map"]) === "function" && _a || Object)
], MousePositionComponent.prototype, "map", void 0);
MousePositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mouse-position',
        template: __webpack_require__(1294),
        styles: [__webpack_require__(1266)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services__["d" /* ProjectionService */]],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('collapsed', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '0px',
                    width: '0px',
                    transform: 'translateX(-0.5em)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '100%',
                    width: '100%',
                    transform: 'translateX(-1em)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('invisible => visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('visible => invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-out'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["d" /* ProjectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["d" /* ProjectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
], MousePositionComponent);

var _a, _b, _c;
//# sourceMappingURL=mouse-position.component.js.map

/***/ }),

/***/ 1237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(loading, snackbar, profileService, zone) {
        this.loading = loading;
        this.snackbar = snackbar;
        this.profileService = profileService;
        this.zone = zone;
        this.active = false;
        this.opened = false;
        this.events = [];
        this.dataChartArray = [];
        this.loadLayers();
        this.loadInteraction();
    }
    ProfileComponent.prototype.loadLayers = function () {
        this.pointLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector(),
            style: [
                new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                    /*image: new ol.style.Icon({
                      src: 'https://rawcdn.githack.com/google/material-design-icons/master/maps/svg/production/ic_add_location_48px.svg'
                    })*/
                    image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Circle({
                        radius: 5,
                        stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                            color: '#000'
                        }),
                        fill: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Fill({ color: '#f7f7f7' })
                    })
                })
            ]
        });
        this.drawProfileLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector(),
            style: [
                new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                    stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                        color: [48, 63, 159],
                        width: 1,
                    })
                })
            ]
        });
        //this.pointLayer.set('showInLayerSwitcher', false);
        //this.drawProfileLayer.set('showInLayerSwitcher', false);
        //this.drawProfileLayer.set('name', 'DrawProfileLayer');
        //this.pointLayer.set('name', 'PointProfileLayer');
    };
    ProfileComponent.prototype.loadInteraction = function () {
        this.drawProfileInteraction = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Draw({
            type: 'LineString',
            source: this.drawProfileLayer.getSource()
        });
    };
    ProfileComponent.prototype.setActive = function (value) {
        if (value) {
            this.enableDraw();
            this.active = true;
            this.snackbar.open('Dibuja un perfil', 'CERRAR');
        }
        else {
            this.disableDraw();
            this.active = false;
            if (this.snackbar._openedSnackBarRef) {
                this.snackbar._openedSnackBarRef.dismiss();
            }
        }
    };
    ProfileComponent.prototype.enableDraw = function () {
        var _this = this;
        var drawStart = this.drawProfileInteraction.on('drawstart', function (e) {
            _this.drawProfileLayer.getSource().clear();
            _this.drawProfileLayer.getSource().changed();
            _this.pointLayer.getSource().clear();
            _this.pointLayer.getSource().changed();
            _this.profileGeom = null;
            var feature = e.feature;
            feature.getGeometry().on('change', function () {
                var length = (feature.getGeometry().getLength() || 0).toFixed(3);
                if (!_this.snackbar._openedSnackBarRef) {
                    _this.snackbar.open("Perfil dibujado : " + length + " metros", 'CERRAR');
                }
                else {
                    _this.snackbar._openedSnackBarRef.instance.message = "Perfil dibujado : " + length + " metros";
                }
            });
        });
        var drawEnd = this.drawProfileInteraction.on('drawend', function (e) {
            _this.zone.run(function () { return _this.loading.setValue(true); });
            _this.profileService.getProfile(e.feature).subscribe(function (res) {
                _this.zone.run(function () {
                    if (_this.snackbar._openedSnackBarRef) {
                        _this.snackbar._openedSnackBarRef.dismiss();
                    }
                    console.log(res, 'ddddd');
                    console.log(res.json());
                    _this.profileGeom = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].LineString(res.json().coordinates, 'XYZ');
                    _this.setProfile();
                    _this.loading.setValue(false);
                });
            }, function (err) {
                _this.loading.setValue(false);
            });
        });
        this.events.push(drawStart, drawEnd);
        //this.map.addLayer(this.drawProfileLayer);
        //this.map.addLayer(this.pointLayer);
        this.drawProfileLayer.setMap(this.map);
        this.pointLayer.setMap(this.map);
        this.map.addInteraction(this.drawProfileInteraction);
    };
    ProfileComponent.prototype.disableDraw = function () {
        this.events.forEach(function (e) { __WEBPACK_IMPORTED_MODULE_2_openlayers__["Observable"].unByKey(e); });
        this.drawProfileLayer.getSource().clear();
        this.pointLayer.getSource().clear();
        //this.map.removeLayer(this.drawProfileLayer);
        //this.map.removeLayer(this.pointLayer);
        this.drawProfileLayer.setMap(null);
        this.pointLayer.setMap(null);
        this.map.removeInteraction(this.drawProfileInteraction);
        this.profileGeom = null;
        this.events = [];
    };
    ProfileComponent.prototype.setOpened = function (bool) {
        this.opened = bool;
    };
    ProfileComponent.prototype.saveInstance = function (chartInstance) {
        var _this = this;
        this.chart = chartInstance;
        //console.log(this.chart.options);
        //this.chart.options = this.options;
        if (this.chart.series[0])
            this.chart.series[0].remove();
        this.chart.addSeries({ name: 'Perfil', data: this.dataChartArray });
        setTimeout(function () {
            _this.chart.reflow();
            //this.chart.redraw();
        }, 500);
    };
    ProfileComponent.prototype.setProfile = function () {
        var _this = this;
        if (!this.profileGeom)
            return;
        this.dataChartArray = [];
        var wgs84Sphere = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Sphere"](6378137);
        var profile3D = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
            geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].LineString(this.profileGeom.getCoordinates().map(function (c) { return c.slice(0, 2); }))
        });
        this.drawProfileLayer.getSource().clear();
        this.drawProfileLayer.getSource().addFeature(profile3D);
        // [ [dist, cota],... ]
        this.dataChartArray = [];
        var dist = 0;
        var points = this.profileGeom.getCoordinates();
        //console.log('last', this.profileGeom.getLastCoordinate())
        this.dataChartArray.push([dist, points[0][2]]);
        for (var i = 0; i < points.length - 1; i++) {
            //console.log('pooooint', points[i])
            //this.dataChartArray.push([dist, points[i][2]]);
            var p = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].transform(points[i], this.map.getView().getProjection(), 'EPSG:4326');
            var next = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].transform(points[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
            dist += wgs84Sphere.haversineDistance(p, next);
            this.dataChartArray.push([dist, points[i + 1][2]]);
        }
        //console.log(dist, points[points.length - 1], i, points.length, points[i]);
        //console.log(this.dataChartArray);
        this.setOpened(true);
        if (this.chart) {
            if (this.chart.series[0])
                this.chart.series[0].remove();
            this.zone.run(function () {
                _this.chart.addSeries({ name: 'Perfil', data: _this.dataChartArray });
                setTimeout(function () {
                    _this.chart.reflow();
                    //this.chart.redraw();
                }, 500);
                _this.map.render();
            });
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.options = {
            title: { text: 'Perfil seleccionado' },
            chart: { zoomType: 'x' },
            series: [
                { name: 'Perfil', data: this.dataChartArray }
            ]
        };
    };
    ProfileComponent.prototype.onDeselectProfile = function () {
        this.pointLayer.getSource().clear();
        this.pointLayer.getSource().changed();
    };
    ProfileComponent.prototype.onSelectProfile = function (event) {
        var dist = event.context.x;
        var coordinate = this.getClosestPointToDistance(dist);
        var featurePoint = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
            geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(coordinate)
        });
        //console.log(coordinate);
        this.pointLayer.getSource().clear();
        this.pointLayer.getSource().addFeature(featurePoint);
        this.pointLayer.getSource().changed();
        var view = this.map.getView();
        this.map.once('postcompose', function () { return view.fit(featurePoint.getGeometry(), { duration: 100, maxZoom: 15 }); });
    };
    ProfileComponent.prototype.getClosestPointToDistance = function (distance) {
        var wgs84Sphere = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Sphere"](6378137);
        var coords = this.profileGeom.getCoordinates();
        var distance_ = 0;
        if (distance == 0)
            return coords[0];
        for (var i = 0; i < coords.length - 1; i++) {
            var p = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].transform(coords[i], this.map.getView().getProjection(), 'EPSG:4326');
            var next = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].transform(coords[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
            distance_ += wgs84Sphere.haversineDistance(p, next);
            //console.log(distance_, distance);
            if (distance_ >= distance) {
                //console.log('i + 1', i + 1, coords[i + 1]);
                return coords[i + 1];
            }
        }
    };
    ProfileComponent.prototype.downloadProfile = function () {
        this.chart.exportChart({
            filename: 'perfil'
        });
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map'),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2_openlayers__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_openlayers__).Map) === "function" && _a || Object)
], ProfileComponent.prototype, "map", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-profile',
        template: __webpack_require__(1295),
        styles: [__webpack_require__(1267)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services__["c" /* Profile3DService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services__["c" /* Profile3DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["c" /* Profile3DService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_pipes_src_object_keys_pipe__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchComponentDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var basenameFn = function (path) { return path.split(/[\\/]/).pop(); };
var SearchInteraction;
(function (SearchInteraction) {
    SearchInteraction[SearchInteraction["Point"] = 1] = "Point";
    SearchInteraction[SearchInteraction["Box"] = 2] = "Box";
})(SearchInteraction || (SearchInteraction = {}));
var SearchComponent = (function () {
    function SearchComponent(snackbar, dialog, zone, userLayerService, loading) {
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.zone = zone;
        this.userLayerService = userLayerService;
        this.loading = loading;
        this.state = 'invisible';
        this.closeState = 'invisible';
        this.active = false;
        this.activeInteraction = null;
        this.boxInteraction = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["interaction"].DragBox();
        this.geojsonParser = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["format"].GeoJSON();
        this.searchLayer = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["source"].Vector()
        });
        this.selectedTabIndex = 0;
        this.boxInteraction.on('boxend', this.boxHandler.bind(this));
        this.searchLayer.set('name', 'SearchLayer');
        this.searchLayer.set('showInLayerSwitcher', false);
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        //this.map.addLayer(this.searchLayer);
    };
    SearchComponent.prototype.clickHandler = function (e) {
        var point = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["geom"].Point(e.coordinate);
        var feature = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["Feature"](point);
        this.search(feature);
    };
    SearchComponent.prototype.boxHandler = function () {
        var box = this.boxInteraction.getGeometry();
        var feature = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["Feature"](box);
        this.search(feature);
    };
    SearchComponent.prototype.openDialog = function (newSearch) {
        var _this = this;
        if (!this.found)
            return;
        this.state = 'invisible';
        this.closeState = 'visible';
        //this.dialogCollapsed = false;
        var dialogRef = this.dialogRef = this.dialog.open(SearchComponentDialog);
        dialogRef.componentInstance.found = this.found;
        dialogRef.componentInstance.tabIndex = newSearch ? 0 : this.selectedTabIndex;
        dialogRef.afterClosed().subscribe(function () {
            //this.dialogCollapsed = true;
            _this.selectedTabIndex = dialogRef.componentInstance.tabIndex;
            _this.closeState = 'invisible';
            _this.state = 'visible';
        });
        dialogRef.componentInstance.rowClicked.subscribe(function (data) {
            if (!data)
                return;
            console.log('rowClicked -- ', data);
            var feature = _this.geojsonParser.readFeature(data, {
                dataProjection: _this.map.getView().getProjection(),
                featureProjection: _this.map.getView().getProjection()
            });
            _this.searchLayer.getSource().clear();
            _this.searchLayer.getSource().addFeature(feature);
            _this.searchLayer.getSource().changed();
            _this.dialogRef.close();
            var view = _this.map.getView();
            console.log(feature.getGeometry(), 'geom');
            view.fit(feature.getGeometry(), {
                duration: 1000,
                maxZoom: 15
            });
        });
    };
    SearchComponent.prototype.search = function (feature) {
        var _this = this;
        //this.addLayer();
        this.zone.run(function () { _this.loading.setValue(true); _this.dialog.closeAll(); });
        var layerNames = this.getActiveLayers();
        //console.log('layerNAmes', layerNames)
        this.userLayerService.getFeatures(feature, layerNames).subscribe(function (data) {
            _this.zone.run(function () {
                _this.selectedTabIndex = 0;
                _this.loading.setValue(false);
                var features = data
                    .filter(function (f) { return f.found.features; });
                features
                    .forEach(function (d) { return d.found.features.forEach(function (f) { return f.properties.data_urls = (f.properties.data_urls || []).map(function (du) { return du.url; }); }); });
                //features.forEach(f => console.log(f.layername))
                if (!features.length) {
                    _this.snackbar.open('No se encontraron features', null, { duration: 2000 });
                    return setTimeout(function () {
                        var msg = _this.activeInteraction == SearchInteraction.Point ? 'Haz click' : 'Dibuja un recuadro';
                        _this.snackbar.open(msg + " para realizar la b\u00FAsqueda", 'CERRAR');
                    }, 2000);
                }
                _this.found = features;
                _this.map.render();
                //console.log(features, 'featurrees');
                _this.openDialog(true);
            });
        }, function (err) {
            _this.zone.run(function () { _this.loading.setValue(false); });
        });
    };
    SearchComponent.prototype.getActiveLayers = function () {
        var layerNames = [];
        this.map.getLayers().forEach(function (l) {
            if (!l.get('layers') || !l.get('visible'))
                return;
            l.get('layers').forEach(function (al) {
                //console.log('layer', al.get('type'), al.get('visible'), al.getVisible())
                if (al.get('visible') && al.get('type') == 'layer') {
                    layerNames.push(al.get('name'));
                }
            });
        });
        return layerNames;
    };
    SearchComponent.prototype.setActive = function (value, interaction) {
        if (!value) {
            this.active = false;
            this.found = null;
            this.selectedTabIndex = 0;
            this.activeInteraction = null;
            this.map.removeInteraction(this.boxInteraction);
            __WEBPACK_IMPORTED_MODULE_1_openlayers__["Observable"].unByKey(this.clickInteraction);
            this.searchLayer.getSource().clear();
            //this.dialogCollapsed = false;
            this.snackbar._openedSnackBarRef ? this.snackbar._openedSnackBarRef.dismiss() : '';
            //this.map.removeLayer(this.searchLayer);
            this.searchLayer.setMap(null);
            this.state = 'invisible';
            this.closeState = 'invisible';
        }
        else {
            if (!interaction)
                return;
            this.active = true;
            this.setInteraction(interaction);
            this.addLayer();
        }
    };
    SearchComponent.prototype.addLayer = function () {
        this.searchLayer.setMap(this.map);
    };
    SearchComponent.prototype.setInteraction = function (interaction) {
        var msg = interaction == SearchInteraction.Point ? 'Haz click' : 'Dibuja un recuadro';
        this.snackbar.open(msg + " para realizar la b\u00FAsqueda", 'CERRAR');
        //console.log(interaction, this.activeInteraction, SearchInteraction.Point, SearchInteraction.Box, 'slsjlsk');
        if (interaction == this.activeInteraction)
            return;
        if (interaction == SearchInteraction.Point) {
            this.map.removeInteraction(this.boxInteraction);
            this.clickInteraction = this.map.on('singleclick', this.clickHandler.bind(this));
            this.activeInteraction = SearchInteraction.Point;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_openlayers__["Observable"].unByKey(this.clickInteraction);
            this.map.addInteraction(this.boxInteraction);
            this.activeInteraction = SearchInteraction.Box;
        }
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_openlayers__["Map"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_openlayers__["Map"]) === "function" && _a || Object)
], SearchComponent.prototype, "map", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: "\n    <button [@buttonVisible]=\"state\" (click)=\"openDialog()\" md-mini-fab style=\"z-index : 1002; position : absolute; bottom: 0.5em; left : 0.5em;\"><md-icon>search</md-icon></button>\n    <button [@buttonCloseVisible]=\"closeState\" (click)=\"close()\"      md-mini-fab style=\"z-index : 1002; position : absolute; top : 0.5em; right : 0.5em;\"><md-icon>close</md-icon></button>\n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_7__services__["b" /* UserLayersService */], __WEBPACK_IMPORTED_MODULE_4_angular_pipes_src_object_keys_pipe__["a" /* KeysPipe */]],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('buttonVisible', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    display: 'none',
                    left: 'calc(100% - 0.5em - 40px)',
                    bottom: 'calc(100% - 0.5em - 40px)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    display: '',
                    left: '0.5em',
                    bottom: '0.5em'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('invisible => visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('visible => invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('buttonCloseVisible', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    display: 'none',
                    right: 'calc(100% - 0.5em - 40px)',
                    top: 'calc(100% - 0.5em - 40px)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    display: '',
                    right: '0.5em',
                    top: '0.5em'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('invisible => visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('visible => invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services__["b" /* UserLayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services__["b" /* UserLayersService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _f || Object])
], SearchComponent);

var SearchComponentDialog = (function () {
    function SearchComponentDialog(zone, dialog) {
        this.zone = zone;
        this.dialog = dialog;
        this.rowClicked = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
    }
    SearchComponentDialog.prototype.ngOnInit = function () {
        //console.log('oninit');
        this.dtElement.dtOptions = this.getTableOptions(this.tabIndex);
        var subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtElement.dtTrigger = subject;
    };
    SearchComponentDialog.prototype.ngAfterViewInit = function () {
        //console.log('AfterViewInit');
        this.dtElement.dtTrigger.next();
        this.addRowClickListener();
    };
    SearchComponentDialog.prototype.addRowClickListener = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            var table = _this.table.nativeElement;
            var tabIndex = _this.tabIndex;
            var data = _this.found[tabIndex];
            var rowClicked = _this.rowClicked;
            dtInstance
                .on('click', '.see-map', function () {
                try {
                    var row_dom = $(this).closest('tr');
                    //console.log('row_dom', row_dom);
                    //if(!row_dom) return;
                    var row_1 = $(table).DataTable().row(row_dom).data();
                    //console.log('row', row);
                    var feature = data.found.features.find(function (f) { return f.properties.gid == row_1.gid; });
                    rowClicked.next(feature);
                }
                catch (e) {
                    console.log(e);
                }
            });
        });
    };
    SearchComponentDialog.prototype.close = function () {
        this.dialog.close();
    };
    SearchComponentDialog.prototype.onChangeTab = function (event) {
        var _this = this;
        this.tabIndex = event.index;
        //console.log(event);
        //this.dtOptions = this.getTableOptions(event.index);
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            $(_this.table.nativeElement).empty();
            _this.dtElement.dtOptions = _this.getTableOptions(event.index);
            _this.dtElement.dtTrigger.next();
            _this.addRowClickListener();
        });
    };
    SearchComponentDialog.prototype.getTableOptions = function (index) {
        var features = this.found[index].found.features;
        var data = features.map(function (feature) { return feature.properties || {}; });
        var columns = [
            { title: 'Ver en Mapa', defaultContent: "\n        <button md-button class=\"mat-button see-map\">\n          <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">map</md-icon>\n        </button>\n      " }
        ].concat(Object.keys(features[0].properties).map(function (key) { return ({ title: key, data: key }); }));
        //console.log('FEATURES - ', features, 'DATA - ', data, 'COLUMNS - ', columns);
        var renderData = function (data, type, row) {
            if (!data)
                return '';
            var _data = data;
            if (!Array.isArray(data))
                _data = [data];
            return _data.map(function (url) {
                if (url.match(/\.jpg|\.jpeg|\.png|\.bmp|\.ico|\.gif|\.svg/))
                    return "<img src=\"" + url + "\" style=\"max-width : 50px; max-height : 50px;margin-left : 5px;\" >";
                return "<a target=\"_blank\" download=\"" + basenameFn(url) + "\" href=\"" + url + "\" style=\"margin-left : 5px;\">" + basenameFn(url) + "</a><br>";
            }).join('');
        };
        var indexData = Object.keys(features[0].properties).indexOf('data_urls');
        return {
            scrollX: true,
            scrollY: false,
            scrollCollapse: true,
            data: data, columns: columns,
            columnDefs: [
                { render: renderData, targets: -1 }
            ],
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            }
        };
    };
    return SearchComponentDialog;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_datatables__["b" /* DataTableDirective */]),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["b" /* DataTableDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["b" /* DataTableDirective */]) === "function" && _g || Object)
], SearchComponentDialog.prototype, "dtElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object)
], SearchComponentDialog.prototype, "table", void 0);
SearchComponentDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1296),
        styles: [__webpack_require__(1268)],
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */]) === "function" && _k || Object])
], SearchComponentDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ChartSeriesComponent_1 = __webpack_require__(1211);
var ChartXAxisComponent_1 = __webpack_require__(1212);
var ChartYAxisComponent_1 = __webpack_require__(1213);
var HighchartsService_1 = __webpack_require__(539);
var initChart_1 = __webpack_require__(1244);
var createBaseOpts_1 = __webpack_require__(1241);
var ChartComponent = (function () {
    function ChartComponent(element, highchartsService) {
        this.create = new core_1.EventEmitter();
        this.click = new core_1.EventEmitter();
        this.addSeries = new core_1.EventEmitter();
        this.afterPrint = new core_1.EventEmitter();
        this.beforePrint = new core_1.EventEmitter();
        this.drilldown = new core_1.EventEmitter();
        this.drillup = new core_1.EventEmitter();
        this.load = new core_1.EventEmitter();
        this.redraw = new core_1.EventEmitter();
        this.selection = new core_1.EventEmitter();
        this.type = 'Chart';
        this.element = element;
        this.highchartsService = highchartsService;
    }
    Object.defineProperty(ChartComponent.prototype, "options", {
        set: function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ChartComponent.prototype.init = function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart_1.initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.baseOpts = createBaseOpts_1.createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.element.nativeElement);
        this.init();
    };
    return ChartComponent;
}());
__decorate([
    core_1.ContentChild(ChartSeriesComponent_1.ChartSeriesComponent),
    __metadata("design:type", ChartSeriesComponent_1.ChartSeriesComponent)
], ChartComponent.prototype, "series", void 0);
__decorate([
    core_1.ContentChild(ChartXAxisComponent_1.ChartXAxisComponent),
    __metadata("design:type", ChartXAxisComponent_1.ChartXAxisComponent)
], ChartComponent.prototype, "xAxis", void 0);
__decorate([
    core_1.ContentChild(ChartYAxisComponent_1.ChartYAxisComponent),
    __metadata("design:type", ChartYAxisComponent_1.ChartYAxisComponent)
], ChartComponent.prototype, "yAxis", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "create", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "addSeries", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "afterPrint", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "beforePrint", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "drilldown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "drillup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "load", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "redraw", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "selection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ChartComponent.prototype, "options", null);
ChartComponent = __decorate([
    core_1.Component({
        selector: 'chart',
        template: '&nbsp;',
        providers: [HighchartsService_1.HighchartsService],
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, HighchartsService_1.HighchartsService])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map

/***/ }),

/***/ 1240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ChartEvent = (function () {
    function ChartEvent(event, context) {
        this.originalEvent = event;
        this.context = context;
    }
    return ChartEvent;
}());
exports.ChartEvent = ChartEvent;
//# sourceMappingURL=ChartEvent.js.map

/***/ }),

/***/ 1241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ChartEvent_1 = __webpack_require__(1240);
var chartEvents = [
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];
var seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];
var pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
var xAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var yAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
function createBaseOpts(chartCmp, seriesCmp, pointCmp, xAxisCmp, yAxisCmp, element) {
    var opts = {
        chart: {
            renderTo: element,
            events: {}
        },
        plotOptions: {
            series: {
                events: {},
                point: {
                    events: {}
                }
            }
        },
        xAxis: {
            events: {}
        },
        yAxis: {
            events: {}
        }
    };
    chartEvents.forEach(function (eventName) {
        opts.chart.events[eventName] = opts.chart.events[eventName] || function (event) {
            chartCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
        };
    });
    if (seriesCmp) {
        seriesEvents.forEach(function (eventName) {
            opts.plotOptions.series.events[eventName] = opts.plotOptions.series.events[eventName] || function (event) {
                seriesCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (pointCmp) {
        pointEvents.forEach(function (eventName) {
            opts.plotOptions.series.point.events[eventName] = opts.plotOptions.series.point.events[eventName] || function (event) {
                pointCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (xAxisCmp) {
        xAxisEvents.forEach(function (eventName) {
            opts.xAxis.events[eventName] = opts.xAxis.events[eventName] || function (event) {
                xAxisCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (yAxisCmp) {
        yAxisEvents.forEach(function (eventName) {
            opts.yAxis.events[eventName] = opts.yAxis.events[eventName] || function (event) {
                yAxisCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    return opts;
}
exports.createBaseOpts = createBaseOpts;
//# sourceMappingURL=createBaseOpts.js.map

/***/ }),

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }
    return Object(val);
}
function assignKey(to, from, key) {
    var val = from[key];
    if (val === undefined || val === null) {
        return;
    }
    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }
    if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
    }
    else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}
function assign(to, from) {
    if (to === from) {
        return to;
    }
    from = Object(from);
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }
    return to;
}
function deepAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}
exports.deepAssign = deepAssign;
//# sourceMappingURL=deepAssign.js.map

/***/ }),

/***/ 1243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ChartComponent_1 = __webpack_require__(1239);
exports.ChartComponent = ChartComponent_1.ChartComponent;
var ChartSeriesComponent_1 = __webpack_require__(1211);
exports.ChartSeriesComponent = ChartSeriesComponent_1.ChartSeriesComponent;
var ChartPointComponent_1 = __webpack_require__(1210);
exports.ChartPointComponent = ChartPointComponent_1.ChartPointComponent;
var ChartXAxisComponent_1 = __webpack_require__(1212);
exports.ChartXAxisComponent = ChartXAxisComponent_1.ChartXAxisComponent;
var ChartYAxisComponent_1 = __webpack_require__(1213);
exports.ChartYAxisComponent = ChartYAxisComponent_1.ChartYAxisComponent;
var HighchartsService_1 = __webpack_require__(539);
var CHART_DIRECTIVES = [
    ChartComponent_1.ChartComponent,
    ChartSeriesComponent_1.ChartSeriesComponent,
    ChartPointComponent_1.ChartPointComponent,
    ChartXAxisComponent_1.ChartXAxisComponent,
    ChartYAxisComponent_1.ChartYAxisComponent
];
var ChartModule = ChartModule_1 = (function () {
    function ChartModule() {
    }
    ChartModule.forRoot = function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule_1,
            providers: [
                { provide: HighchartsService_1.HighchartsStatic, useValue: highchartsStatic }
            ]
        };
    };
    return ChartModule;
}());
ChartModule = ChartModule_1 = __decorate([
    core_1.NgModule({
        declarations: [CHART_DIRECTIVES],
        exports: [CHART_DIRECTIVES]
    })
], ChartModule);
exports.ChartModule = ChartModule;
var ChartModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var deepAssign_1 = __webpack_require__(1242);
function initChart(highchartsService, userOpts, baseOpts, type) {
    var Highcharts = highchartsService.getHighchartsStatic();
    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.init');
    }
    if (!Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
    }
    if (Array.isArray(userOpts.xAxis)) {
        baseOpts.xAxis = [baseOpts.xAxis];
    }
    if (Array.isArray(userOpts.yAxis)) {
        baseOpts.yAxis = [baseOpts.yAxis];
    }
    var opts = deepAssign_1.deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}
exports.initChart = initChart;
//# sourceMappingURL=initChart.js.map

/***/ }),

/***/ 1245:
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1243));

/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".group {\n    transition: all 1s cubic-bezier(.39,.575,.565,1);\n}\n\n.collapsed {\n    display : none;\n    height: 0px;\n}\n\n.list-item.collapsed {\n    display : none;\n    height: 0px;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n\n.group .list-item {\n    padding-left: 15px;\n    background: #f7f7f7;\n    border-radius: 0px;\n}\n\n.content .actions {\n    display : block;\n    min-height: 50px;\n}\n\n.actions button {\n    min-width: 20px !important;\n}\n\n.buttons {\n    display : block;\n    max-width: 50px;\n    max-height: 50px;\n    float : right;\n}\n\n.buttons button {\n    float : right;\n    display : block;\n    min-width: 30px !important;\n}\n\n.list {\n    height: auto;\n}\n\n.list-item {\n    min-height: 100px;\n    height : auto;\n    background: #fff;\n    padding : 5px;\n    margin-bottom : 10px;\n    box-shadow: 0 0px 4px 0 rgba(0,0,0,.3);\n    border-radius: 2px;\n    margin-left : 10px;\n    margin-right: 10px;\n}\n\nmd-slider {\n    display: block;\n    width: 85%;\n    min-width: 105px;\n}\n\n.layer-toggle {\n    max-width: 20%;\n    display: inline-block;\n}\n\n.layer-name {\n    display: inline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".example-container {\n  width: 100%;\n  height: 100%;\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n\n.burguer {\n    box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\n    left: 0.5em;\n    position : absolute;\n    z-index: 1;\n    top: 50%;\n    transition: all .5s cubic-bezier(.39,.575,.565,1);\n    transition: -webkit-transform .4s cubic-bezier(.25,.8,.25,1);\n    transition: transform .4s cubic-bezier(.25,.8,.25,1);\n    transition : transform .4s cubic-bezier(.25,.8,.25,1), -webkit-transform .4s cubic-bezier(.25,.8,.25,1)\n}\n\nmd-sidenav {\n    width: 75vw;\n    min-width: 75vw;\n    background: #f7f7f7;\n}\nmd-sidenav-container {\n    bottom: 0px;\n}\n\n#map {\n    transition: -webkit-transform .4s cubic-bezier(.25,.8,.25,1);\n    transition: transform .4s cubic-bezier(.25,.8,.25,1);\n    transition : transform .4s cubic-bezier(.25,.8,.25,1), -webkit-transform .4s cubic-bezier(.25,.8,.25,1)\n}\n\n.overview-map {\n    width: 95%;\n    height: 30vh;\n    margin: 0px auto;\n    transition-property: height;\n    transition-duration: 0.6s;\n}\n\n.list, \n.list-button {\n    transition-property: height;\n    transition-duration: 0.6s;\n}\n\n.overview-map .ol-viewport {\n    border-radius: 4px;\n}\n\n.burguer-expanded {\n    margin-left: calc(75vw + 20px);\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    z-index: 3;\n}\n\n@media only screen and (min-width:600px){\n    md-sidenav {\n        width: 35vw;\n        min-width: 35vw;\n    }\n\n    .burguer-expanded {\n        margin-left: calc(35vw + 20px);\n    }\n\n    .map-expanded {\n        margin-left: calc(35vw + 40px);\n    }\n\n    .mat-sidenav-opened ~ .burguer {\n        left : calc(35vw - 10px);\n    }\n}\n\n.collapsed {\n    height: 0px;\n}\n\n.list-button {\n    background: #fff;\n    margin : 5px auto;\n    min-width: 95%;\n    display: block;\n    box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\n    text-align: left;\n\n}\n\n.list-button  md-icon {\n    margin-right: 10px;\n}\n\n.list-button.main {\n    background: #673ab7;\n    color: #fff;\n}\n\nmd-toolbar {\n    position : relative !important;\n}\n\n.separator {\n    border-top: 1px dashed #000;\n    padding-top: 5px;\n    -webkit-filter: blur(2px);\n            filter: blur(2px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "p {\n    color : #fff;\n    width : 100%;\n    margin : 0 auto;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".mouse-position-container {\n    position: absolute;\n    pointer-events: none;\n    right: 0.5em;\n    bottom: 0.5em;\n    height: auto;\n    width : 100%;\n    max-height: 130px;\n    max-width: 130px;\n    background: rgba(255, 255, 255, 0.50);\n    border-radius: 2px;\n    z-index : 1;\n    padding: 10px;\n    box-shadow: 2px 8px 12px 8px rgba(0,0,0,0.2);\n    overflow: hidden;\n}\n\nmd-grid-tile {\n    font-size: 0.85em;\n}\n\nmd-grid-tile.title {\n    font-size: 0.7em;\n    font-weight: bold;\n    color : #fff;\n    background: rgba(103, 58, 183, 0.3);\n}\n\n.mouse-position-button {\n    position : absolute; \n    right : 0.5em; \n    bottom : 0.5em;\n    z-index: 2;\n}\n\n.mouse-position-button {\n    background: #f7f7f7;\n}\n\n.mouse-position-button.active {\n    background:  #673ab7;\n}\n\n.mouse-position-button md-icon {\n    color : #000;\n}\n\n.mouse-position-button.active md-icon {\n    color : #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "#profile-container {\n    -webkit-box-flex : 1;\n        -ms-flex : 1 1 auto;\n            flex : 1 1 auto;\n    max-width: 100%;\n    height: 0px;\n    position: absolute;\n    bottom: 0px;\n    right: 0.5em;\n    left: 0.5em;\n    z-index: 2;\n    overflow: hidden;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    background: #fff;\n    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.3);\n}\n\n#profile-container.opened {\n    height: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1273));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var TruncateCharactersPipe = (function () {
    function TruncateCharactersPipe() {
    }
    TruncateCharactersPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    return TruncateCharactersPipe;
}());
TruncateCharactersPipe = __decorate([
    core_1.Pipe({
        name: 'truncate'
    })
], TruncateCharactersPipe);
exports.TruncateCharactersPipe = TruncateCharactersPipe;
//# sourceMappingURL=truncate-characters.pipe.js.map

/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var TruncateWordsPipe = (function () {
    function TruncateWordsPipe() {
    }
    TruncateWordsPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        var result = value;
        if (value) {
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    return TruncateWordsPipe;
}());
TruncateWordsPipe = __decorate([
    core_1.Pipe({
        name: 'words'
    })
], TruncateWordsPipe);
exports.TruncateWordsPipe = TruncateWordsPipe;
//# sourceMappingURL=truncate-words.pipe.js.map

/***/ }),

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var truncate_characters_pipe_1 = __webpack_require__(1271);
var truncate_words_pipe_1 = __webpack_require__(1272);
var TruncateModule = (function () {
    function TruncateModule() {
    }
    return TruncateModule;
}());
TruncateModule = __decorate([
    core_1.NgModule({
        declarations: [truncate_characters_pipe_1.TruncateCharactersPipe, truncate_words_pipe_1.TruncateWordsPipe],
        exports: [truncate_characters_pipe_1.TruncateCharactersPipe, truncate_words_pipe_1.TruncateWordsPipe]
    })
], TruncateModule);
exports.TruncateModule = TruncateModule;
//# sourceMappingURL=truncate.module.js.map

/***/ }),

/***/ 1289:
/***/ (function(module, exports) {

module.exports = "<md-card style=\"margin : -15px;\">\n  <!--<div [style.background]=\"'url(' + userDetail.gravatar + ')'\" class=\"user-avatar\"></div>-->\n  <md-card-header>\n    <md-card-title>Nuevo grupo de Capas WMS</md-card-title>\n    <md-card-subtitle>Añade capas de un servicio WMS</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <md-input-container style=\"width : 100%;\">\n      <input mdInput [(ngModel)]=\"serviceUrl\" placeholder=\"url del servidor o capabilities\"  value=\"\">\n    </md-input-container>\n    <button [disabled]=\"capas\" md-button (click)=\"getCapabilities()\" style=\"width : 100%;\">OBTENER CAPAS</button>\n    <button *ngIf=\"capas\" md-button (click)=\"reset()\" style=\"width : 100%;\">LIMPIAR CAMPOS</button>\n    <div *ngIf=\"error\" class=\"error-msg\">{{error}}</div>\n    <md-list *ngIf=\"capas\" style=\"height : 150px; overflow-y: scroll;\">\n      <h3 md-subheader>Capas del servicio</h3>\n      <md-list-item *ngFor=\"let capa of capas\">\n        <md-checkbox (change)=\"onChangeCheckbox($event, capa.Name)\">{{capa.Name}}</md-checkbox>\n      </md-list-item>\n    </md-list>\n  </md-card-content>\n  <md-card-actions>\n    <button (click)=\"closeWithData()\" md-button *ngIf=\"capasSeleccionadas.length\">AÑADIR CAPAS</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 1290:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<md-card *ngIf=\"controlActive\" style=\"position : absolute; bottom: 0.5em; left : 0.5em;\">\n    <md-select [(ngModel)]=\"layerName\" placeholder=\"Selecciona capa\" (change)=\"layerChanged($event)\">\n        <md-option *ngFor=\"let capa of getEditableLayers()\" [value]=\"capa.get('name')\">{{ capa.get('name') }}</md-option>\n    </md-select>\n    <md-select [disabled]=\"!editingLayer\" [(ngModel)]=\"action\" placeholder=\"Selecciona acción\" (change)=\"actionChanged($event)\">\n        <md-option [disabled]=\"getActionDisable(action.action)\" *ngFor=\"let action of actions\" [value]=\"action.action\">\n            {{action.text}}\n        </md-option>\n    </md-select>\n</md-card>\n"

/***/ }),

/***/ 1291:
/***/ (function(module, exports) {

module.exports = "<div #mapsDetailsContainer *ngIf=\"map && map.getLayers()\" class=\"list\" [dragula]='\"layers\"' [dragulaModel]='map.getLayers().getArray()'>\n  <div [@collapsed]=\"getDisplay(layer)\" class=\"list-item\"  *ngFor=\"let layer of map.getLayers().getArray(); let i = index; \">\n    <div class=\"buttons\">\n      <button md-button \n        *ngIf=\"i > 0\" \n        (click)= \"moveLayerDown(i)\"><md-icon>keyboard_arrow_up</md-icon></button>\n      <button md-button *ngIf=\"i < getLengthWithoutNotVisibleLayers() - 1\" (click)=\"moveLayerUp(i)\"><md-icon>keyboard_arrow_down</md-icon></button>\n    </div>\n    <div class=\"content\">\n      <md-slide-toggle \n        class=\"layer-toggle\"\n        (change)=\"changeVisible($event, i)\" \n        [checked]=\"layer.getVisible()\"\n      >\n      </md-slide-toggle>\n      <span\n        class=\"layer-name\"\n        mdTooltipPosition=\"above\"\n        [mdTooltip]=\"layer.get('name')\" \n      >\n        {{ layer.get('name') | truncate : maxLayerNameLength }}\n      </span>\n      <md-slider (input)=\"changeOpacity($event, i)\" step=\"0.05\" [min]=\"0\" [max]=\"1\" [value]=\"layer.getOpacity()\">\n      </md-slider>\n      <div class=\"actions\" [style.display]=\"getDisplay(layer)\">\n        <div class=\"separator\"></div>\n        <button *ngIf=\"layer.get('layers') && layer.get('layers').getArray().length\" md-button (click)=\"layer.set('collapsed', layer.get('collapsed') === 'invisible' ? 'visible' : 'invisible' )\">\n          <md-icon *ngIf=\" layer.get('collapsed') == 'invisible' \">keyboard_arrow_down</md-icon>\n          <md-icon *ngIf=\" layer.get('collapsed') == 'visible' \">keyboard_arrow_up</md-icon>\n        </button>\n        <button \n          md-button\n          *ngIf=\"layer.get('removable') === true\"\n          (click)=\"map.removeLayer(layer)\"\n        >\n          <md-icon>remove_circle_outline</md-icon>\n        </button>\n        <!--<button md-button><md-icon>zoom_out_map</md-icon></button>-->\n        <!--<button md-button><md-icon>map</md-icon></button>-->\n        <button md-button class=\"handle\" style=\"float : right;\"><md-icon>drag_handle</md-icon></button>\n      </div>\n    </div>\n    <div [@collapsed]=\"layer.get('collapsed')\" #group class=\"group\">\n      <div *ngIf=\"layer.get('layers')\" [dragula]='\"layerGroup\"' [dragulaModel]=\"layer.get('layers').getArray()\">\n        <div class=\"list-item\" [style.opacity]=\"getOpacity(layer_)\" *ngFor=\"let layer_ of layer.get('layers').getArray(); let j = index\">\n          <div class=\"buttons\">\n            <button *ngIf=\"j > 0\" md-icon-button (click)=\"moveLayerInGroupDown(i, j)\"><md-icon>keyboard_arrow_up</md-icon></button>\n            <button *ngIf=\"j < layer.get('layers').getArray().length - 1\" md-icon-button (click)=\"moveLayerInGroupUp(i, j)\"><md-icon>keyboard_arrow_down</md-icon></button>\n          </div>\n          <div class=\"content\">\n            <md-slide-toggle \n              class=\"layer-toggle\"\n              (change)=\"changeVisibleGroupLayer($event, i, j)\" \n              [checked]=\"layer_.getVisible()\"\n            >\n            </md-slide-toggle>\n            <span\n              class=\"layer-name\"\n              mdTooltipPosition=\"above\"\n              [mdTooltip]=\"layer_.get('name')\" \n            >\n              {{ layer_.get('name') | truncate : maxLayerNameLength }}\n            </span>\n            <md-slider (input)=\"changeOpacityGroupLayer($event, i, j)\" step=\"0.05\" [min]=\"0\" [max]=\"1\" [value]=\"layer_.getOpacity()\">\n            </md-slider>\n            <div class=\"actions\">\n              <button md-icon-button *ngIf=\"layer_.get('service')\" class=\"separator\" [mdMenuTriggerFor]=\"menuLegend\"><md-icon>layers</md-icon></button>\n              <md-menu #menuLegend=\"mdMenu\">\n                <img src=\"{{layer_.get('service') + '?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=' + layer_.get('name')}}\"  alt=\"\">\n              </md-menu>\n              <!--<button md-button><md-icon>info</md-icon></button>-->\n              <button md-icon-button *ngIf=\"layer_.get('rol') == 'e' ||  layer_.get('rol') == 'd' \"><md-icon>mode_edit</md-icon></button>\n              <!--<button md-button><md-icon>zoom_out_map</md-icon></button>-->\n              <!--<button md-button><md-icon>map</md-icon></button>-->\n              <button md-icon-button class=\"handleGroup\" style=\"float : right;\"><md-icon>drag_handle</md-icon></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 1292:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<button\n  md-mini-fab class=\"burguer\" \n  [ngClass]=\"{'burguer-expanded': sidenav.opened }\"\n  (click)=\"sidenav.opened ? sidenav.close() : sidenav.open();\">\n  <md-icon>add</md-icon>\n</button>\n<md-sidenav-container [@routerTransition]=\"\" class=\"example-container\">\n  <md-sidenav #sidenav class=\"example-sidenav\">\n\n    <button md-button class=\"list-button main\" (click)=\"toggleTools()\">\n      <md-icon>apps</md-icon>HERRAMIENTAS\n    </button>\n    <div [@collapsed]=\"toolsControlVisible\">\n      <button md-button class=\"list-button\" (click)=\"toggleProfileControl()\" [style.background-color]=\"getBackgroundColor(profileControl.active)\">\n        <md-icon>terrain</md-icon>PERFIL\n      </button>\n      <button md-button (click)=\"toggleSearchControl(1)\" class=\"list-button\" [style.background-color]=\"getBackgroundColor(searchControl.active && searchControl.activeInteraction == 1)\">\n        <md-icon>search</md-icon>BÚSQUEDA POR PUNTO\n      </button>\n      <button md-button (click)=\"toggleSearchControl(2)\" class=\"list-button\" [style.background-color]=\"getBackgroundColor(searchControl.active && searchControl.activeInteraction == 2)\">\n        <md-icon>search</md-icon>BÚSQUEDA POR ENCUADRE\n      </button>\n      <button md-button (click)=\"toggleMeasureControl(1)\" class=\"list-button\" [style.background-color]=\"getBackgroundColor(measureControl.active && measureControl.activeInteraction == 1)\">\n        <md-icon>trending_flat</md-icon>MEDIR PERÍMETRO\n      </button>\n      <button md-button (click)=\"toggleMeasureControl(2)\" class=\"list-button\" [style.background-color]=\"getBackgroundColor(measureControl.active && measureControl.activeInteraction == 2)\">\n        <md-icon>branding_watermark</md-icon>MEDIR ÁREA\n      </button>\n      <button md-button [disabled]=\"editLayerControl.getEditableLayers().length <= 0\" (click)=\"toggleEditLayers()\" class=\"list-button\" [style.background-color]=\"getBackgroundColor(editLayerControl.controlActive)\">\n        <md-icon>mode_edit</md-icon>EDITAR CAPAS\n      </button>\n    </div>\n\n    <button md-button class=\"list-button main\" (click)=\"toggleMaps()\">\n      <md-icon>layers</md-icon>MAPAS\n    </button>\n    <!-- control de capas -->\n    <md-select [@collapsed]=\"mapsControlVisible\" placeholder=\"Mapa actual\" (change)=\"onChangeMap()\" [(ngModel)]=\"actualMap\" style=\"margin-top : 20px; margin-left : 2.5%; width : 95%;\">\n      <md-option *ngFor=\"let map of accesibleMaps\" [value]=\"map.id\">{{ map.name }}</md-option>\n    </md-select>\n    <app-layer-switcher [@collapsed]=\"mapsControlVisible\" [visibility]=\"mapsControlVisible\" [map]=\"map\" (layersChanged)=\"updateMapAndOverview()\"></app-layer-switcher>\n    <!-- END control de capas -->\n    <button md-button class=\"list-button main\" (click)=\"toggleOverview()\">\n      <md-icon>map</md-icon>MINIATURA\n    </button>\n    <div [@collapsed]=\"overviewControlVisible\" #overviewMap class=\"overview-map\"></div>\n    <button md-button class=\"list-button main\" (click)=\"exportMap($event)\" download=\"mapa.pdf\">\n      <md-icon>file_download</md-icon>DESCARGAR MAPA\n    </button>\n\n    <button md-button class=\"list-button main\" (click)=\"openWMSDialog()\">\n      <md-icon>map</md-icon>AÑADIR WMS\n    </button>\n\n  </md-sidenav>\n  <div id=\"map\" #mapEl class=\"example-sidenav-content\"\n    [ngClass]=\"{ 'map-expanded': sidenav.opened }\" \n  >    \n  </div>\n\n  <app-map-profile\n    [map]=\"map\"\n  ></app-map-profile>\n\n  <app-search [map]=\"map\"></app-search>\n\n  <app-measure [map]=\"map\"></app-measure>\n\n  <app-mouse-position [map]=\"map\"></app-mouse-position>\n\n  <app-edit-layer [map]=\"map\"></app-edit-layer>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ 1293:
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"measure && interactionType == 1 && measure >= 100\">\n    Perímetro : {{(Math.round(measure / 1000 * 100) / 100)}} km\n</p>\n<p *ngIf=\"measure && interactionType == 1 && measure < 100\">\n    Perímetro : {{(Math.round(measure * 100) / 100)}} km\n</p>\n<p *ngIf=\"measure && interactionType == 2 && measure >= 10000\">\n    Área : {{(Math.round(measure / 1000000 * 100) / 100)}} km<sup>2</sup>\n</p>\n<p *ngIf=\"measure && interactionType == 2 && measure < 10000\">\n    Área : {{(Math.round(measure * 100) / 100)}} m<sup>2</sup>\n</p>\n<p *ngIf=\"!measure && interactionType == 1\">Medir Perímetro</p>\n<p *ngIf=\"!measure && interactionType == 2\">Medir Área</p>"

/***/ }),

/***/ 1294:
/***/ (function(module, exports) {

module.exports = "<button #btnToggle md-mini-fab (click)=\"toggleControl()\" class=\"mouse-position-button\" >\n  <md-icon *ngIf=\"containerVisibility == 'invisible' && active\">close</md-icon>\n  <md-icon *ngIf=\"containerVisibility == 'visible' || !active\">pin_drop</md-icon>\n</button>\n<div #mousePosition class=\"mouse-position-container\" [@collapsed]=\"containerVisibility\">\n  <md-grid-list cols=\"1\" rowHeight=\"20px\" *ngIf=\"coordinate25830 && coordinate4258\">\n    <md-grid-tile\n        class=\"title\"\n        style=\"max-height: 15px;\"\n        colspan=1\n        [rowspan]=1\n    >\n      ETRS89 UTM HUSO 30\n    </md-grid-tile>\n    <md-grid-tile\n        *ngIf=\"coordinate25830\"\n        colspan=1\n        [rowspan]=1\n    >\n      <span style=\"position : absolute; left: 0px;\">X : {{coordinate25830[0]}}</span>\n    </md-grid-tile>\n\n    <md-grid-tile\n        *ngIf=\"coordinate25830\"\n        colspan=1\n        [rowspan]=1\n    >\n      <span style=\"position : absolute; left: 0px;\">Y : {{coordinate25830[1]}}</span>\n    </md-grid-tile>\n    <md-grid-tile\n        *ngIf=\"coordinate4258\"\n        colspan=1\n        [rowspan]=1\n    >\n      <span style=\"position : absolute; left: 0px;\">λ : {{coordinate4258[0]}}</span>\n    </md-grid-tile>\n    <md-grid-tile\n        *ngIf=\"coordinate4258\"\n        colspan=1\n        [rowspan]=1\n    >\n     <span style=\"position : absolute; left: 0px;\">φ : {{coordinate4258[1]}}</span>\n    </md-grid-tile>\n\n  </md-grid-list>\n</div>"

/***/ }),

/***/ 1295:
/***/ (function(module, exports) {

module.exports = "<div\n    id=\"profile-container\"\n    [ngClass]=\"{'opened' : profileGeom  && opened }\"\n>\n    <chart (load)=\"saveInstance($event.context)\" [options]=\"options\">\n        <series>\n            <point (mouseOver)=\"onSelectProfile($event)\" (mouseOut)=\"onDeselectProfile()\"></point>\n        </series>\n    </chart>\n</div>\n<button\n    (click)=\"setOpened(true)\"\n    *ngIf=\"profileGeom && !opened\"\n    md-mini-fab style=\"position : absolute; left : 0.5em; bottom : 0.5em;z-index : 2;\"\n>\n    <md-icon>terrain</md-icon>\n</button>\n<button\n(click)=\"setOpened(false)\"\n    *ngIf=\"profileGeom && opened\"\n    md-mini-fab style=\"position : absolute; left : 0.5em; bottom : 0.5em;z-index : 2;\"\n>\n    <md-icon>close</md-icon>\n</button>"

/***/ }),

/***/ 1296:
/***/ (function(module, exports) {

module.exports = "<md-tab-group id=\"search-tab\" (selectChange)=\"onChangeTab($event)\" [selectedIndex]=\"tabIndex\">\n  <md-tab label=\"{{search.layername}}\" *ngFor=\"let search of found\"> \n  </md-tab>\n</md-tab-group>\n<div md-dialog-content>\n  <table #table datatable class=\"mdl-data-table\" style=\"width : 100%;\">\n  </table>\n</div>\n\n<div md-dialog-actions>\n  <button md-button md-dialog-close=\"\">Cerrar</button>\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map