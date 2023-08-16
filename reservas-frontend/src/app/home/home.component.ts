import { Component } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){

  }

  redirectToReservas() {
    this.router.navigate(['/reservas']); // Cambia '/reservas' por la ruta real si es diferente
  }
}
