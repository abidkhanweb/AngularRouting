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
// Import Activated Route servive from angular core
var router_1 = require("@angular/router");
var user_service_1 = require("./pages/service/user.service");
var UserDetailComponent = (function () {
    //userid:any;
    // Inject activated service in constructor
    function UserDetailComponent(_activatedRoute, _ThatService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._ThatService = _ThatService;
        this.myUsers = [];
        this._activatedRoute.params.subscribe(function (response) {
            return _this.myUserId = response['id'];
        });
        console.log(this.myUserId);
        this.myUsers = this._ThatService.getDataById(this.myUserId);
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        //console.log(this.myUsers = this._ThatService.getDataById(6));
        //return this.myUsers = this._ThatService.getDataById(1);
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-component',
            templateUrl: './app/user-details.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, user_service_1.UserService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-details.component.js.map