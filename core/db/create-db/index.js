"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var config_1 = require("../../config");
var exec = require('bluebird').promisify(child_process_1.exec);
var execOpts = { env: { 'PGPASSWORD': config_1.dbConfig.password } };
function existDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var commandExistDb, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Comprobando si existe la base de datos " + config_1.dbConfig.database);
                    commandExistDb = "psql -U " + config_1.dbConfig.user + " -tc \"SELECT 1 FROM pg_database WHERE datname = '" + config_1.dbConfig.database + "'\"";
                    promise = exec(commandExistDb, execOpts);
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, +(_a.sent())];
            }
        });
    });
}
function createDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var commandCreate, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Creando la base de datos " + config_1.dbConfig.database);
                    commandCreate = "psql -U " + config_1.dbConfig.user + " -c \"CREATE DATABASE \"\"" + config_1.dbConfig.database + "\"\" \"";
                    promise = exec(commandCreate, execOpts);
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createExtensions() {
    return __awaiter(this, void 0, void 0, function () {
        var command, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Creando las extensiones postgis y citext");
                    command = "psql -U " + config_1.dbConfig.user + " -d " + config_1.dbConfig.database + " -f create-extensions.sql";
                    promise = exec(command, execOpts);
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createTables() {
    return __awaiter(this, void 0, void 0, function () {
        var command, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Creando las tablas del schema public");
                    command = "pg_restore --host localhost --port 5432 --username \"" + config_1.dbConfig.user + "\" --dbname \"" + config_1.dbConfig.database + "\" --section pre-data --section post-data --schema public \"db-only.backup\"";
                    promise = exec(command, execOpts);
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createCapasSchema() {
    return __awaiter(this, void 0, void 0, function () {
        var commandCreate, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Creando el schema capas");
                    commandCreate = "psql -U " + config_1.dbConfig.user + " -d " + config_1.dbConfig.database + " -c \"CREATE SCHEMA IF NOT EXISTS capas\"";
                    promise = exec(commandCreate, execOpts);
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createEventTriggers() {
    return __awaiter(this, void 0, void 0, function () {
        var command, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Creando EVENT-TRIGGERS");
                    command = "psql -U " + config_1.dbConfig.user + " -d " + config_1.dbConfig.database + " -f create-event-triggers.sql";
                    promise = exec(command, execOpts);
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function addCapas() {
    return __awaiter(this, void 0, void 0, function () {
        var command, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Creando capas");
                    command = "pg_restore -U postgres --host localhost --port 5432 --username \"" + config_1.dbConfig.user + "\" --dbname \"" + config_1.dbConfig.database + "\" --section pre-data --section data --schema capas \"capas.backup\"";
                    promise = exec(command, { execOpts: execOpts }).catch(function (err) { return console.log(err); });
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function addDatos() {
    return __awaiter(this, void 0, void 0, function () {
        var commandDisableTrigger, commandEnableTrigger, commandAdd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("A\u00F1adiendo datos");
                    commandDisableTrigger = "psql -U " + config_1.dbConfig.user + " -d \"" + config_1.dbConfig.database + "\" -c \"ALTER TABLE datos DISABLE TRIGGER trg_check_gid_layer_exists\"";
                    commandEnableTrigger = "psql -U " + config_1.dbConfig.user + " -d \"" + config_1.dbConfig.database + "\" -c \"ALTER TABLE datos ENABLE TRIGGER trg_check_gid_layer_exists\"";
                    commandAdd = "pg_restore --host localhost --port 5432 --username \"" + config_1.dbConfig.user + "\" --dbname \"" + config_1.dbConfig.database + "\" --section data --table datos --schema public --verbose \"tabla-datos.backup\"";
                    return [4 /*yield*/, exec(commandDisableTrigger, execOpts)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, exec(commandAdd)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, exec(commandEnableTrigger, execOpts)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function create() {
    return __awaiter(this, void 0, void 0, function () {
        var exist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, existDatabase()];
                case 1:
                    exist = _a.sent();
                    if (!(exist !== 1)) return [3 /*break*/, 9];
                    return [4 /*yield*/, createDatabase()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, createExtensions()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, createTables()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, createCapasSchema()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, createEventTriggers()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, addCapas()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, addDatos()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
create();
// C:/Program Files/PostgreSQL/9.5/bin\pg_restore.exe --host localhost --port 5432 --username "postgres" --dbname "Betera-test" --no-password  --schema capas --verbose "D:\Programacion\sig-betera\core\db\create-db\capas.backup" 
