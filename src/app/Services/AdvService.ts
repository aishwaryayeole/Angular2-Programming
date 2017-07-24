import { Injectable} from '@angular/core';

@Injectable()
export class AdvService{

    serviceAdvList:{newName:any, newCat:string, newdesc:any}[] = [];

    advPush1(childAd:any)
    {
        //console.log("Child Ad ", childAd);
        this.serviceAdvList.push(childAd);
        console.log(this.serviceAdvList);

    }

    getAllAdvertises()
    {
        return this.serviceAdvList;
    }

    deleteAdvertisement(delAd:any)
    {
    let index:number= delAd.index;
    this.serviceAdvList.splice(index,1);
    //console.log(this.advList);
            return this.serviceAdvList;
    }


}