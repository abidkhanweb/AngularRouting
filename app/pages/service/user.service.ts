import { Injectable } from "@angular/core";

@Injectable()

export class UserService{
    
    users:any = [];

    constructor(){
        this.users = [
            { id: 1, name: 'Darshan', address: 'Mulund', gender: 'Male' },
            { id: 2, name: 'Madhavi', address: 'Ambernath', gender: 'Female' },
            { id: 3, name: 'Radhakrishna', address: 'Ghansoli', gender: 'Male' },
            { id: 4, name: 'Abhishek', address: 'Rabale', gender: 'Male' },
            { id: 5, name: 'Siddharth', address: 'Titwala', gender: 'Male' },
            { id: 6, name: 'Arvind', address: 'Thane', gender: 'Male'},
            { id: 7, name: 'Manisha', address: 'Vashi', gender: 'Female'},
        ];
    }

    getDataById(id){
        return this.users.filter(item => item.id === id)
    }
    
    
    
    

    // Returned user list
    getUsers(){
        return this.users;
    }



}