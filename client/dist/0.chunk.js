webpackJsonp([0,7],{

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_pipes__ = __webpack_require__(1196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components__ = __webpack_require__(1193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var adminRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__components__["a" /* AdminComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components__["b" /* AdminHomeComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_11__components__["c" /* AdminUsersComponent */] },
            { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_11__components__["d" /* AdminUserDetailsComponent */] },
            { path: 'maps/new/map', component: __WEBPACK_IMPORTED_MODULE_11__components__["e" /* AdminMapsNewMapComponent */] },
            { path: 'maps/edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__components__["f" /* AdminMapsEditComponent */] },
            { path: 'maps/new/default', component: __WEBPACK_IMPORTED_MODULE_11__components__["g" /* AdminMapsNewDefaultMapComponent */] },
            { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_11__components__["h" /* AdminMapsComponent */] },
            { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_11__components__["i" /* AdminGroupsComponent */] },
            { path: 'layers', component: __WEBPACK_IMPORTED_MODULE_11__components__["j" /* AdminLayersComponent */] },
            { path: 'layers/new/layer', component: __WEBPACK_IMPORTED_MODULE_11__components__["k" /* AdminLayersNewLayerComponent */] },
            { path: 'layers/new/baselayer', component: __WEBPACK_IMPORTED_MODULE_11__components__["l" /* AdminLayersNewBaselayerComponent */] },
            { path: 'mail', component: __WEBPACK_IMPORTED_MODULE_11__components__["m" /* AdminMailComponent */] },
            { path: '**', redirectTo: 'home' }
        ]
    }];
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__components__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["c" /* AdminUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["i" /* AdminGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["h" /* AdminMapsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["j" /* AdminLayersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["m" /* AdminMailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["d" /* AdminUserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["b" /* AdminHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["k" /* AdminLayersNewLayerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["l" /* AdminLayersNewBaselayerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["e" /* AdminMapsNewMapComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["g" /* AdminMapsNewDefaultMapComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["f" /* AdminMapsEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["n" /* AdminGroupEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components__["o" /* AdminLayerEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__services__["b" /* ConfirmDialogComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9_ng2_loading_animate__["LoadingAnimateService"],
            __WEBPACK_IMPORTED_MODULE_10__services__["c" /* ConfirmDialogService */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTablesModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_pipes__["a" /* NgMathPipesModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_loading_animate__["LoadingAnimateModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(adminRoutes)
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__components__["n" /* AdminGroupEditComponent */], __WEBPACK_IMPORTED_MODULE_11__components__["o" /* AdminLayerEditComponent */], __WEBPACK_IMPORTED_MODULE_10__services__["b" /* ConfirmDialogComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

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

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_service__ = __webpack_require__(1232);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_service__["a"]; });

//# sourceMappingURL=index.js.map

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

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            }
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error("Attribute 'name' is required on <ckbutton>");
        if (!this.command)
            throw new Error("Attribute 'command' is required on <ckbutton>");
    };
    return CKButtonDirective;
}());
CKButtonDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ckbutton'
            },] },
];
/** @nocollapse */
CKButtonDirective.ctorParameters = function () { return []; };
CKButtonDirective.propDecorators = {
    'click': [{ type: core_1.Output },],
    'label': [{ type: core_1.Input },],
    'command': [{ type: core_1.Input },],
    'toolbar': [{ type: core_1.Input },],
    'name': [{ type: core_1.Input },],
    'icon': [{ type: core_1.Input },],
};
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

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

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_home_admin_home_component__ = __webpack_require__(1219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_home_admin_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin_component__ = __webpack_require__(1231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__admin_admin_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_layers_admin_layers_component__ = __webpack_require__(1223);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__admin_layers_admin_layers_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_mail_admin_mail_component__ = __webpack_require__(1224);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__admin_mail_admin_mail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_maps_admin_maps_component__ = __webpack_require__(1228);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__admin_maps_admin_maps_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_users_admin_users_component__ = __webpack_require__(1230);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__admin_users_admin_users_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_user_details_admin_user_details_component__ = __webpack_require__(1229);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__admin_user_details_admin_user_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_layers_new_layer_admin_layers_new_layer_component__ = __webpack_require__(1222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__admin_layers_new_layer_admin_layers_new_layer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_layers_new_baselayer_admin_layers_new_baselayer_component__ = __webpack_require__(1221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__admin_layers_new_baselayer_admin_layers_new_baselayer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_maps_new_map_admin_maps_new_map_component__ = __webpack_require__(1227);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__admin_maps_new_map_admin_maps_new_map_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_maps_new_default_map_admin_maps_new_default_map_component__ = __webpack_require__(1226);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__admin_maps_new_default_map_admin_maps_new_default_map_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_groups_admin_groups_component__ = __webpack_require__(1218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__admin_groups_admin_groups_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_maps_edit_admin_maps_edit_component__ = __webpack_require__(1225);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_12__admin_maps_edit_admin_maps_edit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_layer_edit_admin_layer_edit_component__ = __webpack_require__(1220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__admin_layer_edit_admin_layer_edit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_group_edit_admin_group_edit_component__ = __webpack_require__(1217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_14__admin_group_edit_admin_group_edit_component__["a"]; });















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

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ckbutton_directive_1 = __webpack_require__(1191);
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return button.toolbar = _this.name; });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    return CKGroupDirective;
}());
CKGroupDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ckgroup'
            },] },
];
/** @nocollapse */
CKGroupDirective.ctorParameters = function () { return []; };
CKGroupDirective.propDecorators = {
    'name': [{ type: core_1.Input },],
    'previous': [{ type: core_1.Input },],
    'subgroupOf': [{ type: core_1.Input },],
    'toolbarButtons': [{ type: core_1.ContentChildren, args: [ckbutton_directive_1.CKButtonDirective,] },],
};
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

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

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(28);
var ckbutton_directive_1 = __webpack_require__(1191);
var ckgroup_directive_1 = __webpack_require__(1205);
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this._value = '';
        this.zone = zone;
    }
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        // Configuration
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function () {
                _this.onTouched();
                var value = _this.instance.getData();
                // Debounce update
                if (_this.debounce) {
                    if (_this.debounceTimeout)
                        clearTimeout(_this.debounceTimeout);
                    _this.debounceTimeout = setTimeout(function () {
                        _this.updateValue(value);
                        _this.debounceTimeout = null;
                    }, parseInt(_this.debounce));
                    // Live update
                }
                else {
                    _this.updateValue(value);
                }
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return CKEditorComponent;
}());
CKEditorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ckeditor',
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(function () { return CKEditorComponent; }),
                        multi: true
                    }
                ],
                template: "<textarea #host></textarea>",
            },] },
];
/** @nocollapse */
CKEditorComponent.ctorParameters = function () { return [
    { type: core_1.NgZone, },
]; };
CKEditorComponent.propDecorators = {
    'config': [{ type: core_1.Input },],
    'readonly': [{ type: core_1.Input },],
    'debounce': [{ type: core_1.Input },],
    'change': [{ type: core_1.Output },],
    'ready': [{ type: core_1.Output },],
    'blur': [{ type: core_1.Output },],
    'focus': [{ type: core_1.Output },],
    'host': [{ type: core_1.ViewChild, args: ['host',] },],
    'toolbarButtons': [{ type: core_1.ContentChildren, args: [ckbutton_directive_1.CKButtonDirective,] },],
    'toolbarGroups': [{ type: core_1.ContentChildren, args: [ckgroup_directive_1.CKGroupDirective,] },],
    'value': [{ type: core_1.Input },],
};
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__(1269);
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__(1214);
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__(1191);
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__(1205);
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGroupEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGroupEditComponent = (function () {
    function AdminGroupEditComponent(loading, adminService, dialogRef) {
        this.loading = loading;
        this.adminService = adminService;
        this.dialogRef = dialogRef;
    }
    AdminGroupEditComponent.prototype.ngOnInit = function () { };
    AdminGroupEditComponent.prototype.ngAfterViewInit = function () { };
    AdminGroupEditComponent.prototype.changeGroupName = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.updateGroup(this.groupData.id, this.groupData.name).subscribe(function () {
            _this.loading.setValue(false);
            _this.dialogRef.close('OK');
        });
    };
    return AdminGroupEditComponent;
}());
AdminGroupEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-group-edit',
        template: __webpack_require__(1274),
        styles: [__webpack_require__(1246)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services__["a" /* AdminService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _c || Object])
], AdminGroupEditComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-group-edit.component.js.map

/***/ }),

