import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component'
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})

export class AppComponent {
  title = 'My_PortFolio';
}
