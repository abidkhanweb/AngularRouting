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
// Modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// Imported Routing from angular core
var router_1 = require('@angular/router');
// Services
var user_service_1 = require('./pages/service/user.service');
// Components
var app_component_1 = require('./app.component');
var home_component_1 = require('./pages/home.component');
var about_component_1 = require('./pages/about.component');
var service_component_1 = require('./pages/service.component');
var contact_component_1 = require('./pages/contact.component');
var user_details_component_1 = require('./user-details.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                // Define router module and specify declaration
                router_1.RouterModule.forRoot([
                    { path: "", redirectTo: '/home', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'about', component: about_component_1.AboutComponent },
                    { path: 'service', component: service_component_1.ServiceComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'user-detail/:id', component: user_details_component_1.UserDetailComponent }
                ])
            ],
            declarations: [
                // Main Component
                app_component_1.AppComponent,
                // Other Component
                home_component_1.HomeComponent, about_component_1.AboutComponent, service_component_1.ServiceComponent, contact_component_1.ContactComponent, user_details_component_1.UserDetailComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map