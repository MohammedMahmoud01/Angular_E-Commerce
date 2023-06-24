import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {SamsungItemsComponent} from "./_categoryItems/samsung-items/samsung-items.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {SiteLayoutComponent} from "./_layout/site-layout/site-layout.component";
import {XiaomiItemsComponent} from "./_categoryItems/xiaomi-items/xiaomi-items.component";
import {AppleItemsComponent} from "./_categoryItems/apple-items/apple-items.component";
import {CartPageComponent} from "./cart-page/cart-page.component";

const routes: Routes = [

  // site layout
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {'path':'',component:HomePageComponent, pathMatch: 'full'},
      {'path':'Items/Samsung',component:SamsungItemsComponent},
      {'path':'Items/Xiaomi',component:XiaomiItemsComponent},
      {'path':'Items/Apple',component:AppleItemsComponent},
      {'path':'Cart',component:CartPageComponent},
      {'path':'ItemDetails/:Id',component:ItemDetailsComponent},
    ]
  },

  // admin layout will be here

  // you can configure no layout here directly

  // otherwise redirect to home

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
