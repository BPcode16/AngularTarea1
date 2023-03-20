import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './tnavbar/tnavbar.component';
import { CuerpoComponent } from './tbody/tbody.component';
import { NoticiasComponent } from './tnews/tnews.component';
import { CartasComponent } from './tcard/tcard.component';
import { FooterComponent } from './tfooter/tfooter.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CuerpoComponent,
    NoticiasComponent,
    CartasComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    NavbarComponent,
    CuerpoComponent,
    NoticiasComponent,
    CartasComponent,
    FooterComponent
  ]
})
export class DesignModule { }
