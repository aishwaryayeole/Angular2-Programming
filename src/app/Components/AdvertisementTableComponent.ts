import { Component,Pipe,PipeTransform,NgModule } from '@angular/core';
import { AdvService} from '../Services/AdvService';
import {Router,RouterModule}  from '@angular/router';
@Component({
selector: 'my-adv-table',
templateUrl: `./AdvTableForm.html`,
//inputs: ['appTextBox']
})

export class AdvertisementTableComponent{


    constructor(private advService:AdvService, private router:Router){}
    //appTextBox:any; 
   /* adname:any;
    advList:{newName:any, newCat:string, newdesc:any}[] = [];
    advPush(childAd:any)
    {
        this.advList.push(childAd);
    }
    deleteAd(delAd:any)
    {
    let index:number= delAd.index;
    this.advList.splice(index,1);
    } */

    getAdFromService()
    {
    return  this.advService.getAllAdvertises();
    }

     editAd(adProductID:any)
    {
            console.log("In Edit Ad function");
            this.router.navigate(['/Edit/adProductID']);
            console.log(adProductID);
    }
   


}

@Pipe({
    name: 'FilterPipe'
})

export class FilterPipe implements PipeTransform {

    transform(value: Array<any>, input: string) {
        let filterAds:  Array<any> = [];
        if (input.length>2) {   
                input = input.toLowerCase();
                 value.filter(function (ad) {
                    if(ad.newCat.match(input))
                    {
                        console.log(ad.newCat);
                        filterAds.push(ad);
                        console.log(input);
                    }
                })
            return filterAds;
        }
        else
            return value;
            
        
    }
}