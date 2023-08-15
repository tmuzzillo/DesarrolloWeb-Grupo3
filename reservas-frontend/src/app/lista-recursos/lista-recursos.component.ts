import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Recurso } from '../model/recurso';
import { Page } from '../page';
import { RecursoService } from '../service/recurso.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-lista-recursos',
  templateUrl: './lista-recursos.component.html',
  styleUrls: ['./lista-recursos.component.css']
})
export class ListaRecursosComponent implements OnInit {
  recursos: Recurso[];
  currentPage = 0;
  pageSize = 5;
  totalPages: number[];
  totalItems: number = 0;

  recursoToUpdate = {
    id: "",
    nombre: "",
    descripcion: "",
  };

  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
    this.cargarRecursos();
  }

  cargarRecursos(): void {
    this.recursoService.getRecursosPaginados(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<Recurso[]>) => {
        console.log('API Response:', response.body);
        this.recursos = response.body;
  
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
    this.cargarRecursos();
  }

  register(registerForm: NgForm) {
    this.recursoService.registerRecurso(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.cargarRecursos();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteRecurso(recurso: any) {
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
        this.recursoService.deleteRecurso(recurso.id).subscribe(
          (resp) => {
            console.log(resp);
            this.cargarRecursos();
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

  edit(recurso: any) {
    this.recursoToUpdate = recurso;
  }

  updateRecurso() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.recursoService.updateRecursos(this.recursoToUpdate).subscribe(
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
