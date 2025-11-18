import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Behavioursubject } from '../../../../services/behavioursubject';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-user',
  imports: [Profile],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
constructor(private http:HttpClient,private userService:Behavioursubject){}

ngOnInit(){
  this.http.get<any>('https://jsonplaceholder.typicode.com/users/1').subscribe(data=>{
    this.userService.setUser(data);
  }); }
}
