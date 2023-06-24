import {Component, Input, OnInit} from '@angular/core';
import {ApiConfig} from "../../Shared/ApiConfig";

@Component({
  selector: 'app-item-list-box',
  templateUrl: './item-list-box.component.html',
  styleUrls: ['./item-list-box.component.css']
})
export class ItemListBoxComponent implements OnInit {

  constructor() { }
  ServerUrl : string = ApiConfig.ServerUrl +"/" + "Uploads/";
  @Input() item : any;
  ngOnInit(): void {
  }

}
