import { Component,OnInit } from "@angular/core";
import { UserService } from './service/user.service'
import { Router, Route } from "@angular/router";

@Component({
    selector:'home-component',
    templateUrl:'app/pages/home.component.html',
})

export class HomeComponent implements OnInit{

    HomeUsers:any = [];

    constructor(private _userService:UserService, private _router:Router){
        
    }

   
   

    myMethod(id){
        console.log(id);
        this._router.navigateByUrl('/user-detail/'+id);
        this._userService.getDataById(id);
    }

    ngOnInit(){
        this.HomeUsers = this._userService.getUsers();
    }

}