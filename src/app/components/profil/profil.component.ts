import { Component, OnInit } from '@angular/core';
import { LocalJSONService } from '../../services/LocalJSONService/local-jsonservice.service';
@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent implements OnInit{
  LocalJSON:any = [];
  profil: any;

  constructor(public localJSON: LocalJSONService) {}

  getInfo() {
    this.localJSON.getAllLocalJSON$().subscribe(
     res => {
       this.profil = res;
     }
    )
   }

   ngOnInit() {
    this.getInfo()
  }
}
