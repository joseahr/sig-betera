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
var ng2_ckeditor_1 = require("ng2-ckeditor");
var rxjs_1 = require("rxjs");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var AdminMailComponent = (function () {
    function AdminMailComponent(loading, adminService) {
        var _this = this;
        this.loading = loading;
        this.adminService = adminService;
        rxjs_1.Observable.forkJoin(this.adminService.getUsers().map(function (res) { return res.json(); }), this.adminService.getAllGroups().map(function (res) { return res.json(); })).subscribe(function (data) {
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
    core_1.ViewChild(ng2_ckeditor_1.CKEditorComponent),
    __metadata("design:type", Object)
], AdminMailComponent.prototype, "ckeditor", void 0);
AdminMailComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-mail',
        templateUrl: './admin-mail.component.html',
        styleUrls: ['./admin-mail.component.css'],
        providers: [services_1.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        services_1.AdminService])
], AdminMailComponent);
exports.AdminMailComponent = AdminMailComponent;