/***/ 1218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_datatables__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminGroupsComponent = (function () {
    function AdminGroupsComponent(confirm, loading, dialogRef, adminService) {
        this.confirm = confirm;
        this.loading = loading;
        this.dialogRef = dialogRef;
        this.adminService = adminService;
        this.dtOptions = {
            scrollX: true,
            scrollY: '50vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/groups',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Editar',
                    defaultContent: "\n          <button md-button class=\"mat-button edit-group\">\n            <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n          </button>"
                },
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-group\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
            ]
        };
    }
    AdminGroupsComponent.prototype.ngOnInit = function () { };
    AdminGroupsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            _this.dtInstance = dtInstance;
            dtInstance.on('click', '.remove-group', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar el grupo " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteGroup(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        dtInstance.ajax.reload();
                    });
                });
            });
            dtInstance.on('click', '.edit-group', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.openEditGroupNameDialog(row);
            });
        });
    };
    AdminGroupsComponent.prototype.createGroup = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.createGroup(this.newGroupName).subscribe(function () {
            _this.loading.setValue(false);
            _this.dtInstance.ajax.reload();
            _this.newGroupName = null;
        });
    };
    AdminGroupsComponent.prototype.openEditGroupNameDialog = function (groupData) {
        var _this = this;
        var dialog = this.dialogRef.open(__WEBPACK_IMPORTED_MODULE_3____["n" /* AdminGroupEditComponent */]);
        dialog.componentInstance.groupData = groupData;
        dialog.afterClosed().subscribe(function (data) {
            if (data)
                _this.dtInstance.ajax.reload();
        });
    };
    return AdminGroupsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_datatables__["b" /* DataTableDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["b" /* DataTableDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["b" /* DataTableDirective */]) === "function" && _a || Object)
], AdminGroupsComponent.prototype, "datatableElement", void 0);
AdminGroupsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-groups',
        template: __webpack_require__(1275),
        styles: [__webpack_require__(1247)],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services__["c" /* ConfirmDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["c" /* ConfirmDialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */]) === "function" && _e || Object])
], AdminGroupsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-groups.component.js.map

/***/ }),

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-home',
        template: __webpack_require__(1276),
        styles: [__webpack_require__(1248)]
    }),
    __metadata("design:paramtypes", [])
], AdminHomeComponent);

//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayerEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLayerEditComponent = (function () {
    function AdminLayerEditComponent(loading, adminService, dialogRef) {
        this.loading = loading;
        this.adminService = adminService;
        this.dialogRef = dialogRef;
    }
    AdminLayerEditComponent.prototype.ngOnInit = function () { };
    AdminLayerEditComponent.prototype.changeLayerName = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.updateLayerName(this.layerData.name, this.newName).subscribe(function () {
            _this.loading.setValue(false);
            _this.dialogRef.close('OK');
        });
    };
    return AdminLayerEditComponent;
}());
AdminLayerEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-layer-edit',
        template: __webpack_require__(1277),
        styles: [__webpack_require__(1249)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services__["a" /* AdminService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _c || Object])
], AdminLayerEditComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-layer-edit.component.js.map

/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_services__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayersNewBaselayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayersNewBaselayerComponent = (function () {
    function AdminLayersNewBaselayerComponent(loading, capabilitiesService, adminService) {
        this.loading = loading;
        this.capabilitiesService = capabilitiesService;
        this.adminService = adminService;
        this.capasSeleccionadas = [];
        this.serviceURLInputDisabled = false;
    }
    AdminLayersNewBaselayerComponent.prototype.ngOnInit = function () {
    };
    AdminLayersNewBaselayerComponent.prototype.onChangeCheckbox = function (event, name) {
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
    AdminLayersNewBaselayerComponent.prototype.getCapabilities = function () {
        var _this = this;
        if (!this.serviceUrl) {
            this.error = 'Debe añadir la url del servicio';
        }
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var url = this.serviceUrl.replace(extract, '') + '?service=WMS&request=GetCapabilities';
        this.loading.setValue(true);
        this.capabilitiesService.getCapabilities(url).subscribe(function (layers) {
            _this.loading.setValue(false);
            _this.error = null;
            _this.capas = layers.json();
            _this.serviceURLInputDisabled = true;
        }, function (error) {
            _this.loading.setValue(false);
            _this.error = error.json();
        });
    };
    AdminLayersNewBaselayerComponent.prototype.addBaseLayer = function () {
        var _this = this;
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var serviceURL = this.serviceUrl.replace(extract, '');
        var layers = this.capasSeleccionadas.map(function (l) { return l.Name; });
        //console.log(serviceURL);
        this.loading.setValue(true);
        this.adminService.postBaseLayer(this.baselayerName, serviceURL, layers).subscribe(function () {
            _this.loading.setValue(false);
            _this.serviceUrl = '';
            _this.reset();
        }, function (err) {
            _this.loading.setValue(false);
            _this.error = err.json();
        });
    };
    AdminLayersNewBaselayerComponent.prototype.reset = function () {
        this.serviceURLInputDisabled = false;
        this.serviceUrl = '';
        this.capas = null;
        this.capasSeleccionadas = [];
    };
    return AdminLayersNewBaselayerComponent;
}());
AdminLayersNewBaselayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-layers-new-baselayer',
        template: __webpack_require__(1278),
        styles: [__webpack_require__(1250)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3__map_services__["a" /* WMSCapabilitiesService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__map_services__["a" /* WMSCapabilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__map_services__["a" /* WMSCapabilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AdminService */]) === "function" && _c || Object])
], AdminLayersNewBaselayerComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-layers-new-baselayer.component.js.map

/***/ }),

/***/ 1222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_pipes_src_math_bytes_pipe__ = __webpack_require__(1192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayersNewLayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayersNewLayerComponent = (function () {
    function AdminLayersNewLayerComponent(loading, adminService) {
        this.loading = loading;
        this.adminService = adminService;
        this.files = [];
        this.layerName = '';
        this.error = null;
    }
    AdminLayersNewLayerComponent.prototype.ngOnInit = function () { };
    AdminLayersNewLayerComponent.prototype.ngAfterViewInit = function () {
        this.dropzone.nativeElement.addEventListener('drop', this.handleFileSelect.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragover', this.handleDragOver.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
    };
    AdminLayersNewLayerComponent.prototype.onChange = function (event) {
        this.error = null;
        this.files = event.target.files;
    };
    AdminLayersNewLayerComponent.prototype.handleFileSelect = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
        this.files = evt.dataTransfer.files; // FileList object.
    };
    AdminLayersNewLayerComponent.prototype.handleDragOver = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        this.dropzone.nativeElement.style.opacity = '0.3';
    };
    AdminLayersNewLayerComponent.prototype.handleDragLeave = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
    };
    AdminLayersNewLayerComponent.prototype.uploadSHP = function () {
        var _this = this;
        this.error = null;
        var layerName = this.layerName;
        var formData = new FormData();
        var fileCount = this.files.length;
        if (fileCount == 0) {
            return;
        }
        for (var i = 0; i < fileCount; i++) {
            formData.append('shp[]', this.files.item(i));
        }
        this.loading.setValue(true);
        this.adminService.postLayer(formData, layerName).subscribe(function (data) {
            //console.log('Sa subio');
            _this.files = [];
            _this.layerName = '';
            _this.loading.setValue(false);
        }, function (error) {
            //console.log(error.json(), 'jsooon');
            _this.error = error.json().msg;
            _this.loading.setValue(false);
        });
    };
    return AdminLayersNewLayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropZone'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AdminLayersNewLayerComponent.prototype, "dropzone", void 0);
AdminLayersNewLayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-layers-new-layer',
        template: __webpack_require__(1279),
        styles: [__webpack_require__(1251)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2_angular_pipes_src_math_bytes_pipe__["a" /* BytesPipe */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AdminService */]) === "function" && _c || Object])
], AdminLayersNewLayerComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-layers-new-layer.component.js.map

/***/ }),

