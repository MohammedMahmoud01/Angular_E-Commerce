import {ICategoryData, IHomePageData, IItemDetails, IItems, IRelatedData, ISliders} from "./Models";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiConfig} from "./ApiConfig";
import {Observable} from "rxjs";


@Injectable()
export class DataServices {
  constructor(private http:HttpClient) {}

  GetSliders() : Observable<Array<ISliders>>
  {
    return this.http.get<Array<ISliders>>(ApiConfig.ServerUrl + ApiConfig.SlidersApiEndPoint);
  }

  GetHomePageItems() : Observable<IHomePageData>
  {
    return this.http.get<IHomePageData>(ApiConfig.ServerUrl + ApiConfig.HomePageApiEndPoint);
  }

  GetHomePageItems2() : Observable<IHomePageData>
  {
    return this.http.get<IHomePageData>(ApiConfig.ServerUrl + ApiConfig.HomePageApi2EndPoint);
  }

  GetCategoryData() : Observable<ICategoryData>
  {
    return this.http.get<ICategoryData>(ApiConfig.ServerUrl + ApiConfig.CategoriesDataApiEndPoint);
  }

  GetItemById(id : number) : Observable<IItemDetails>
  {
    return this.http.get<IItemDetails>(ApiConfig.ServerUrl + ApiConfig.ItemByIdApiEndPoint + id);
  }

  GetRelatedItems(price : number) : Observable<IRelatedData>
  {
    return this.http.get<IRelatedData>(ApiConfig.ServerUrl + ApiConfig.RelatedItemsApiEndPoint + price);
  }

  Login(item:IItems)
  {
    const header = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post("" , JSON.stringify(item) , header);
  }
}
