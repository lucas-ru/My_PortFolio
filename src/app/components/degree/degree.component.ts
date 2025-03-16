import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalJSONService } from '../../services/LocalJSONService/local-jsonservice.service';

@Component({
  selector: 'app-degree',
  imports: [NgFor],
  templateUrl: './degree.component.html',
  styleUrl: './degree.component.scss'
})
export class DegreeComponent implements OnInit{

  LocalJSON:any = [];
  deg: any;
  
  constructor(public localJSON: LocalJSONService) {}

  getInfo() {
    this.localJSON.getDegreeLocalJSON$().subscribe(
     res => {
       this.deg = res[0];
     }
    )
   }

   ngOnInit() {
    this.getInfo()
  }
}
