import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Behavioursubject {
private userState =new BehaviorSubject<any>(null);
user$ =this.userState.asObservable();

setUser(data:any){
  this.userState.next(data);
}
getUser(){
  return this.userState.value;
}
}
