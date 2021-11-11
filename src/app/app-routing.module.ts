import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhatsappComponent } from './whatsapp/whatsapp.component';

const routes: Routes = [
 {
   path:"",
   component:WhatsappComponent
 },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
