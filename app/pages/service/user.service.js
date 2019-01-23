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
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
        this.users = [];
        this.users = [
            { id: 1, name: 'Darshan', address: 'Mulund', gender: 'Male' },
            { id: 2, name: 'Madhavi', address: 'Ambernath', gender: 'Female' },
            { id: 3, name: 'Radhakrishna', address: 'Ghansoli', gender: 'Male' },
            { id: 4, name: 'Abhishek', address: 'Rabale', gender: 'Male' },
            { id: 5, name: 'Siddharth', address: 'Titwala', gender: 'Male' },
            { id: 6, name: 'Arvind', address: 'Thane', gender: 'Male' },
            { id: 7, name: 'Manisha', address: 'Vashi', gender: 'Female' },
        ];
    }
    UserService.prototype.getDataById = function (id) {
        return this.users.filter(function (item) { return item.id === id; });
    };
    // Returned user list
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map