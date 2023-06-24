import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataServices} from "../Shared/ApiServices";
import {ApiConfig} from "../Shared/ApiConfig";
import {MessageService} from "../Shared/Message";
import {ShoppingCartService} from "../Shared/ShoppingCartService";
declare var $: any;
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute , private iService:DataServices, private message:MessageService,
              private iCartItems:ShoppingCartService) { }

  serverUrl : string = ApiConfig.ServerUrl +"/" + "Uploads/";
  item:any;
  RelatedItems:any;

  ngOnInit(): void {

    let id:any;
    this.route.paramMap.subscribe(params => {
      id = params.get('Id');
      this.iService.GetItemById(id).subscribe((data)=>
      {
        this.item=data;

        this.iService.GetRelatedItems(this.item.itemModel.SalesPrice).subscribe((data2)=>
        {
          this.RelatedItems=data2;
          console.log(data2);
        });
      });
    });



    $(document).ready(function()
    {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });

  }

  AddToCart(){
    this.iCartItems.AddItem(this.item.itemModel , 1);
    this.message.success(this.item.itemModel.ItemName);
  }
}