/***/ 1223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AdminLayersComponent = (function () {
    function AdminLayersComponent(confirm, loading, adminService, dialogRef, snackbar, location, router, route) {
        this.confirm = confirm;
        this.loading = loading;
        this.adminService = adminService;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        this.location = location;
        this.router = router;
        this.route = route;
        this.dtInstances = [];
        this.dtOptionsLayers = {
            scrollX: true,
            scrollY: '50vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/layers',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Editar',
                    defaultContent: "\n          <button md-button class=\"mat-button edit-layer\">\n            <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n          </button>"
                },
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-layer\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
                { title: 'OID', data: 'oid' },
                { title: 'Publicada GS', data: 'published' },
                {
                    title: 'Publicar/Eliminar de GS',
                    defaultContent: "\n          <button md-button class=\"mat-button publish-layer\">\n            <md-icon style=\"color : #00bbff\" class=\"material-icons mat-icon\">publish</md-icon>\n          </button>"
                },
            ]
        };
        this.dtOptionsBase = {
            scrollX: true,
            scrollY: '50vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/baselayers',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-baselayer\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
                { title: 'Capas', data: 'layers' },
                { title: 'URL', data: 'service_url' }
            ]
        };
    }
    AdminLayersComponent.prototype.ngOnInit = function () {
    };
    AdminLayersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //console.log('dtElements', this.dtElements);
        var self = this;
        this.dtElements._results[0].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-layer', function () {
                //self.loading.setValue(true);
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar la capa " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteLayer(row.name).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted');
                        dtInstance.ajax.reload();
                        self.snackbar.open("Capa " + row.name + " eliminada correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
            dtInstance.on('click', '.edit-layer', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.openEditLayerNameDialog(row);
            });
            dtInstance.on('click', '.publish-layer', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.publishLayer(row);
            });
        });
        this.dtElements._results[1].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-baselayer', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar la capa base que contiene las siguiente capas: " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteBaseLayer(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted baselayer')
                        dtInstance.ajax.reload();
                        self.snackbar.open("Capa Base " + row.id + " eliminada correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
        });
    };
    AdminLayersComponent.prototype.goToCreateLayerPage = function () {
        this.router.navigate(['./new', 'layer'], { relativeTo: this.route });
    };
    AdminLayersComponent.prototype.goToCreateBaseLayerPage = function () {
        this.router.navigate(['./new', 'baselayer'], { relativeTo: this.route });
    };
    AdminLayersComponent.prototype.openEditLayerNameDialog = function (layerData) {
        var _this = this;
        var dialog = this.dialogRef.open(__WEBPACK_IMPORTED_MODULE_6____["o" /* AdminLayerEditComponent */]);
        dialog.componentInstance.layerData = layerData;
        dialog.afterClosed().subscribe(function (data) {
            if (data)
                _this.dtInstances[0].ajax.reload();
        });
    };
    AdminLayersComponent.prototype.publishLayer = function (data) {
        var _this = this;
        var published = data.published, name = data.name;
        var obs;
        this.loading.setValue(true);
        if (published) {
            obs = this.adminService.unpublishLayer(name);
        }
        else {
            obs = this.adminService.publishLayer(name);
        }
        obs.subscribe(function () {
            _this.dtInstances[0].ajax.reload();
            _this.loading.setValue(false);
        });
    };
    return AdminLayersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_4_angular_datatables__["b" /* DataTableDirective */]),
    __metadata("design:type", Object)
], AdminLayersComponent.prototype, "dtElements", void 0);
AdminLayersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-layers',
        template: __webpack_require__(1280),
        styles: [__webpack_require__(1252)],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__services__["c" /* ConfirmDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services__["c" /* ConfirmDialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services__["a" /* AdminService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _h || Object])
], AdminLayersComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=admin-layers.component.js.map

/***/ }),

/***/ 1224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminMailComponent = (function () {
    function AdminMailComponent(loading, adminService) {
        var _this = this;
        this.loading = loading;
        this.adminService = adminService;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].forkJoin(this.adminService.getUsers().map(function (res) { return res.json(); }), this.adminService.getAllGroups().map(function (res) { return res.json(); })).subscribe(function (data) {
            var allUsers = data[0] || [];
            var allGroups = data[1] || [];
            //console.log(allUsers, allGroups);
            allUsers.forEach(function (u) { return u.selected = false; });
            _this.groupsAndUsers = allGroups.map(function (g) {
                return ({
                    id: g.id, name: g.name, opened: false, selected: false,
                    users: allUsers.filter(function (u) { return (u.groups || []).includes(g.name); })
                });
            });
            _this.groupsAndUsers.push({
                id: '-1', name: 'Usuarios sin grupo', opened: false, selected: false,
                users: allUsers.filter(function (u) { return !u.groups; })
            });
            //console.log(this.groupsAndUsers);
        }, function (err) {
        });
    }
    AdminMailComponent.prototype.ngOnInit = function () { };
    AdminMailComponent.prototype.sendMail = function () {
        var _this = this;
        //console.log(this.emailContent);
        this.loading.setValue(true);
        var destinators = this.groupsAndUsers.reduce(function (selectedUsers, group, index) {
            return selectedUsers.concat(group.users.filter(function (u) { return u.selected; }));
        }, [])
            .filter(function (email, index, arr) { return index == arr.indexOf(email); })
            .map(function (u) { return u.email; });
        //console.log(destinators, 'destinators');
        this.adminService.sendMail(this.emailTitle, encodeURIComponent(this.emailContent), destinators).subscribe(function () {
            _this.emailContent = '';
            _this.emailTitle = '';
            _this.groupsAndUsers.forEach(function (g) { return g.selected = false; });
            _this.groupsAndUsers.forEach(function (g) { return g.users.forEach(function (u) { return u.selected = false; }); });
            _this.loading.setValue(false);
            //console.log('Emails enviados');
        }, function (err) { });
    };
    AdminMailComponent.prototype.isSomeUserSelected = function () {
        return (this.groupsAndUsers || []).some(function (g) { return g.users.some(function (u) { return u.selected; }); });
    };
    AdminMailComponent.prototype.groupChanged = function (event, group) {
        group.users.forEach(function (u) { return u.selected = event.checked; });
    };
    AdminMailComponent.prototype.setEditorToolbar = function () {
        this.ckeditor.config.toolbar_Full = [
            { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'] },
            { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
            { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] },
            { name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
                    'HiddenField'] },
            '/',
            { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
            { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
                    '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },
            { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
            { name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
            '/',
            { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
            { name: 'colors', items: ['TextColor', 'BGColor'] },
            { name: 'tools', items: ['Maximize', 'ShowBlocks', '-', 'About'] }
        ];
        this.ckeditor.config.toolbar_Basic = [
            ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
        ];
    };
    return AdminMailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor__["CKEditorComponent"]),
    __metadata("design:type", Object)
], AdminMailComponent.prototype, "ckeditor", void 0);
AdminMailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-mail',
        template: __webpack_require__(1281),
        styles: [__webpack_require__(1253)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AdminService */]) === "function" && _b || Object])
], AdminMailComponent);

var _a, _b;
//# sourceMappingURL=admin-mail.component.js.map

/***/ }),

