import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {
  display_Agent:boolean=false;
  display_Customr:boolean=false;
  agentdp:any;
  customerdp:any
 
  profiledp:any;
  
  constructor(private dbl:ChatserviceService) { }

  ngOnInit(): void {
    this.agentdp=this.dbl.agentdp;
    this.customerdp=this.dbl.customerdp;
  }
  agent(){
    this.display_Customr=false;
    this.display_Agent=true;
    this.profiledp=this.customerdp
  }
  customer(){
    this.display_Customr=true;
    this.display_Agent=false;
    this.profiledp=this.agentdp;
  }

  
}
