import { Component,EventEmitter } from '@angular/core';
import { AdvService} from'../Services/AdvService';

@Component({
selector: 'home-ad',
template: `<my-ad (childEvent)=myFun($event)></my-ad> 
  <my-adv-table></my-adv-table>
  <a routerLink="/Edit/:adID" routerLinkActive="active" ></a>`,
  providers:[AdvService],
})

export class HomeComponent{

  constructor(private advService:AdvService) {}
 


myFun(newAd:any)
{
//this.advService.advPush1(newAd);
}


 }