/***/ 1225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMapsEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminMapsEditComponent = (function () {
    function AdminMapsEditComponent(loading, zone, route, snackBar, dragulaService, adminService) {
        var _this = this;
        this.loading = loading;
        this.zone = zone;
        this.route = route;
        this.snackBar = snackBar;
        this.dragulaService = dragulaService;
        this.adminService = adminService;
        this.hasChangedOrder = false;
        this.getData();
        // Configurar Drag&Drop para que solo funcione apretando al botón
        this.dragulaService.setOptions('order', {
            moves: function (el, container, handle) { return handle.classList.contains('handle'); }
        });
        // Escuchamos al evento dropModel
        this.dragulaService.dropModel.subscribe(function () {
            // Asignamos la posición al parámetro position de cada capa
            _this.map.orden.forEach(function (c, i) { return c.position = i; });
            // Llamamos a la función compareOrder
            _this.compareOrder();
        });
    }
    AdminMapsEditComponent.prototype.ngOnInit = function () { };
    AdminMapsEditComponent.prototype.getData = function () {
        var _this = this;
        // Parámetros de la ruta
        var params = this.route.snapshot.params;
        //console.log(params.id);
        // Obtenemos el mapa
        __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.adminService.getAllLayers().map(function (res) { return res.json(); }), this.adminService.getAllBaseLayers().map(function (res) { return res.json(); }), this.adminService.getMapById(params.id).map(function (res) { return res.json(); }))
            .map(function (res) {
            var allLayers = res[0], allBaseLayers = res[1], map = res[2];
            //map = map[0];
            //console.log(res);
            _this.originalOrder = [];
            map.orden = (map.orden || []).sort(function (a, b) { return a.position - b.position; });
            map.orden.forEach(function (c) { c.id_map = params.id; _this.originalOrder.push(c); });
            //console.log(allLayers, 'allLayers', allBaseLayers, 'allBaseLayers', map, 'map');
            return [map, allLayers, allBaseLayers];
        }).subscribe(function (data) {
            _this.loading.setValue(false);
            var map = data[0], allLayers = data[1], allBaseLayers = data[2];
            var mapLayers = map.layers || [];
            var mapBaselayers = map.baselayers || [];
            //console.log('orden', map, 'allLayers', allLayers, 'allBaselayers', allBaseLayers);
            _this.map = map;
            _this.AllLayersNotInMap = allLayers.filter(function (l) { return !mapLayers.find(function (ll) { return l.id == ll.id; }); });
            _this.AllBaseLayersNotInMap = allBaseLayers.filter(function (l) { return !mapBaselayers.find(function (ll) { return l.id == ll.id; }); });
            //console.log(this.AllLayersNotInMap, this.AllBaseLayersNotInMap);
            //console.log(data, 'data');
        });
    };
    AdminMapsEditComponent.prototype.compareOrder = function () {
        var _this = this;
        var actualOrder = this.map.orden;
        //console.log('actual', actualOrder)
        //console.log(this.originalOrder);
        this.hasChangedOrder = !actualOrder.every(function (value, idx) { return value.id_layer == _this.originalOrder[idx].id_layer; });
    };
    AdminMapsEditComponent.prototype.getColor = function (capa) {
        return capa.layer_type == 'layer' ? '#ffbb00' : '#00bbff';
    };
    AdminMapsEditComponent.prototype.saveOrder = function () {
        var _this = this;
        var actualOrder = this.map.orden;
        var params = this.route.snapshot.params;
        this.loading.setValue(true);
        this.adminService.setMapOrder(params.id, actualOrder).subscribe(function () {
            _this.loading.setValue(false);
            //console.log('order saved');
            _this.originalOrder = [];
            _this.map.orden.forEach(function (c) { return _this.originalOrder.push(c); });
            _this.compareOrder();
            _this.snackBar.open('Orden guardado correctamente', 'CERRAR', { duration: 2500 });
        });
    };
    AdminMapsEditComponent.prototype.addSelectedLayer = function () {
        var _this = this;
        var id_layer = this.selectedLayerToAdd;
        //console.log(id_layer, '');
        var id_map = this.map.id;
        var layer = this.AllLayersNotInMap.find(function (l) { return l.id == id_layer; });
        this.loading.setValue(true);
        this.adminService.addLayerToMap(id_map, id_layer).subscribe(function () {
            _this.selectedLayerToAdd = null;
            /*
            let newLayer = { id_map, id_layer, position : this.map.orden.length, layer_type : 'layer', name : layer.name };
            this.AllLayersNotInMap = this.AllLayersNotInMap.filter( l => l.id != id_layer);
    
            this.map.orden.push(newLayer);
            this.originalOrder.push(newLayer);
            */
            _this.getData();
        });
    };
    AdminMapsEditComponent.prototype.deleteLayerFromMap = function (id_layer) {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.deleteMapLayer(this.map.id, id_layer).subscribe(function () {
            /*
            let capa = this.map.orden.find( c => c.id == id_layer && c.layer_type == 'layer');
            this.AllLayersNotInMap.push(Object.create(null, capa));
            //console.log(this.map.orden.filter( l => !(l.id == id_layer && l.layer_type == 'layer') ));
            this.map.orden = this.map.orden.filter( l => !(l.id_layer == id_layer && l.layer_type == 'layer') );
            this.map.orden.forEach( (c, i)=> c.position = i );
            this.originalOrder = this.originalOrder.filter( l => !(l.id_layer == id_layer && l.layer_type == 'layer') );
            console.log(capa)
            */
            _this.getData();
        });
    };
    AdminMapsEditComponent.prototype.deleteBaseLayerFromMap = function (id_layer) {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.deleteMapBaseLayer(this.map.id, id_layer).subscribe(function () {
            /*let capa = this.map.orden.find( c => c.id == id_layer && c.layer_type == 'base');
            this.AllBaseLayersNotInMap.push(Object.create(null, capa));
            //console.log(this.map.orden.filter( l => !(l.id == id_layer && l.layer_type == 'layer') ));
            this.map.orden = this.map.orden.filter( l => !(l.id_layer == id_layer && l.layer_type == 'base') );
            this.map.orden.forEach( (c, i)=> c.position = i );
            this.originalOrder = this.originalOrder.filter( l => !(l.id_layer == id_layer && l.layer_type == 'base') );
            */
            _this.getData();
        });
    };
    AdminMapsEditComponent.prototype.addSelectedBaseLayer = function () {
        var _this = this;
        this.loading.setValue(true);
        var id_layer = this.selectedBaseLayerToAdd;
        var id_map = this.map.id;
        var layer = this.AllBaseLayersNotInMap.find(function (l) { return l.id == id_layer; });
        this.adminService.addBaseLayerToMap(id_map, id_layer).subscribe(function () {
            _this.selectedBaseLayerToAdd = null;
            /*let newLayer = { id_map, id_layer, position : this.map.orden.length, layer_type : 'base', name : layer.name };
            this.AllBaseLayersNotInMap = this.AllBaseLayersNotInMap.filter( l => l.id != id_layer);
    
            this.map.orden.push(newLayer);
            this.originalOrder.push(newLayer);*/
            _this.getData();
        });
    };
    return AdminMapsEditComponent;
}());
AdminMapsEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-maps-edit',
        template: __webpack_require__(1282),
        styles: [__webpack_require__(1254)],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */]) === "function" && _f || Object])
], AdminMapsEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=admin-maps-edit.component.js.map

/***/ }),

