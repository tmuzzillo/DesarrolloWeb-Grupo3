
import { ReservaService } from '../service/reserva.service';
import * as bootstrap from 'bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { SolicitanteService } from '../service/solicitante.service';
import { Solicitante } from '../model/solicitante';
import { EspacioService } from '../service/espacio.service';
import { Espacio } from '../model/espacio';
import { DialogEditEventArgs, PageSettingsModel, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { Reserva } from '../model/reserva';


@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})

export class ListaReservasComponent implements OnInit {

  public data: Object[] = [];
  public orderData: Reserva = new Reserva();
  public pageSettings: PageSettingsModel;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  @ViewChild('orderForm') public orderForm?: FormGroup;

  title = 'reserva dashboard';

  selectedSolicitante: string = '';

  selectedEspacio: string = '';

  time = '6:00 am';
  dateValue: Date;
  horaDesdeValue: Date;
  horaHastaValue: Date;
  minDate: Date;
  maxDate: Date;
  listaSol: Solicitante[] = [];

  cantidadReservaValue: string;

  solicitanteDetails = null as any;
  espacioDetails = null as any;
  reservaDetails = null as any;

  espacio = {
    id: "",
    nombre: "",
    capacidad: "",
    recursos: "",
  }

  solicitante = {
    id: "",
    nombre: "",
    apellido: "",
    dni: "",
    roles: "",
  }

  reservaToUpdate = {
    id: "",
    fecha: "",
    horaDesde: "",
    horaHasta: "",
    cantidadReserva: "",
    motivo: "",
    fechaHoraReserva: "",
    solicitantes: "",
    espacios: "",
  }

  constructor(private reservaService: ReservaService, private solicitanteService: SolicitanteService, private espacioService: EspacioService) {
    this.getReservasDetails();
    this.getSolicitantesDetails();
    this.getEspaciosDetails();

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 0, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 31, 5, 20);

