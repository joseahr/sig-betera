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
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUser = function () {
        return this.http.post('/api/user/isAuth', {})
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.http.post('/api/user/isAuth', {})
            .map(function (user) {
            return (!user.json().error);
        });
    };
    AuthService.prototype.isAuthenticatedAsAdmin = function () {
        return this.http.post('/api/user/isAuth', {})
            .map(function (user_) {
            var user = user_.json();
            return (!user.error && user.rol == 'admin');
        });
    };
    AuthService.prototype.login = function (username, password) {
        return this.http.post('/api/user/login', { username: username, password: password }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        return this.http.get('/api/user/logout');
    };
    AuthService.prototype.signup = function (user) {
        return this.http.post('/api/user/signup', user);
    };
    AuthService.prototype.validateUserByToken = function (token) {
        return this.http.get("/api/user/validate/" + token).map(function (res) { return res.json(); });
    };
    AuthService.prototype.sendPasswordToken = function (email) {
        return this.http.post("/api/user/password", { email: email }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.isValidToken = function (token) {
        return this.http.get("/api/user/password/" + token).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatePassword = function (token, password, repassword) {
        return this.http.put("/api/user/password", { token: token, password: password, repassword: repassword }).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
