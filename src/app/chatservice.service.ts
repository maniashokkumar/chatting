import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
cusagechat:any
c_Lastseen:any;
a_Lastseen:any;
customerdp="../../assets/customer.jpg"
agentdp="../../assets/agent.svg"
  constructor() { 
    this.cusagechat=[];
  }


  customer2agent(array:any){
    this.cusagechat=array
  }
  cuslstsee(time:any){
    this.c_Lastseen=time;
  }
  agelastsee(tine:any){
    this.a_Lastseen=tine;
  }
}
