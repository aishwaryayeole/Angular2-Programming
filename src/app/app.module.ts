import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './Components/AdvertisementTableComponent';
import { AdvertisementFormComponent } from './Components/AdevrtisementForm';
import { AdvertisementTableComponent } from './Components/AdvertisementTableComponent';
import { TemplateAdvFormComponent } from './Components/Template_Driven/Template.Adv';
import { MDFAdvFormComponent } from './Components/Model_Driven_Form/MDF.adv';
import {FormBuilderAdvFormComponent} from './Components/Form_Builder/FormBuilder.adv';
import {AdvService} from './Services/AdvService';



@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, AdvertisementFormComponent,AdvertisementTableComponent,FilterPipe,TemplateAdvFormComponent,MDFAdvFormComponent,FormBuilderAdvFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
