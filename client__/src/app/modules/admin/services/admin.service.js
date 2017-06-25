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
var http_1 = require("@angular/http");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AdminService);
exports.AdminService = AdminService;
