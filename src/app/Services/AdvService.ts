import { Injectable} from '@angular/core';
import { Http, Response, RequestOptions,Headers,HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdvService{
   

    serviceAdvList:{newid:any,newName:any, newCat:string, newdesc:any}[] = [];

    constructor(private _http:Http){}

    advPush1(childAd:any)
    {
        //console.log("Child Ad ", childAd);
        this.serviceAdvList.push(childAd);
       // console.log(this.serviceAdvList);
       
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

    updateAdvertisement(updateAd:any)
    {

    }

 postAd() {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', '5976eb951c0edf75e32798e8');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": "laptop sale", "name": "Anand Kulkarni", "category": "Mobile", "description": "intel core 3"};
        let obj= this._http.post(url, jsonReq, options).map((response: Response)=>response.json());
        obj.subscribe((data)=>console.log("myAD",data));

    }


}