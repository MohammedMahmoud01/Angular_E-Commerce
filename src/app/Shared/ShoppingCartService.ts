import {Injectable} from "@angular/core";
import {ICartItems, IItems} from "./Models";

export class ShoppingCartService {
  constructor() {
    let myItems: any;
    if(localStorage.getItem("cart")!== null)
    {
      myItems = localStorage.getItem("cart");
    }
    this.cartItems = JSON.parse(myItems);
  }
  cartItems:any =[];
  AddItem(item:any , qty:number){

    for(let i =0 ; i< this.cartItems.length; i++)
    {
      if(this.cartItems[i].ItemId===item.ItemId)
      {
        this.cartItems[i].Qty++;
        this.cartItems[i].Total = this.cartItems[i].Qty * item.SalesPrice;
        localStorage.setItem("cart" , JSON.stringify(this.cartItems));
        return;
      }
    }

    let newItem : ICartItems = {
      ItemId : item.ItemId,
      ImageName: item.ImageName,
      ItemName: item.ItemName,
      Price: item.SalesPrice,
      Qty: qty,
      Total: qty * item.SalesPrice
    };
    this.cartItems.push(newItem);
    localStorage.setItem("cart" , JSON.stringify(this.cartItems));
  }
  CalcTotalPrice() : number{
    let total = 0;
    for(let i =0 ; i< this.cartItems.length; i++)
    {
      total += this.cartItems[i].Total;
    }
    return total;
  }
}
