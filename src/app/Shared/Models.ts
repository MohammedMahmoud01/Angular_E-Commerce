export interface IItems {
  ItemId:number;
  ItemName:string;
  ItemNameAr:string;
  ImageName?:string;
  SalesPrice:number;
  PurchasePrice:number;
  CategoryName:string;
  SubCategoryName:string;
  CategoryId:number;
  SubCategoryId:number;
  Quantity:number;
  DiscountPrice? : number;
}

export interface ISliders {
  SliderId:number;
  SliderImage:string;
  Descreption:string;
  LongDescreption:string
}

export  interface IImages {
  ImageId: number;
  ImageName: string;
  ItemId: number;
  Item?: any;
}

export interface IHomePageData
{
  HomePage: [{ lstNewItems : Array<IItems> ,  lstPopularItems : Array<IItems> , lstItemsDiscount : Array<IItems> }];
}

export interface ICategoryData {
  CategoryItems : [{lstSamsung : IItems[] ,  lstXiaomi : IItems[] , lstApple : IItems[] }]
}

export interface IItemDetails {
  ItemDetails : [{itemModel : IItems ,  itemDiscountModel : IItems , lstImages : IImages[] }]
}

export interface IRelatedData {
  RelatedItems : [{lstRelatedItems : Array<IItems> , lstRelatedItems2 : IItems[] }]
}

export  interface ICartItems {
  ItemId:number;
  ImageName?: string;
  ItemName:string;
  Price:number;
  Qty:number;
  Total:number;
}
