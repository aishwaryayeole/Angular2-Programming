import { Component,EventEmitter } from '@angular/core';
import { AdvService} from'../Services/AdvService';
import {Router,RouterModule}  from '@angular/router';


@Component({
selector: 'edit-ad',
templateUrl: `./EditProductComponent.html`,

})

export class EditAdComponent{
    ProductID:any;
 constructor(private router:Router){}

atHome()
{
    this.router.navigate(['']);
}

updateMyAd()
{
    this.ProductID;
}

 }