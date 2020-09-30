import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonContent } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocketioService } from '../services/socketio.service';
export interface MessageDatabase{
  m : any;
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @Input() name: string;
  @Input() message: string;
  @Input() to: string;
  @Input() from: string;
  @ViewChild(IonContent) content: IonContent;

  user;
  messageForm : FormGroup;
  messages  = [
   
  ];
  constructor(
    public modalController: ModalController,
    public socketService : SocketioService,
    private navParams : NavParams,
    private formBuilder: FormBuilder
    ) { }
  ngOnInit(){
    this.user = this.navParams.get('user');
    console.log("user",this.user)
    this.messageForm = this.formBuilder.group({
      msg : ['',Validators.required],
      time : [new Date()],
    })
    this.scroll();
  }

  sendMessage(){
    if(this.messageForm.invalid){
      console.log("empty message cant be sent");
      return;
    }else{
      const time = new Date().toLocaleTimeString();
      this.messageForm.value.time = time; 
      const message = this.messageForm.value;
      message.from = this.user[0].from;
      message.to = this.user[0].to;
      
      console.log("sending...",this.messageForm.value)
      this.scroll();
      this.messages.push(this.messageForm.value);
      console.log("after---->>message:",message)
      this.sendToUser(message);
      this.messageForm.reset();
      this.scroll();

    }
  }
  sendToUser(message){
   this.socketService.send(message);
  }
  scroll(){

    const chatWindow = document.getElementById('chat-window'); 
    // chatWindow.scrollToBottom(0);
    
    // chatWindow.scrollTop = chatWindow.scrollHeight;

  }
  callFunction(){
    this.content.scrollToTop(0);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
