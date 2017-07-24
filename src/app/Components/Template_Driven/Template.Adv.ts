import { Component,EventEmitter } from '@angular/core';
@Component({
selector: 'my-ad-template',
templateUrl: `./TemplateAd.html`,
outputs: ['childEvent']
})

export class TemplateAdvFormComponent{
    //arrName =new Array();
    //arrCat =new Array();
    //arrDesc =new Array();
    YourName:string="Aishwarya";
    Category:string[] =["Car","Mobile","Bike","Real Estate","Camera","Books","Laptops"];

    name2:any;
    cat2:any;
    desc2:any;

    obj:any;

    AdDetails_All(name:any,cat:any,desc:any):void
    {

        console.log("name: ",name,"cat: ",cat,"description: ",desc);
        //this.arrName.push(name);
        //this.arrCat.push(cat);
        //this.arrDesc.push(desc);

        /*this.name2=name;
        this.cat2=cat;
        this.desc2=desc;*/

        this.obj.push({Name:name,
                    Category : cat,
                     Description: desc,
                });
        console.log("Object", this.obj);

        for (let i = 0; i < this.obj.length; i++)
        {
            console.log(this.obj[i]);
        }

    }

    public childEvent= new EventEmitter<any>();
    onChange(name:any,cat:string,desc:any) 
    { 

        let newobj =
        {
            newName:name,
            newCat:cat,
            newDesc:desc
        }

       this.childEvent.emit(newobj);

    } 

 }