import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarModule } from 'primeng/calendar';

@Component({
  
  selector: 'app-root,calendar-format.demo',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,RouterLink,CalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectIS';
  date: Date | undefined;
}
