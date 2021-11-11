import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit,OnDestroy {
  senderName: any;
  cus2aget:any
  custolastseen:any;
  antlastseen:any;
  customerdp: any;
  constructor(private customerdep:ChatserviceService) {
    this.senderName="Agent";
    this.cus2aget=customerdep.cusagechat;
   }

  ngOnInit(): void {
    this.antlastseen=this.customerdep.a_Lastseen;
    this.customerdp=this.customerdep.customerdp;
  }
  
  sent(mesg:any){
    let msgObj = {
      senderName: "Agent",
      msg: mesg,
      time:new Date()
     
      
    }
    this.cus2aget.push(msgObj);
    this.customerdep.cusagechat(this.cus2aget)
    
  }
  ngOnDestroy(){
    this.custolastseen=new Date;
    this.customerdep.cuslstsee(this.custolastseen)
  }
}
