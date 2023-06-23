import { EspacioService } from '../service/espacio.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { RecursoService } from '../service/recurso.service';
import { ListaRecursosComponent } from '../lista-recursos/lista-recursos.component';
import { Recurso } from '../model/recurso'

@Component({
  selector: 'app-lista-espacios',
  templateUrl: './lista-espacios.component.html',
  styleUrls: ['./lista-espacios.component.css']
})

export class ListaEspaciosComponent {
  title = 'espacio dashboard';

  recurso_selected: string = '';
  estado_selected: string = '';

  listaSol: Recurso[] = [];
  
  recursoDetails = null as any;
  espacioDetails = null as any;
  
  espacioToUpdate = {
    id:"",
    nombre:"",
    capacidad:"",
    recursos:"",
    estadoEspacio:""
  }

  constructor(private espacioService: EspacioService, private recursoService: RecursoService) {
    this.getEspaciosDetails();
    this.getRecursosDetails();
  }

  cambiarRecurso(e){
    console.log(e.target.value)
    this.recurso_selected =e.target.value;
  }

  getRecursosDetails() {
    this.recursoService.getRecursos().subscribe(
      (resp) => {
        console.log(resp);
        this.recursoDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  register(registerForm: NgForm) {
    this.espacioService.registerEspacio(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.listaSol.push(registerForm.value)
        this.getEspaciosDetails();
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

  deleteEspacio(espacio: any) {
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
        this.espacioService.deleteEspacio(espacio.id).subscribe(
          (resp) => {
            console.log(resp);
            this.getEspaciosDetails();
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

  edit(espacio: any){
    this.espacioToUpdate = espacio;
  }

  updateEspacio(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.espacioService.updateEspacios(this.espacioToUpdate).subscribe(
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