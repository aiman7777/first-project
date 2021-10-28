import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.page.html',
  styleUrls: ['./labtest.page.scss'],
})
export class LabtestPage implements OnInit {
 


  constructor(
    private alertCntrl: AlertController
   ) { }
 
   ngOnInit() { 
   }
 
   CreatePrompt()
   {
 this.alertCntrl.create({
   header: 'Submit review?',
   message: 'Do you want to submit?',
 
   buttons:[
     {
      text:"Yes",
      handler:()=>{
        alert("Thankyou!!!! ");

       }
     },
     {
      text:"No",
       handler:(data)=>{
         alert("Please Check and Resubmit")
       }
     }
   ]
 }).then((promptElement)=>{
   promptElement.present();
 })
   }
 
  }