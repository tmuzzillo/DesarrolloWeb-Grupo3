import { SolicitanteService } from '../service/solicitante.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { RolService } from '../service/rol.service';
import { ListaRolesComponent } from '../lista-roles/lista-roles.component';
import { Rol } from '../model/rol'

@Component({
  selector: 'app-lista-solicitantes',
  templateUrl: './lista-solicitantes.component.html',
  styleUrls: ['./lista-solicitantes.component.css']
})

export class ListaSolicitantesComponent {
  title = 'solicitante dashboard';

  selected: string = '';

  listaSol: Rol[] = [];
  
  rolDetails = null as any;
  solicitanteDetails = null as any;
  solicitanteToUpdate = {
    id:"",
    nombre:"",
    apellido:"",
    dni:"",
    roles:""
  }

  constructor(private solicitanteService: SolicitanteService, private rolService: RolService) {
    this.getSolicitantesDetails();
    this.getRolesDetails();
  }

  cambiarRol(e){
    console.log(e.target.value)
    this.selected =e.target.value;
  }

  getRolesDetails() {
    this.rolService.getRoles().subscribe(
      (resp) => {
        console.log(resp);
        this.rolDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  register(registerForm: NgForm) {
    this.solicitanteService.registerSolicitante(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.listaSol.push(registerForm.value)
        this.getSolicitantesDetails();
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

  deleteSolicitante(solicitante: any) {
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
        this.solicitanteService.deleteSolicitante(solicitante.id).subscribe(
          (resp) => {
            console.log(resp);
            this.getSolicitantesDetails();
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

  edit(solicitante: any){
    this.solicitanteToUpdate = solicitante;
  }

  updateSolicitante(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.solicitanteService.updateSolicitantes(this.solicitanteToUpdate).subscribe(
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