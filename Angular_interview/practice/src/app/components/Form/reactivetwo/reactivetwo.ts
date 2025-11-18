import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivetwo',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactivetwo.html',
  styleUrl: './reactivetwo.css',
})
export class Reactivetwo {
  yourForm!:FormGroup
  constructor(public fb:FormBuilder){
    this.yourForm =this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required]]
  })
  }
onSubmit(){
 if (this.yourForm.valid){
  alert("form submitted successfully ")
  console.log(this.yourForm.value);
 }else{
  alert("please correct the entered data ")
 }

}

}
