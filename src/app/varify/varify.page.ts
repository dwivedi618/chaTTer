import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-varify',
  templateUrl: './varify.page.html',
  styleUrls: ['./varify.page.scss'],
})
export class VarifyPage implements OnInit {

  varifyOTPform : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
   this.varifyOTPform = this.formBuilder.group({
     email: [''],
     otp: ['',Validators.required,Validators.length]
   })
  }
 varifyOTP(){
   
 }
}
