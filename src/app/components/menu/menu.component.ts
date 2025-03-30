import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './menu.component.scss',
  standalone: true,
})
export class MenuComponent {

}
