import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SamsungItemsComponent } from './_categoryItems/samsung-items/samsung-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import {DataServices} from "./Shared/ApiServices";
import {MessageService} from "./Shared/Message";

import {HttpClientModule} from "@angular/common/http";
import { ItemBoxComponent } from './_boxes/item-box/item-box.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { ItemListBoxComponent } from './_boxes/item-list-box/item-list-box.component';
import { XiaomiItemsComponent } from './_categoryItems/xiaomi-items/xiaomi-items.component';
import { AppleItemsComponent } from './_categoryItems/apple-items/apple-items.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import {ShoppingCartService} from "./Shared/ShoppingCartService";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SamsungItemsComponent,
    ItemDetailsComponent,
    ItemBoxComponent,
    SiteLayoutComponent,
    ItemListBoxComponent,
    XiaomiItemsComponent,
    AppleItemsComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ShoppingCartService ,DataServices , MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
