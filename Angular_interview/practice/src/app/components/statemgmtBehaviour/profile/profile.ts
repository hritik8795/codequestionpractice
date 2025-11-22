import { Component } from '@angular/core';
import { Behavioursubject } from '../../../../services/behavioursubject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userData:any;
  constructor(private userService:Behavioursubject){}

  ngOnInit(){
    this.userService.user$.subscribe(data=>{
      
      this.userData=data;
      console.log('Profile component received user data:',data);
    });

  }

}
