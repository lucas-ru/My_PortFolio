import { Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
import { LocalJSONService } from '../../services/LocalJSONService/local-jsonservice.service'
@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  LocalJSON:any = []
  exp: any

  constructor(public localJSON: LocalJSONService) {}

  getInfo() {
   this.localJSON.getExperienceLocalJSON$().subscribe(
    res => {
      this.exp = res[0];
    }
   )
  }

  ngOnInit() {
    this.getInfo()
  }
}