/***/ 1226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMapsNewDefaultMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminMapsNewDefaultMapComponent = (function () {
    function AdminMapsNewDefaultMapComponent(loading, snackbar, adminService, location) {
        this.loading = loading;
        this.snackbar = snackbar;
        this.adminService = adminService;
        this.location = location;
        this.allMapsNotDefault = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.adminService.getAllMaps().map(function (res) { return res.json(); }), this.adminService.getAllDefaultMaps().map(function (res) { return res.json(); })).map(function (maps) {
            var allMaps = maps[0] || [];
            var defultMaps = maps[1] || [];
            return allMaps.filter(function (map) { return !defultMaps.find(function (dmap) { return map.id == dmap.id; }); });
        });
        /*this.allMapsNotDefault.subscribe(
          (data)=>{
            console.log('data', data)
          }
        )*/
    }
    AdminMapsNewDefaultMapComponent.prototype.ngOnInit = function () { };
    AdminMapsNewDefaultMapComponent.prototype.createDefaultMap = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.createDefaultMap(this.selectedMap).subscribe(function () {
            _this.loading.setValue(false);
            _this.location.back();
        }, function (err) {
            _this.loading.setValue(false);
            _this.snackbar.open("Error : " + err.json().msg, 'CERRAR', {
                duration: 2000
            });
        });
    };
    return AdminMapsNewDefaultMapComponent;
}());
AdminMapsNewDefaultMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-maps-new-default-map',
        template: __webpack_require__(1283),
        styles: [__webpack_require__(1255)],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["a" /* AdminService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _d || Object])
], AdminMapsNewDefaultMapComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-maps-new-default-map.component.js.map

/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMapsNewMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminMapsNewMapComponent = (function () {
    function AdminMapsNewMapComponent(loading, snackbar, adminService, location) {
        this.loading = loading;
        this.snackbar = snackbar;
        this.adminService = adminService;
        this.location = location;
        this.mapName = '';
    }
    AdminMapsNewMapComponent.prototype.ngOnInit = function () { };
    AdminMapsNewMapComponent.prototype.createMap = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.createMap(this.mapName).subscribe(function () {
            _this.loading.setValue(false);
            _this.location.back();
        }, function (err) {
            _this.loading.setValue(false);
            _this.snackbar.open("Error : " + err.json(), 'CERRAR', {
                duration: 2000
            });
        });
    };
    return AdminMapsNewMapComponent;
}());
AdminMapsNewMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-maps-new-map',
        template: __webpack_require__(1284),
        styles: [__webpack_require__(1256)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AdminService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _d || Object])
], AdminMapsNewMapComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-maps-new-map.component.js.map

/***/ }),

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_datatables__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminMapsComponent = (function () {
    function AdminMapsComponent(confirm, loading, router, adminService, snackbar) {
        this.confirm = confirm;
        this.loading = loading;
        this.router = router;
        this.adminService = adminService;
        this.snackbar = snackbar;
        this.dtInstances = [];
        this.dtOptionsMaps = {
            scrollX: true,
            scrollY: '50vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/maps',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Editar',
                    defaultContent: "\n          <button md-button class=\"mat-button edit-map\">\n            <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n          </button>"
                },
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-map\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' }, { title: 'Nombre', data: 'name' }, { title: 'Capas', data: 'layers' }, { title: 'Capas Base', data: 'baselayers' }
            ],
            columnDefs: [{
                    render: function (data, type, row) {
                        return (data || []).length;
                    }, targets: [4, 5]
                }]
        };
        this.dtOptionsDefaultMaps = {
            scrollX: true,
            scrollY: '50vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/default-maps',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-default-map\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
            ]
        };
    }
    AdminMapsComponent.prototype.ngOnInit = function () {
    };
    AdminMapsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.dtElements._results[0].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-map', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar el mapa " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteMap(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted');
                        self.dtInstances.forEach(function (dtI) { return dtI.ajax.reload(); });
                        //dtInstance.ajax.reload();
                        self.snackbar.open("Mapa " + row.name + " eliminado correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
            dtInstance.on('click', '.edit-map', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.goToEditMap(row.id);
            });
        });
        this.dtElements._results[1].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-default-map', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("El mapa " + row.name + " dejar\u00E1 de ser visible por todos los usuarios. \u00BFEliminar como mapa por defecto?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteDefaultMap(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted baselayer')
                        dtInstance.ajax.reload();
                        self.snackbar.open("Mapa por defecto " + row.name + " eliminado correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
        });
    };
    AdminMapsComponent.prototype.goToCreateMap = function () {
        this.router.navigateByUrl('/admin/maps/new/map');
    };
    AdminMapsComponent.prototype.goToCreateDefaultMap = function () {
        this.router.navigateByUrl('/admin/maps/new/default');
    };
    AdminMapsComponent.prototype.goToEditMap = function (id) {
        this.router.navigateByUrl("/admin/maps/edit/" + id);
    };
    return AdminMapsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_2_angular_datatables__["b" /* DataTableDirective */]),
    __metadata("design:type", Object)
], AdminMapsComponent.prototype, "dtElements", void 0);
AdminMapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-maps',
        template: __webpack_require__(1285),
        styles: [__webpack_require__(1257)],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services__["c" /* ConfirmDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["c" /* ConfirmDialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdminService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _e || Object])
], AdminMapsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-maps.component.js.map

/***/ }),

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(1106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminUserDetailsComponent = (function () {
    function AdminUserDetailsComponent(loading, route, location, adminService) {
        this.loading = loading;
        this.route = route;
        this.location = location;
        this.adminService = adminService;
        this.getData();
    }
    AdminUserDetailsComponent.prototype.ngOnInit = function () { };
    AdminUserDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminUserDetailsComponent.prototype.getData = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].forkJoin(this.adminService.getUserDetail(params.id).map(function (res) { return res.json(); }), this.adminService.getAllGroups().map(function (res) { return res.json(); })).map(function (data) {
            var userDetail = data[0];
            userDetail.not_assigned_maps = userDetail.not_assigned_maps || [];
            userDetail.maps = userDetail.maps || [];
            var userGroups = userDetail.grupos || [];
            var allGroups = data[1] || [];
            return [userDetail, allGroups.filter(function (g) { return !userGroups.find(function (gg) { return g.id == gg.id; }); })];
        }).subscribe(function (data) {
            _this.loading.setValue(false);
            _this.userDetail = data[0];
            _this.allNotUserGroups = data[1];
        });
    };
    AdminUserDetailsComponent.prototype.addGroup = function () {
        var _this = this;
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        this.adminService.addUserGroup(params.id, this.selectedGroupToAdd).subscribe(function () {
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.deleteGroup = function (groupName) {
        var _this = this;
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        this.adminService.deleteUserGroup(params.id, groupName).subscribe(function () {
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.addUserMap = function () {
        var _this = this;
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        this.adminService.addUserMap(params.id, this.selectedMapToAdd).subscribe(function () {
            //let map = this.userDetail.not_assigned_maps.find( m => m.id == this.selectedMapToAdd );
            //console.log(map, 'map');
            //this.userDetail.maps.push(map);
            //this.userDetail.not_assigned_maps = this.userDetail.not_assigned_maps.filter( m => m.id != this.selectedMapToAdd );
            //console.log(map, 'map');
            //this.selectedMapToAdd = null;
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.deleteUserMap = function (map) {
        var _this = this;
        this.loading.setValue(true);
        //console.log(map);
        var params = this.route.snapshot.params;
        this.adminService.deleteUserMap(params.id, map.id).subscribe(function () {
            //this.userDetail.not_assigned_maps.push(map);
            //this.userDetail.maps = this.userDetail.maps.filter( m => m.id != map.id );
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.changeRolOfLayer = function (event, layer) {
        var _this = this;
        //console.log(event, layer);
        var params = this.route.snapshot.params;
        var id_user = params.id;
        var oldValue = layer.rol;
        var newValue = event.value;
        var query = null;
        if (oldValue == 'r') {
            /* Ejecutamos un insert PUT */
            query = this.adminService.insertUserRol(id_user, layer.id_layer, newValue);
        }
        else if (newValue == 'r') {
            /* Ejecutamos un delete */
            query = this.adminService.deleteUserRol(id_user, layer.id_layer);
        }
        else {
            /* Ejecutamos un Update */
            query = this.adminService.updateUserRol(id_user, layer.id_layer, newValue);
        }
        this.loading.setValue(true);
        query.subscribe(function () {
            layer.rol = newValue;
            _this.loading.setValue(false);
            //console.log('Actualizado correctamente');
        });
    };
    return AdminUserDetailsComponent;
}());
AdminUserDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-user-details',
        template: __webpack_require__(1286),
        styles: [__webpack_require__(1258)],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["a" /* AdminService */]) === "function" && _d || Object])
], AdminUserDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-user-details.component.js.map

/***/ }),

/***/ 1230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUsersComponent = (function () {
    function AdminUsersComponent(adminService, zone, router) {
        this.adminService = adminService;
        this.zone = zone;
        this.router = router;
        this.dtOptions = {
            scrollX: true,
            scrollY: '60vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/users',
                dataSrc: ''
            },
            columns: [{
                    title: 'Editar',
                    defaultContent: "\n        <button md-button class=\"mat-button edit-user\">\n          <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n        </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
                { title: 'Email', data: 'email' },
                { title: 'Rol', data: 'rol' },
                { title: 'Válido', data: 'valid' }
            ]
        };
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
    };
    AdminUsersComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.on('click', '.edit-user', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.router.navigate(["admin/users/", "" + row.id]);
            });
        });
    };
    return AdminUsersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTableDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTableDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTableDirective */]) === "function" && _a || Object)
], AdminUsersComponent.prototype, "datatableElement", void 0);
AdminUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-users',
        template: __webpack_require__(1287),
        styles: [__webpack_require__(1259)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object])
], AdminUsersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-users.component.js.map

