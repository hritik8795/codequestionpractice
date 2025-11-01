import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userForm!:FormGroup
constructor(private fb:FormBuilder){
  this.userForm =this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(2)]]
  })

}

onSubmit(){
  if(this.userForm.valid){
    console.log(this.userForm.value);
  }else{
    console.log("Form is invalid");
  }
}}
