import { RolService } from '../service/rol.service';
import { HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { Rol } from '../model/rol'

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})

export class ListaRolesComponent implements OnInit {
  title = 'rol dashboard';

  time = '6:00 am';
  minDate: Date;
  maxDate: Date;

  rolDetails = null as any;
  rolToUpdate = {
    id:"",
    nombre:"",
  }
  //Para paginacion
  roles: Rol[];
  currentPage = 0;
  pageSize = 5;
  totalPages: number[];
  totalItems: number = 0;

  constructor(private rolService: RolService) {
    this.getRoles();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 0, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 31, 5, 20);
  }

  ngOnInit(): void {
    this.getRoles();
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  getRoles(): void {
    this.rolService.getRolesPaginados(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<Rol[]>) => {
        console.log('API Response:', response.body);
        this.roles = response.body;
  
        // Get the totalItems from the X-Total-Count header
        const totalCountHeader = response.headers.get('X-Total-Count');
        console.log('header:', totalCountHeader);
        this.totalItems = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
  
        this.totalPages = Array.from({ length: Math.ceil(this.totalItems / this.pageSize) }).map((_, i) => i);
        console.log('total pages:', this.totalPages);
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getRoles();
  }

  register(registerForm: NgForm) {
    this.rolService.registerRol(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getRoles();
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
            this.getRoles();
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
            window.location.reload();
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