import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ModalController } from '@ionic/angular';
import { VarifyPage } from '../varify/varify.page';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  OTPform : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    public modalController: ModalController,
    
    ) { }

  ngOnInit() {
    this.OTPform = this.formBuilder.group({
      email: []
    })
  }
 sendOTP(){
   console.log("Form OTP",this.OTPform.value)
   const requestEmail = this.OTPform.value.email;
  
 
   this.authService.requestOTP(requestEmail).subscribe((result)=>{
     console.log("result",result);
     if(result['status'] == 1){
      this.presentModal();
     }else{
        console.log("something went wrong !")
      }
   },(error)=>{
     console.log("error",error)
   })
 }

 async presentModal() {
  const modal = await this.modalController.create({
    component: VarifyPage,
    cssClass: 'my-custom-class',
    // componentProps: {
    //   user: this.user
    // }

  });
  return await modal.present();
}
}
