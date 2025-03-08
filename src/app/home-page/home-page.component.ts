import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IItems} from "../Shared/Models";
import {DataServices} from "../Shared/ApiServices";
import {MessageService} from "../Shared/Message";
import {ApiConfig} from "../Shared/ApiConfig";
declare var Swal: any;
declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route: Router , private IService:DataServices , private  message:MessageService) { }

  ServerUrl : string = ApiConfig.ServerUrl + "/Uploads/";

  HomeData: any;
  HomeData2:any;
  Sliders : any;

  ngOnInit(): void {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
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

    this.IService.GetHomePageItems().subscribe((data)=>
    {
      this.HomeData = data;
    });
    this.IService.GetSliders().subscribe((data)=>
    {
      this.Sliders = data;
    });
    this.IService.GetHomePageItems2().subscribe((data)=>
    {
      this.HomeData2 = data;
    });
  }

  NavigateToPage(){
    this.route.navigate(["/ItemDetails/1"])
    this.message.success("Success");
  }

}