    this.pageSettings = { pageSize: 6 };

    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog'};
    this.toolbar = ['Edit', 'Delete'];
  }

  ngOnInit(): void {
    //this.getReservasDetails();
    
    this.data = [
      { id: 1, fecha: new Date(7, 10, 2023), horaDesde: new Date(2023, 7, 10, 10, 0), horaHasta: new Date(2023, 7, 10, 12, 0), cantidadReserva: 5, motivo: 'Reunión', fechaHoraReserva: new Date(2023, 7, 10, 9, 0), solicitantes: 'Juan Pérez', espacios: 'Sala de Conferencias' },
      { id: 2, fecha: new Date(2023, 7, 11), horaDesde: new Date(2023, 7, 11, 14, 0), horaHasta: new Date(2023, 7, 11, 16, 0), cantidadReserva: 10, motivo: 'Presentación', fechaHoraReserva: new Date(2023, 7, 11, 13, 0), solicitantes: 'María López', espacios: 'Sala de Reuniones' },
      { id: 3, fecha: new Date(2023, 7, 12), horaDesde: new Date(2023, 7, 12, 9, 0), horaHasta: new Date(2023, 7, 12, 11, 0), cantidadReserva: 8, motivo: 'Entrevista', fechaHoraReserva: new Date(2023, 7, 12, 8, 0), solicitantes: 'Carlos Gómez', espacios: 'Oficina 101' },
      { id: 4, fecha: new Date(2023, 7, 13), horaDesde: new Date(2023, 7, 13, 16, 0), horaHasta: new Date(2023, 7, 13, 18, 0), cantidadReserva: 15, motivo: 'Capacitación', fechaHoraReserva: new Date(2023, 7, 13, 15, 0), solicitantes: 'Ana Martínez', espacios: 'Sala de Capacitación' },
      { id: 5, fecha: new Date(2023, 7, 14), horaDesde: new Date(2023, 7, 14, 10, 0), horaHasta: new Date(2023, 7, 14, 13, 0), cantidadReserva: 4, motivo: 'Reunión', fechaHoraReserva: new Date(2023, 7, 14, 9, 30), solicitantes: 'David Fernández', espacios: 'Sala de Reuniones' },
      { id: 6, fecha: new Date(2023, 7, 15), horaDesde: new Date(2023, 7, 15, 12, 0), horaHasta: new Date(2023, 7, 15, 15, 0), cantidadReserva: 7, motivo: 'Presentación', fechaHoraReserva: new Date(2023, 7, 15, 11, 0), solicitantes: 'Luisa Rodríguez', espacios: 'Sala de Conferencias' },
      { id: 7, fecha: new Date(2023, 7, 16), horaDesde: new Date(2023, 7, 16, 9, 0), horaHasta: new Date(2023, 7, 16, 11, 0), cantidadReserva: 3, motivo: 'Reunión', fechaHoraReserva: new Date(2023, 7, 16, 8, 30), solicitantes: 'Pedro Sánchez', espacios: 'Oficina 202' },
      { id: 8, fecha: new Date(2023, 7, 17), horaDesde: new Date(2023, 7, 17, 14, 0), horaHasta: new Date(2023, 7, 17, 16, 0), cantidadReserva: 9, motivo: 'Capacitación', fechaHoraReserva: new Date(2023, 7, 17, 13, 0), solicitantes: 'Laura Pérez', espacios: 'Sala de Capacitación' },
      { id: 9, fecha: new Date(2023, 7, 18), horaDesde: new Date(2023, 7, 18, 11, 0), horaHasta: new Date(2023, 7, 18, 13, 0), cantidadReserva: 6, motivo: 'Entrevista', fechaHoraReserva: new Date(2023, 7, 18, 10, 30), solicitantes: 'Gabriel Gutiérrez', espacios: 'Oficina 105' },
      { id: 10, fecha: new Date(2023, 7, 19), horaDesde: new Date(2023, 7, 19, 15, 0), horaHasta: new Date(2023, 7, 19, 17, 0), cantidadReserva: 12, motivo: 'Reunión', fechaHoraReserva: new Date(2023, 7, 19, 14, 0), solicitantes: 'Isabel Castro', espacios: 'Sala de Reuniones' },
    ];
    
  }

  myFilter = (d: Date | null): boolean => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Asegurarse de que la hora esté a medianoche
    return d && d >= currentDate;
  };

  actionBegin(args: SaveEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = new Reserva(); // Crear una instancia de la clase Reserva
      for (const key in args.rowData) {
        if (args.rowData.hasOwnProperty(key)) {
          this.orderData[key] = args.rowData[key];
        }
      }
    }
    if (args.requestType === 'save') {
      if (this.orderForm?.valid) {
        args.data = this.orderData;
      } else {
        args.cancel = true;
      }
    }
  }

  actionComplete(args: DialogEditEventArgs): void {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      (args.form as any).ej2_instances[0].rules = {};
      // Set initail Focus
      if (args.requestType === 'beginEdit') {
        (args.form?.elements.namedItem('motivo') as HTMLInputElement).focus();
      }
    }
  }


  formatDate(dateTime: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Para usar el formato de 24 horas
    };
    return new Intl.DateTimeFormat('es-AR', options).format(dateTime);
  }

  cambiarSolicitante(e) {
    console.log(e.target.value)
    this.selectedSolicitante = e.target.value;
  }

  
  cambiarEspacio(e) {
    console.log(e.target.value)
    this.selectedEspacio = e.target.value;
  }
  

  filterOnlyNumbers(event: any) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ''); // Filtrar solo números

    // Actualizar el valor del campo con los números filtrados
    this.cantidadReservaValue = numericValue;
  }

  preventNonNumericInput(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  register(registerForm: NgForm) {
    if (this.horaHastaValue < this.horaDesdeValue) {
      Swal.fire('Error', 'La hora de finalización no puede ser menor que la hora de inicio', 'error');
      return; // No se registra la reserva si la validación falla
    }

    this.reservaService.registerReserva(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.listaSol.push(registerForm.value)
        this.getReservasDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getReservasDetails() {
    this.reservaService.getReservas().subscribe(
      (resp: any) => {
        if (Array.isArray(resp)) {
          this.data = resp.map((reserva: any) => {
            console.log(this.data)
            return {
              id: reserva.id,
              fecha: reserva.fecha,
              horaDesde: reserva.horaDesde,
              horaHasta: reserva.horaHasta,
              cantidadReserva: reserva.cantidadReserva,
              motivo: reserva.motivo,
              fechaHoraReserva: reserva.fechaHoraReserva,
              solicitantes: reserva.solicitantes.nombre,
              espacios: reserva.espacios.nombre
            };
            
          });
        } else {
          console.error('Invalid response format: Expected an array.');
        }
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

  edit(reserva: any) {
    this.reservaToUpdate = reserva;
  }

  updateReserva() {
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
