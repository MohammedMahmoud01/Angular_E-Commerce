import {Component, Input, OnInit} from '@angular/core';
import {IItems} from "../../Shared/Models";
import {ApiConfig} from "../../Shared/ApiConfig";

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {

  constructor() { }

  ServerUrl : string = ApiConfig.ServerUrl +"/" + "Uploads/";

  @Input() item :IItems | any;
  ngOnInit(): void {
  }

}
