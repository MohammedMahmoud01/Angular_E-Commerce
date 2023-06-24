import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../Shared/ShoppingCartService";
import {ApiConfig} from "../Shared/ApiConfig";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private iCartItems:ShoppingCartService) { }
  myItems:any = [];
  totalPrice:any ;
  serverUrl : string = ApiConfig.ServerUrl +"/" + "Uploads/";
  ngOnInit(): void {
    this.myItems = this.iCartItems.cartItems;
    this.totalPrice = this.iCartItems.CalcTotalPrice();
  }
  CalcPrice(){
    alert(1);
  }
}
