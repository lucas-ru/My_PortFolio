import { Component, NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component'

@Component({
  selector: 'app-root',
  imports: [MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})

export class AppComponent {
  title = 'My_PortFolio';
}
