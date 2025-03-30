import { Component, OnInit } from '@angular/core';
import { LocalJSONService } from '../../services/LocalJSONService/local-jsonservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-misc',
  imports: [NgFor],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.scss'
})
export class MiscComponent implements OnInit{
  LocalJSON:any = []
  misc: any

  constructor(public localJSON: LocalJSONService) {}

  getInfo() {
   this.localJSON.getMiscLocalJSON$().subscribe(
    res => {
      this.misc = res[0];
    }
   )
  }

  ngOnInit() {
    this.getInfo()
  }
}
