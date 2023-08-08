
import { ReservaService } from '../service/reserva.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { SolicitanteService } from '../service/solicitante.service';
import { Solicitante } from '../model/solicitante';
import { EspacioService } from '../service/espacio.service';
import { Espacio } from '../model/espacio';


@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})


export class ListaReservasComponent {
  title = 'reserva dashboard';

  selected: string = '';

  time = '6:00 am';
  minDate: Date;
  maxDate: Date;
  
  solicitanteDetails = null as any;
  espacioDetails = null as any;
  reservaDetails = null as any;

  espacio={
    id:"",
    nombre:"",
    capacidad:"",
    recursos:"",
  }

  solicitante={
    id:"",
    nombre:"",
    apellido:"",
    dni:"",
    roles:"",
  }

  reservaToUpdate = {
    id:"",
    fecha:"",
    horaDesde:"",
    horaHasta:"",
    cantidadReserva:"",
    motivo:"",
    fechaHoraReserva:"",
    solicitantes:"",
    espacios:"",
  }

  constructor(private reservaService: ReservaService, private solicitanteService: SolicitanteService, private espacioService: EspacioService) {
    this.getReservasDetails();
    this.getSolicitantesDetails();

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 0, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 31, 5, 20);
  }
  
  cambiarSolicitante(e){
    console.log(e.target.value)
    this.selected =e.target.value;
  }

  cambiarEspacio(e){
    console.log(e.target.value)
    this.selected =e.target.value;
  }

  register(registerForm: NgForm) {
    this.reservaService.registerReserva(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getReservasDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getReservasDetails() {
    this.reservaService.getReservas().subscribe(
      (resp) => {
        console.log(resp);
        this.reservaDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getSolicitantesDetails() {
    this.solicitanteService.getSolicitantes().subscribe(
      (resp) => {
        console.log(resp);
        this.solicitanteDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getEspaciosDetails() {
    this.espacioService.getEspacios().subscribe(
      (resp) => {
        console.log(resp);
        this.espacioDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteReserva(reserva: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reservaService.deleteReserva(reserva.id).subscribe(
          (resp) => {
            console.log(resp);
            this.getReservasDetails();
          },
          (err) => {
            console.log(err);
          }
        );
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  edit(reserva: any){
    this.reservaToUpdate = reserva;
  }

  updateReserva(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.reservaService.updateReservas(this.reservaToUpdate).subscribe(
          (resp) => {
            console.log(resp);
          },
          (err) => {
            console.log(err);
          }
        );
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
