import { Component,Pipe,PipeTransform,NgModule } from '@angular/core';
import { AdvService} from '../Services/AdvService';

@Component({
selector: 'my-adv-table',
templateUrl: `./AdvTableForm.html`,
//inputs: ['appTextBox']
})

export class AdvertisementTableComponent{

    //appTextBox:any; 
    adname:any;
    advList:{newName:any, newCat:string, newdesc:any}[] = [];
    advPush(childAd:any)
    {
        this.advList.push(childAd);
    }
    deleteAd(delAd:any)
    {
    let index:number= delAd.index;
    this.advList.splice(index,1);
    }

    constructor(private advService:AdvService){}
    getAdFromService()
    {
    return  this.advService.getAllAdvertises();
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