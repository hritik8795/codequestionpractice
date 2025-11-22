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
console.log('BehaviorSubject service initialized');

}
getUser(){
  return this.userState.value;
console.log('BehaviorSubject service initialized');

}
}
