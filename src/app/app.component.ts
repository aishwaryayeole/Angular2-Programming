import { Component, ViewChild } from '@angular/core';
import { AdvertisementTableComponent } from './Components/AdvertisementTableComponent';
import { AdvService} from'./Services/AdvService';
@Component({
  selector: 'my-app',
  template: `<my-ad (childEvent)=advService.advPush1($event);></my-ad> 
  <my-adv-table></my-adv-table> `,
  providers: [AdvService],
})
export class AppComponent  
{
  //currentAdvObj:any;
  //advList:any[];
  //advList:{newName:any, newCat:any, newdesc:any}[] = [];
  @ViewChild(AdvertisementTableComponent) atc: AdvertisementTableComponent;

  appFun(newAd:any)
  {
    //console.log(newAd);
    //this.atc.advPush(newAd);
    //this.advService.advPush1(newAd);

  }

  constructor(private advService:AdvService) {}



  /*appFun(appAdvobj:any):void {
    //this.currentAdvObj=appAdvobj;
    //console.log(this.currentAdvObj);
    this.advList.push(appAdvobj);
  }*/



  




  
}
