import { Component, OnInit } from '@angular/core';
import {DataServices} from "../../Shared/ApiServices";
declare var $:any;

@Component({
  selector: 'app-apple-items',
  templateUrl: './apple-items.component.html',
  styleUrls: ['./apple-items.component.css']
})
export class AppleItemsComponent implements OnInit {

  constructor(private IService:DataServices) { }

  CategoryItems : any;

  ngOnInit(): void {

    $(document).ready(function()
    {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });

    this.IService.GetCategoryData().subscribe((data)=>
    {
      this.CategoryItems = data;
      console.log(data);
    })
  }

}
