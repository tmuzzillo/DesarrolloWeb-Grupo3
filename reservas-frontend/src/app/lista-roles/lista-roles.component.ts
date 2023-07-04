import { RolService } from '../service/rol.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})

export class ListaRolesComponent {
  title = 'rol dashboard';

  time = '6:00 am';
  minDate: Date;
  maxDate: Date;

  rolDetails = null as any;
  rolToUpdate = {
    id:"",
    nombre:"",
  }

  constructor(private rolService: RolService) {
    this.getRolesDetails();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 0, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 31, 5, 20);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  register(registerForm: NgForm) {
    this.rolService.registerRol(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getRolesDetails();
      },
      (err) => {
        console.log(err);
      }
    );
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

  deleteRol(rol: any) {
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
        this.rolService.deleteRol(rol.id).subscribe(
          (resp) => {
            console.log(resp);
            this.getRolesDetails();
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

  edit(rol: any){
    this.rolToUpdate = rol;
  }

  updateRol(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.rolService.updateRoles(this.rolToUpdate).subscribe(
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

/*
import { Router } from '@angular/router';
import { RolService } from '../rol.service';
import { Rol } from './../rol';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})
export class ListaRolesComponent implements OnInit{
  roles:Rol[];
  rol : Rol;

  rolesDetails = null as any;
  rolToUpdate = {
    id: "",
    nombre: ""
  };

  constructor(private service:RolService, private router:Router) {
    this.getRolesDetails();
   }

  ngOnInit(): void{
    this.getRoles(); 
  }

  getRolesDetails() {
    this.service.getListaRoles().subscribe(
      (resp) => {
        console.log(resp);
        this.rolesDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editar(rol: any) {
    this.router.navigate(["actualizar-rol"]);
  }

  private getRoles(){
    this.service.getListaRoles().subscribe(data => {
      this.roles = data;
    });
  }

  private getRol(id){
    this.service.getRolById(id).subscribe(data => {
      this.rol = data;
    })
  }

  actualizarRol() {
    this.service.actualizarRol(this.rolToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarRol(rol: any) {
    this.service.eliminarRol(rol.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getRolesDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  
}

*/