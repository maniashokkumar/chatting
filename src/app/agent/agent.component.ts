import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit,OnDestroy {
  senderName: string;
  cus2aget:any;
  cuslastseen:any
  aglastseen:any
  agentdp: any;


  constructor(private customerdep:ChatserviceService) {
    this.senderName="Customer";
    this.cus2aget=customerdep.cusagechat;
    console.log(this.cus2aget);
   }

  ngOnInit(): void {
      this.cuslastseen=this.customerdep.c_Lastseen;
      this.agentdp=this.customerdep.agentdp;
  }
  
  sent(mesg:any){
    let msgObj = {
      senderName: "Customer",
      msg: mesg,
      time:new Date()

      
    }

    this.cus2aget.push(msgObj);
    this.customerdep.cusagechat(this.cus2aget)
    
  }
  ngOnDestroy(){
    this.aglastseen=new Date;
    this.customerdep.agelastsee(this.aglastseen)
  }
}