/***/ }),

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_transitions__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent() {
        this.links = [
            { path: 'home', label: 'Home' },
            { path: 'users', label: 'Usuarios' },
            { path: 'maps', label: 'Mapas' },
            { path: 'layers', label: 'Capas' },
            { path: 'groups', label: 'Grupos' },
            { path: 'mail', label: 'Mail' }
        ];
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.ngAfterViewInit = function () {
        /*let toolbar = <HTMLElement>document.querySelector('md-toolbar');
        toolbar.style.boxShadow = 'none';*/
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(1288),
        styles: [__webpack_require__(1260)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 1232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.getAllLayers = function () {
        return this.http.get('/api/admin/layers');
    };
    AdminService.prototype.getAllBaseLayers = function () {
        return this.http.get('/api/admin/baselayers');
    };
    AdminService.prototype.getUsers = function () {
        return this.http.get('/api/admin/users');
    };
    AdminService.prototype.getUserDetail = function (id) {
        return this.http.get("/api/admin/users/" + id);
    };
    AdminService.prototype.getAllGroups = function () {
        return this.http.get('/api/admin/groups');
    };
    AdminService.prototype.getAllMaps = function () {
        return this.http.get('/api/admin/maps');
    };
    AdminService.prototype.getMapById = function (id) {
        return this.http.get("/api/admin/map/" + id);
    };
    AdminService.prototype.getAllDefaultMaps = function () {
        return this.http.get('/api/admin/default-maps');
    };
    AdminService.prototype.postLayer = function (formData, layerName) {
        var apiEndPoint = '/api/admin/layers';
        if (layerName)
            apiEndPoint += "?layerName=" + layerName;
        return this.http.post(apiEndPoint, formData);
    };
    AdminService.prototype.updateLayerName = function (old_name, new_name) {
        return this.http.put('/api/admin/layers', { old_name: old_name, new_name: new_name });
    };
    AdminService.prototype.deleteLayer = function (tableName) {
        return this.http.delete('/api/admin/layers', {
            body: { tableName: tableName }
        });
    };
    AdminService.prototype.postBaseLayer = function (baselayer_name, service_url, layers) {
        return this.http.post('/api/admin/baselayers', { baselayer_name: baselayer_name, service_url: service_url, layers: layers });
    };
    AdminService.prototype.deleteBaseLayer = function (id) {
        return this.http.delete('/api/admin/baselayers', {
            body: { id: id }
        });
    };
    AdminService.prototype.createMap = function (name) {
        return this.http.post('/api/admin/maps', { name: name });
    };
    AdminService.prototype.deleteMap = function (id_map) {
        return this.http.delete('/api/admin/maps', {
            body: { id_map: id_map }
        });
    };
    AdminService.prototype.createDefaultMap = function (id_map) {
        return this.http.post('/api/admin/maps/defaults', { id_map: id_map });
    };
    AdminService.prototype.deleteDefaultMap = function (id_map) {
        return this.http.delete('/api/admin/maps/defaults', {
            body: { id_map: id_map }
        });
    };
    AdminService.prototype.setMapOrder = function (id_map, order) {
        return this.http.post('/api/admin/maps/order', { order: order, id_map: id_map });
    };
    AdminService.prototype.addLayerToMap = function (id_map, id_layer) {
        return this.http.post('/api/admin/maps/layers', { id_map: id_map, id_layer: id_layer });
    };
    AdminService.prototype.deleteMapLayer = function (id_map, id_layer) {
        return this.http.delete('/api/admin/maps/layers', { body: { id_map: id_map, id_layer: id_layer } });
    };
    AdminService.prototype.addBaseLayerToMap = function (id_map, id_layer) {
        return this.http.post('/api/admin/maps/baselayers', { id_map: id_map, id_layer: id_layer });
    };
    AdminService.prototype.deleteMapBaseLayer = function (id_map, id_layer) {
        return this.http.delete('/api/admin/maps/baselayers', { body: { id_map: id_map, id_layer: id_layer } });
    };
    AdminService.prototype.addUserGroup = function (id_user, group) {
        return this.http.post('/api/admin/user/group', { id_user: id_user, group: group });
    };
    AdminService.prototype.deleteUserGroup = function (id_user, group) {
        return this.http.delete('/api/admin/user/group', { body: { id_user: id_user, group: group } });
    };
    AdminService.prototype.addUserMap = function (id_user, id_map) {
        return this.http.post('/api/admin/user/map', { id_user: id_user, id_map: id_map });
    };
    AdminService.prototype.deleteUserMap = function (id_user, id_map) {
        return this.http.delete('/api/admin/user/map', { body: { id_user: id_user, id_map: id_map } });
    };
    AdminService.prototype.insertUserRol = function (id_user, id_layer, rol) {
        return this.http.post('/api/admin/user/rol', { id_user: id_user, id_layer: id_layer, rol: rol });
    };
    AdminService.prototype.updateUserRol = function (id_user, id_layer, rol) {
        return this.http.put('/api/admin/user/rol', { id_user: id_user, id_layer: id_layer, rol: rol });
    };
    AdminService.prototype.deleteUserRol = function (id_user, id_layer) {
        return this.http.delete('/api/admin/user/rol', { body: { id_user: id_user, id_layer: id_layer } });
    };
    AdminService.prototype.createGroup = function (name) {
        return this.http.post('/api/admin/groups', { name: name });
    };
    AdminService.prototype.updateGroup = function (id, new_name) {
        return this.http.put('/api/admin/groups', { id: id, new_name: new_name });
    };
    AdminService.prototype.deleteGroup = function (id) {
        return this.http.delete('/api/admin/groups', { body: { id: id } });
    };
    AdminService.prototype.sendMail = function (titulo, cuerpo, destinatarios) {
        return this.http.post('/api/admin/mail/send', { titulo: titulo, cuerpo: cuerpo, destinatarios: destinatarios });
    };
    AdminService.prototype.publishLayer = function (name) {
        return this.http.get("/api/admin/layers/geoserver/" + name);
    };
    AdminService.prototype.unpublishLayer = function (name) {
        return this.http.delete("/api/admin/layers/geoserver/" + name);
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".user-avatar {\n    float: left;\n    box-sizing: border-box;\n    height: 40px;\n    width: 40px;\n    border-radius: 24px;\n    background-size: cover !important;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: -8px 0 16px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".user-avatar {\n    float: left;\n    box-sizing: border-box;\n    height: 40px;\n    width: 40px;\n    border-radius: 24px;\n    background-size: cover !important;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: -8px 0 16px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".mat-button {\n    margin : 0px auto;\n}\n\n.navbar-fixed {\n    position: fixed;\n    z-index: 2;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0%;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var ckeditor_component_1 = __webpack_require__(1214);
var ckbutton_directive_1 = __webpack_require__(1191);
var ckgroup_directive_1 = __webpack_require__(1205);
/**
 * CKEditorModule
 */
var CKEditorModule = (function () {
    function CKEditorModule() {
    }
    return CKEditorModule;
}());
CKEditorModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ],
                exports: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ]
            },] },
];
/** @nocollapse */
CKEditorModule.ctorParameters = function () { return []; };
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ 1274:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<md-card>\n  <md-card-header>\n    <md-card-title>Nombre del grupo : {{groupData?.name}}</md-card-title>\n    <md-card-subtitle>ID del grupo : {{groupData?.id}}</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <md-input-container style=\"width : 100%\">\n      <input mdInput [(ngModel)]=\"groupData.name\" placeholder=\"Nuevo nombre del grupo\" value=\"\">\n    </md-input-container>\n  </md-card-content>\n  <md-card-actions>\n    <button [disabled]=\"!groupData?.name || groupData?.name.length < 3\" md-button (click)=\"changeGroupName()\">ACTUALIZAR</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 1275:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Grupos</md-card-title>\n      <md-card-subtitle>Añadir nuevo grupo</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n        <md-input-container style=\"width : 100%\">\n            <input mdInput [(ngModel)]=\"newGroupName\" placeholder=\"Nombre del grupo\" value=\"\">\n        </md-input-container>\n    </md-card-content>\n    <md-card-actions>\n      <button [disabled]=\"!newGroupName || newGroupName.length < 3\" md-button (click)=\"createGroup()\">CREAR GRUPO</button>\n    </md-card-actions>\n  </md-card>\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Grupos</md-card-title>\n      <md-card-subtitle>Todos los grupos</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <table datatable class=\"mdl-data-table\" [dtOptions]=\"dtOptions\" style=\"width : 100%;\"></table>\n    </md-card-content>\n  </md-card>\n</div>"

/***/ }),

/***/ 1276:
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-page-margin\" style=\"background: url('http://www.betera.es/fileadmin/user_upload/home.jpg'); background-size : contain; background-position: center; background-repeat: no-repeat; height: 80%;\">\n</div>\n"

/***/ }),

