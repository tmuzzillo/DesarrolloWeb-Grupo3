
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
import { DatePipe } from '@angular/common';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})

export class ListaReservasComponent implements OnInit {
  public data: Object[] = [];
  public orderData: Reserva = new Reserva();
  public pageSettings: PageSettingsModel;
  public editSettings: EditSettingsModel;

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

reservaCreate = {
  id:0,
  fecha: new Date(),
   horaDesde: new Date(),
horaHasta :new Date(),
  cantidadReserva:1,
 motivo:"",
 fechaHoraReserva:new Date(),
 solicitante:"",
 espacio:""

  }

  reservaToUpdate = {
    id: "",
    fecha: "",
    horaDesde: "",
    horaHasta: "",
    cantidadReserva: "",
    motivo: "",
    fechaHoraReserva: "",
    solicitante: "",
    espacio: "",
  }

  constructor(private reservaService: ReservaService, private solicitanteService: SolicitanteService, private espacioService: EspacioService, private datePipe: DatePipe) {
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
    const formattedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(formattedDate);
    
    this.getReservasDetails();
/*    
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
  */  
  }

  myFilter = (d: Date | null): boolean => {
    const currentDate = new Date();
    currentDate.setHours(0, -3, 0, 0); // Asegurarse de que la hora esté a medianoche
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
    }else if (args.requestType === 'delete') {
      this.deleteReserva(args); // Llamada al método de eliminación
    }
    
  }


  formatDate(dateTime: Date): string {
    return this.datePipe.transform(dateTime, 'dd/MM/yyyy HH:mm', '+0000');
  }

  formatHour(dateTime: Date): string {
    const milisegundosParaRestar = 3 * 60 * 60 * 1000;
    const valorOriginalEnMilisegundos = dateTime.getTime();
    const fechaResultado = new Date(valorOriginalEnMilisegundos - milisegundosParaRestar);
  
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
  
    return new Intl.DateTimeFormat('es-AR', options).format(fechaResultado);
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
    registerForm.value.horaDesde=this.horaDesdeValue;
    registerForm.value.horaHasta=this.horaHastaValue;
    this.reservaCreate.fecha=this.dateValue;
    this.reservaCreate.horaDesde=this.horaDesdeValue;
    this.reservaCreate.horaHasta=this.horaHastaValue;
    this.reservaCreate.cantidadReserva=registerForm.value.cantidadReserva;
    this.reservaCreate.motivo=registerForm.value.motivoReserva;
    this.reservaCreate.solicitante=this.selectedSolicitante;
    this.reservaCreate.espacio=this.selectedEspacio;
    this.reservaCreate.fechaHoraReserva=new Date()
    this.reservaService.registerReserva(this.reservaCreate).subscribe(
      (response: any) => {
        console.log(response.toString());
        registerForm.reset();
        this.listaSol.push(registerForm.value);
        this.getReservasDetails();
      },
      (error: HttpErrorResponse) => {
        Swal.fire('Error', "La fecha de la reserva no es valida, tiene conflictos con otras reservas", 'error');
        console.log(error);
    
        // El manejo del error ya se realizó en la función registerReserva
        // No es necesario hacerlo aquí nuevamente
      }
    );
      /*
      (resp: HttpResponse) => {
        const errorMessage = resp.error.message;
        if(resp.toString().includes("status:409")){
          Swal.fire('Error', "La fecha de la reserva no es valida, tiene conflictos con otras reservas", 'error');
          return;
        }
        console.log(resp.toString())
//        registerForm.reset();
        this.listaSol.push(registerForm.value)
        this.getReservasDetails();
      },
      (err) => {
        console.log(err);
      }*/
    
  }

  getReservasDetails() {
    this.reservaService.getReservas().subscribe(
      (resp: any) => {
        if (Array.isArray(resp)) {
          this.data = resp.map((reserva: any) => {
            return {
              id: reserva.id,
              fecha: this.formatDate(new Date(reserva.fecha)),
              horaDesde: this.formatHour(new Date(reserva.horaDesde)),
              horaHasta: this.formatHour(new Date(reserva.horaHasta)),
              cantidadReserva: reserva.cantidadReserva,
              motivo: reserva.motivo,
              fechaHoraReserva: this.formatDate(new Date(reserva.fechaHoraReserva)),
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
    console.log(reserva.data[0].id)
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
        this.reservaService.deleteReserva(reserva.data[0].id).subscribe(
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

  updateReserva(registerForm: NgForm) {
    console.log("update")
    if (this.horaHastaValue < this.horaDesdeValue) {
      Swal.fire('Error', 'La hora de finalización no puede ser menor que la hora de inicio', 'error');
      return; // No se registra la reserva si la validación falla
    }
    //registerForm.value.horaDesde=this.horaDesdeValue;
    //registerForm.value.horaHasta=this.horaHastaValue;
    this.reservaCreate.fecha=this.dateValue;
    this.reservaCreate.horaDesde=this.horaDesdeValue;
    this.reservaCreate.horaHasta=this.horaHastaValue;
    this.reservaCreate.cantidadReserva=registerForm.value.cantidadReserva;
    this.reservaCreate.motivo=registerForm.value.motivoReserva;
    this.reservaCreate.solicitante=this.selectedSolicitante;
    this.reservaCreate.espacio=this.selectedEspacio;
    this.reservaCreate.fechaHoraReserva=this.dateValue;
    this.reservaService.registerReserva(this.reservaCreate).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.listaSol.push(registerForm.value)
        this.getReservasDetails();
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
