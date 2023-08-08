import { RecursoService } from '../service/recurso.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Recurso } from '../model/recurso';
import { Page } from '../page';

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

  title = 'recurso dashboard';

  recursoDetails = null as any;
  recursoToUpdate = {
    id: "",
    nombre: "",
    descripcion: "",
  }

  constructor(private recursoService: RecursoService) {
    //this.getRecursosDetails();
  }

  ngOnInit(): void {
    this.cargarRecursos();
  }

  cargarRecursos(): void {
    this.recursoService.getRecursosPaginados(this.currentPage, this.pageSize)
      .subscribe((data: Page<Recurso>) => {
        this.recursos = data.content;
        this.totalPages = new Array(data.totalPages).fill(0).map((x, i) => i);
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
  /*
  getRecursosDetails() {
    this.recursoService.getRecursosPaginados().subscribe(
      (resp) => {
        console.log(resp);
        this.recursoDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  */

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