/***/ 1277:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<md-card>\n  <md-card-header>\n    <md-card-title>Nombre de la capa : {{layerData?.name}}</md-card-title>\n    <md-card-subtitle>ID de la capa : {{layerData?.id}}</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <md-input-container style=\"width : 100%\">\n      <input mdInput [(ngModel)]=\"newName\" placeholder=\"Nuevo nombre de la capa\" value=\"\">\n    </md-input-container>\n  </md-card-content>\n  <md-card-actions>\n    <button [disabled]=\"!newName || newName.length < 3 || newName == layerData?.name\" md-button (click)=\"changeLayerName()\">ACTUALIZAR</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 1278:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Nueva Capa Base</md-card-title>\n      <md-card-subtitle>Carga una capa de un servicio WMS remoto</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <md-input-container style=\"width : 100%;\">\n        <input mdInput [(ngModel)]=\"baselayerName\" placeholder=\"Nombre de la capa base\"  value=\"\">\n      </md-input-container>\n      <md-input-container style=\"width : 100%;\">\n        <input mdInput [disabled]=\"serviceURLInputDisabled\" [(ngModel)]=\"serviceUrl\" placeholder=\"URL del servidor WMS o Capabilities\"  value=\"\">\n      </md-input-container>\n      <button [disabled]=\"capas\" md-button (click)=\"getCapabilities()\" style=\"width : 100%;\">OBTENER CAPAS</button>\n      <button *ngIf=\"capas\" md-button (click)=\"reset()\" style=\"width : 100%;\">LIMPIAR CAMPOS</button>\n      <div *ngIf=\"error\" class=\"error-msg\">{{error}}</div>\n      <md-list *ngIf=\"capas\" style=\"height : 150px; overflow-y: scroll;\">\n        <h3 md-subheader>Capas del servicio</h3>\n        <md-list-item *ngFor=\"let capa of capas\">\n          <md-checkbox (change)=\"onChangeCheckbox($event, capa.Name)\">{{capa.Name}}</md-checkbox>\n        </md-list-item>\n      </md-list>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button [disabled]=\"!capasSeleccionadas?.length || baselayerName?.length < 3\" (click)=\"addBaseLayer()\">AÑADIR CAPA BASE</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1279:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Nueva Capa</md-card-title>\n      <md-card-subtitle>Carga una capa en formato SHP</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <input id=\"input-file-id\" multiple type=\"file\" style=\"display: none;\" (change)=\"onChange($event)\" name=\"shp[]\" />\n      <label #dropZone for=\"input-file-id\" md-button class=\"mat-button\" style=\"border: 2px solid #000; margin-top: 16px; width: 100%; padding : 10px;\">\n        Selecciona los archivos SHP, DBF, SHX\n      </label>\n      <md-input-container style=\"width : 100%\">\n        <input mdInput [(ngModel)]=\"layerName\" placeholder=\"Nombre de la capa (Opcional)\" value=\"\">\n      </md-input-container>\n      <div *ngIf=\"error\" class=\"error-msg\">{{error}}</div>\n      <md-list *ngIf=\"files.length\">\n        <h3 md-subheader>Archivos a subir</h3>\n        <md-list-item *ngFor=\"let file of files\">\n          <md-icon md-list-avatar>attachment</md-icon>\n          <h4 md-line>{{file.name}}</h4>\n          <p md-line> {{file?.size | bytes}} {{file?.lastModified | date}} </p>\n        </md-list-item>\n      </md-list>\n    </md-card-content>\n    <md-card-actions>\n      <button [disabled]=\"files?.length != 3\" md-button (click)=\"uploadSHP()\">ENVIAR</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1280:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Capas</md-card-title>\n      <md-card-subtitle>PostGIS</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <table datatable [dtOptions]=\"dtOptionsLayers\" class=\"mdl-data-table\" style=\"width : 100%;\"></table>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button (click)=\"goToCreateLayerPage()\">AÑADIR NUEVA CAPA (SHP)</button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Capas</md-card-title>\n      <md-card-subtitle>Otros servidores</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <table datatable [dtOptions]=\"dtOptionsBase\" class=\"mdl-data-table\" style=\"width : 100%;\"></table>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button (click)=\"goToCreateBaseLayerPage()\">AÑADIR NUEVA CAPA (WMS)</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1281:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card style=\"margin : 8px;\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Email</md-card-title>\n      <md-card-subtitle>Contenido del email</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <div style=\"display : inline-flex;\">\n        <md-icon style=\"margin : 14px 14px 14px 0px;\">email</md-icon>\n        <h4>Título y cuerpo del email</h4>\n      </div>\n      <md-input-container style=\"width : 100%;\">\n        <input mdInput placeholder=\"Título del Email\" [(ngModel)]=\"emailTitle\">\n      </md-input-container>\n      <ckeditor\n        [(ngModel)]=\"emailContent\"\n        [config]=\"{ uiColor: '#f7f7f7', toolbar: 'Full' }\"\n        debounce=\"500\">\n      </ckeditor>\n      <div style=\"display : inline-flex;\">\n        <md-icon style=\"margin : 14px 14px 14px 0px;\">group</md-icon>\n        <h4>Elige los destinatarios</h4>\n      </div>\n      <md-card *ngFor=\"let group of groupsAndUsers\" style=\"margin : 5px 0px 5px 0px;\">\n        <md-card-header>\n          <!--<div md-card-avatar><img src=\"\" alt=\"\" class=\"user-avatar\"></div>-->\n          <md-card-title>\n            <md-checkbox  [(ngModel)]=\"group.selected\" (change)=\"groupChanged($event, group);\">{{group.name}}</md-checkbox>\n          </md-card-title>\n          <md-card-subtitle>ID del grupo : {{group.id}}</md-card-subtitle>\n        </md-card-header>\n        <md-card-content *ngIf=\"group.users && group.users.length\">\n        <md-slide-toggle\n          [checked]=\"false\"\n          [(ngModel)]=\"group.opened\"\n          >\n          Ver Usuarios\n        </md-slide-toggle>\n        <div [hidden]=\"!group.opened\">\n          <md-card *ngFor=\"let user of group.users\" style=\"margin-bottom : 4px;\">\n            <md-card-header>\n              <div md-card-avatar><img src=\"{{user.gravatar}}\" alt=\"\" class=\"user-avatar\"></div>\n              <md-card-title>\n                <md-checkbox  [(ngModel)]=\"user.selected\">{{user.name}} - {{user.nombre}} {{user.apellidos}}</md-checkbox>\n              </md-card-title>\n              <md-card-subtitle>Email : {{user.email}}</md-card-subtitle>\n            </md-card-header>\n          </md-card>\n        </div>\n\n        </md-card-content>\n      </md-card>\n\n\n    </md-card-content>\n    <md-card-actions>\n      <button md-button [disabled]=\"!isSomeUserSelected() || !emailContent || !emailTitle\" (click)=\"sendMail()\">ENVIAR</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1282:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Añadir Capas</md-card-title>\n      <md-card-subtitle>#{{map?.id}} {{map?.name}}</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <h4>Añadir Capa</h4>\n      <md-select placeholder=\"Capa PostGIS\" [(ngModel)]=\"selectedLayerToAdd\" style=\"width : 100%;\">\n        <md-option [disabled]=\"!layer.published\" *ngFor=\"let layer of AllLayersNotInMap\" [value]=\"layer.id\">\n          {{layer.name}}\n        </md-option>\n      </md-select>\n      <h4>Añadir Capa Base</h4>\n      <md-select placeholder=\"Capas Base\" [(ngModel)]=\"selectedBaseLayerToAdd\" style=\"width : 100%;\">\n        <md-option *ngFor=\"let layer of AllBaseLayersNotInMap\" [value]=\"layer.id\">\n          {{layer.name}}\n        </md-option>\n      </md-select>\n    </md-card-content>\n    <md-card-actions>\n      <button [disabled]=\"!selectedLayerToAdd\" md-button (click)=\"addSelectedLayer()\">AÑADIR CAPA SELECCIONADA</button>\n      <button [disabled]=\"!selectedBaseLayerToAdd\" md-button (click)=\"addSelectedBaseLayer()\">AÑADIR CAPA BASE SELECCIONADA</button>\n    </md-card-actions>\n  </md-card>\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Alterar orden</md-card-title>\n      <md-card-subtitle>#{{map?.id}} {{map?.name}}</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <h4>Orden de las capas</h4>\n      <div *ngIf=\"map?.orden\" [dragula]='\"order\"' [(dragulaModel)]=\"map.orden\">\n        <md-card *ngFor=\"let capa of map?.orden; let i = index;\" style=\"background : #f7f7f7; margin : 3px;\">\n          <md-card-header>\n            <md-icon md-card-avatar [style.color]=\"getColor(capa)\" style=\"cursor: pointer; padding:5px; border-radius : 25px; background: rgba(0,0,0,0.05);\" md-list-avatar class=\"handle\">layers</md-icon>\n            <md-card-title>#{{i}} {{capa.name}}</md-card-title>\n            <md-card-subtitle>ID Capa : {{capa.id_layer}}</md-card-subtitle>\n            <button md-mini-fab *ngIf=\"capa.layer_type == 'layer'\" (click)=\"deleteLayerFromMap(capa.id_layer)\" style=\"position : absolute; right: 1em;\"><md-icon>remove_circle</md-icon></button>\n            <button md-mini-fab *ngIf=\"capa.layer_type == 'base'\" (click)=\"deleteBaseLayerFromMap(capa.id_layer)\" style=\"position : absolute; right: 1em;\"><md-icon>remove_circle</md-icon></button>\n          </md-card-header>\n        </md-card>\n      </div>\n    </md-card-content>\n    <md-card-actions>\n      <button [disabled]=\"!hasChangedOrder\" md-button (click)=\"saveOrder()\">GUARDAR ORDEN</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Mapas</md-card-title>\n      <md-card-subtitle>Mapas por defecto</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <md-select placeholder=\"Elige mapa para hacer por defecto\" [(ngModel)]=\"selectedMap\">\n        <md-option *ngFor=\"let map of allMapsNotDefault | async\" [value]=\"map.id\">\n          {{map.name}}\n        </md-option>\n      </md-select>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button [disabled]=\"!selectedMap\" (click)=\"createDefaultMap()\">CREAR MAPA</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1284:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Mapas</md-card-title>\n      <md-card-subtitle>Crear un nuevo mapa</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <md-input-container style=\"width : 100%;\">\n        <input mdInput placeholder=\"Nombre del mapa\" value=\"\" [(ngModel)]=\"mapName\" >\n      </md-input-container>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button [disabled]=\"mapName.length < 3\" (click)=\"createMap()\">CREAR MAPA</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1285:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Mapas</md-card-title>\n      <md-card-subtitle>Todos los mapas</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <table datatable [dtOptions]=\"dtOptionsMaps\" class=\"mdl-data-table\" style=\"width : 100%;\"></table>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button (click)=\"goToCreateMap()\">CREAR UN MAPA</button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Mapas</md-card-title>\n      <md-card-subtitle>Mapas default</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <table datatable [dtOptions]=\"dtOptionsDefaultMaps\" class=\"mdl-data-table\" style=\"width : 100%;\"></table>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button (click)=\"goToCreateDefaultMap()\">DECLARAR UN MAPA POR DEFECTO</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1286:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <button md-mini-fab (click)=\"goBack()\" style=\"position : fixed; z-index: 2; left: 0.5em; bottom: 0.5em;\">\n    <md-icon>arrow_back</md-icon>\n  </button>\n  <md-card style=\"margin : 8px; margin-top : 15px;\">\n    <!--<div [style.background]=\"'url(' + userDetail.gravatar + ')'\" class=\"user-avatar\"></div>-->\n    <md-card-header>\n      <div md-card-avatar><img src=\"{{ userDetail?.gravatar }}\" alt=\"\" class=\"user-avatar\"></div>\n      <md-card-title>{{userDetail?.name}}</md-card-title>\n      <md-card-subtitle>{{userDetail?.nombre}} {{userDetail?.apellidos}}</md-card-subtitle>\n    </md-card-header>\n    <div md-card-image\n      style=\"height : 100px; background-position-y : 350px; background: url('http://www.dival.es/sites/default/files/sala-prensa/images/Betera%20044.jpg'); background-size: cover;\"\n    >\n    </div>\n    <md-card-content>\n      <md-tab-group>\n        <md-tab label=\"Grupos\">\n          <md-list>\n            <h3 md-subheader>Gestionar grupos del usuario {{userDetail?.name}}</h3>\n            <md-select placeholder=\"Añadir grupo al usuario\" [(ngModel)]=\"selectedGroupToAdd\" style=\"margin : 20px 0px 20px 0px; width : 100%;\">\n              <md-option *ngFor=\"let group of allNotUserGroups\" [value]=\"group.id\">{{ group.name }}</md-option>\n            </md-select>\n            <button md-button [disabled]=\"!selectedGroupToAdd\" (click)=\"addGroup()\" style=\"margin : 0 auto;\">AÑADIR GRUPO</button>\n            <md-list-item *ngFor=\"let grupo of userDetail?.grupos\">\n                <md-icon md-list-avatar>group</md-icon>\n                <h4 md-line>{{grupo.name}}</h4>\n                <button md-mini-fab (click)=\"deleteGroup(grupo.id)\" style=\"position : absolute; right: 1em;\"><md-icon>remove_circle</md-icon></button>\n            </md-list-item>\n          </md-list>\n        </md-tab>\n        <md-tab label=\"Mapas\">\n          <md-list>\n            <h3 md-subheader>Gestionar mapas del usuario {{userDetail?.name}}</h3>\n            <md-select placeholder=\"Añadir mapa al usuario\" [(ngModel)]=\"selectedMapToAdd\" style=\"margin : 20px 0px 20px 0px; width : 100%;\">\n              <md-option *ngFor=\"let map of userDetail?.not_assigned_maps\" [value]=\"map.id\">{{ map.name }}</md-option>\n            </md-select>\n            <button md-button [disabled]=\"!selectedMapToAdd\" (click)=\"addUserMap()\" style=\"margin : 0 auto;\">AÑADIR MAPA</button>\n            <md-list-item *ngFor=\"let map of userDetail?.maps\">\n                <md-icon md-list-avatar>group</md-icon>\n                <h4 md-line>{{map.name}}</h4>\n                <button md-mini-fab (click)=\"deleteUserMap(map)\" style=\"position : absolute; right: 1em;\"><md-icon>remove_circle</md-icon></button>\n            </md-list-item>\n          </md-list>\n        </md-tab>\n        <md-tab label=\"Permisos\">\n          <md-list>\n            <h3 md-subheader>Gestionar permisos del usuario {{userDetail?.name}}</h3>\n            <md-list-item *ngFor=\"let layer of userDetail?.layers_rol;\">\n                <md-icon md-list-avatar>group</md-icon>\n                <h4 md-line>#{{layer.id_layer}} {{layer.name}}</h4>\n                <div md-line>\n                  <md-select (change)=\"changeRolOfLayer($event, layer)\" [ngModel]=\"layer.rol\" placeholder=\"Permiso sobre la capa {{layer.name}}\" style=\"margin : 20px 0px 20px 0px; width : 100%;\">\n                    <md-option *ngFor=\"let rol of ['r', 'c', 'e', 'd']\" [value]=\"rol\">{{ rol }}</md-option>\n                  </md-select>\n                </div>\n            </md-list-item>\n          </md-list>\n        </md-tab>\n      </md-tab-group>\n    </md-card-content>\n    <md-card-actions>\n\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1287:
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]=\"\" class=\"admin-page-margin\">\n  <md-card class=\"card-margin\">\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>Mapas</md-card-title>\n      <md-card-subtitle>Todos los mapas</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <table datatable [dtOptions]=\"dtOptions\" class=\"mdl-data-table\" style=\"width : 100%;\"></table>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button>ELIMINAR TODOS LOS PERMISOS</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ 1288:
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar #navbarAdmin class=\"navbar-fixed\">\n  <a md-tab-link\n     *ngFor=\"let link of links\"\n     [routerLink]=\"link.path\"\n     routerLinkActive #rla=\"routerLinkActive\"\n     [active]=\"rla.isActive\">\n    {{link.label}}\n  </a>\n</nav>\n<router-outlet></router-outlet>\n\n<!--\n<md-toolbar #toolbarMenu color=\"primary\" style=\"text-align: center;\">\n    <button md-button [routerLink]=\"['/admin']\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        Inicio\n    </button>\n    <button md-button [routerLink]=\"['/admin', 'users']\" routerLinkActive=\"active-link\">\n        Usuarios\n    </button>\n    <button md-button [routerLink]=\"['/admin', 'maps']\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        Mapas\n    </button>\n    <button md-button [routerLink]=\"['/admin', 'layers']\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        Capas\n    </button>\n    <button md-button [routerLink]=\"['/admin', 'mail']\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        Mail\n    </button>\n</md-toolbar>\n<router-outlet></router-outlet>\n-->"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map