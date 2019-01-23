import { Component, OnInit } from "@angular/core";

// Import Activated Route servive from angular core
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./pages/service/user.service";

@Component({
    selector:'user-component',
    templateUrl:'./app/user-details.component.html',
    providers:[UserService]
})

export class UserDetailComponent implements OnInit {

   

    myUsers:any = [];
    myUserId:any;

    //userid:any;


    // Inject activated service in constructor
    constructor(private _activatedRoute:ActivatedRoute, private _ThatService:UserService ){
        this._activatedRoute.params.subscribe(response => 
        this.myUserId = response['id']);
        console.log(this.myUserId);
        this.myUsers = this._ThatService.getDataById(this.myUserId);
    }

    ngOnInit(){
        //console.log(this.myUsers = this._ThatService.getDataById(6));
        //return this.myUsers = this._ThatService.getDataById(1);
    }

}
