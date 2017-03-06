"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request-promise");
var xmlParser = require("xml2json");
exports.parser = function (serviceUrl) {
    return request({ url: serviceUrl, method: 'HEAD' })
        .then(function (headers) {
        if (!headers['content-length'] || headers['content-length'] > 5 * 1024 * 1024)
            return [];
        return request({ url: serviceUrl, method: 'GET' })
            .then(function (capabilities) {
            var capabilitiesJSON = JSON.parse(xmlParser.toJson(capabilities));
            try {
                console.log(capabilitiesJSON);
                var layers = (capabilitiesJSON['WMS_Capabilities'] || capabilitiesJSON['WMT_MS_Capabilities'] || capabilitiesJSON['Capabilities'])['Capability']['Layer']['Layer'];
                console.log(layers);
                return layers;
            }
            catch (e) {
                console.log('error');
                return [];
            }
        })
            .catch(function (err) { return []; });
    });
};
