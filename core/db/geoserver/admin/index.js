"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var btoa = require("btoa");
var request = require("request-promise");
var child_process_1 = require("child_process");
var exec = require('bluebird').promisify(child_process_1.exec);
var authHeader = { Authorization: 'Basic ' + btoa('admin:geoserver') };
var WORKSPACE = 'betera';
var DATA_STORE = 'betera-datastore';
var getOptsPublishLayer = function (name) { return ({
    method: 'POST', uri: "http://localhost:8080/geoserver/rest/workspaces/" + WORKSPACE + "/datastores/" + DATA_STORE + "/featuretypes",
    headers: __assign({}, authHeader, { "Content-Type": 'application/json' }),
    body: JSON.stringify({ featureType: { name: name } })
}); };
var getOptsUnpublishLayer = function (name) { return ({
    method: 'DELETE',
    uri: "http://localhost:8080/geoserver/rest/layers/" + name,
    headers: authHeader
}); };
var getOptsDeleteFeatureType = function (name) { return ({
    method: 'DELETE',
    uri: "http://localhost:8080/geoserver/rest/workspaces/" + WORKSPACE + "/datastores/" + DATA_STORE + "/featuretypes/" + name,
    headers: authHeader
}); };
var optsGetPublishedLayers = {
    method: 'GET', uri: "http://localhost:8080/geoserver/rest/layers.json",
    headers: authHeader
};
var getOptsCreateUser = function (userName, password, enabled) {
    if (enabled === void 0) { enabled = false; }
    return ({
        method: 'POST', uri: "http://localhost:8080/geofence/rest/users",
        headers: __assign({}, authHeader, { "Content-Type": 'application/xml' }),
        body: "<user enabled=\"" + enabled + "\" admin=\"false\"><name>" + userName + "</name><password>" + password + "</password></user>"
    });
};
var GeoserverAdmin;
(function (GeoserverAdmin) {
    var Layers = (function () {
        function Layers() {
        }
        Layers.prototype.publishLayerInGeoserver = function (name) {
            var opts = getOptsPublishLayer(name);
            return request(opts);
        };
        Layers.prototype.unpublishLayerInGeoserver = function (name) {
            var optsLayer = getOptsUnpublishLayer(name);
            var optsFeatureType = getOptsDeleteFeatureType(name);
            return request(optsLayer).then(function () { return request(optsFeatureType); });
        };
        Layers.prototype.getPublishedLayers = function () {
            return request(optsGetPublishedLayers);
        };
        return Layers;
    }());
    GeoserverAdmin.Layers = Layers;
    var Users = (function () {
        function Users() {
        }
        Users.prototype.createUserInGS = function (userName, password, enabled) {
            if (enabled === void 0) { enabled = false; }
            var opts = getOptsCreateUser(userName, password, enabled);
            return request(opts);
        };
        return Users;
    }());
    GeoserverAdmin.Users = Users;
})(GeoserverAdmin = exports.GeoserverAdmin || (exports.GeoserverAdmin = {}));
