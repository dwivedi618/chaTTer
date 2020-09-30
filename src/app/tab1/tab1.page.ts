import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  user = [{
    'name': 'Shivam Dwivedi',
    'from': 'shivamdwivedi618@gmail.com',
    'to': 'sdwivedi856@gmail.com',

  }]
  constructor(
    public modalController: ModalController,
    public contactService: ContactService
    ) { }
  ngOnInit(): void {
    this.contactList();
  }
contactList(){
  this.contactService.allContact().subscribe((result)=>{
    console.log("all contact",result);
  },(error)=>{
    console.log("error",error);
  })
}
  async presentModal() {
    const modal = await this.modalController.create({
      component: Tab2Page,
      cssClass: 'my-custom-class',
      componentProps: {
        user: this.user
      }

    });
    return await modal.present();
  }
}
