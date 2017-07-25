import { Component, ViewChild } from '@angular/core';
import { AdvertisementTableComponent } from './Components/AdvertisementTableComponent';
import { AdvService} from'./Services/AdvService';
@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers: [AdvService],
})
export class AppComponent  
{
  constructor(private advService:AdvService) {

  }

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



  /*appFun(appAdvobj:any):void {
    //this.currentAdvObj=appAdvobj;
    //console.log(this.currentAdvObj);
    this.advList.push(appAdvobj);
  }*/



  




  
}
