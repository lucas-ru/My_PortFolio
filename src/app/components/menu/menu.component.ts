import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfilComponent } from "../profil/profil.component";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [RouterLink, RouterLinkActive, ProfilComponent],
  styleUrl: './menu.component.scss',
  standalone: true,
})
export class MenuComponent {

}
