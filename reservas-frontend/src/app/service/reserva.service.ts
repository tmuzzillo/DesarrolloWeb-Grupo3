import { Injectable } from '@angular/core';
import { Reserva } from '../model/reserva';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  errorMessage: string = '';
  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los reservaes en el back
  private baseURL = "http://localhost:8080/reservas";

  //Este metodo obtiene los reservas
  getReservas(){
    return this.http.get(this.baseURL+"/todos");

  }

  //Este metodo registra un reserva
  //public registerReserva(reservaData: any){
//    return this.http.post(this.baseURL, reservaData);
 // }
  
  public registerReserva(reservaData: any): Observable<any> {
    return this.http.post(this.baseURL, reservaData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 409) {
            this.errorMessage = error.error;
          } else {
            this.errorMessage = 'Ocurrió un error en la solicitud';
          }
          return throwError(error);
        })
      );
  }

  //Este metodo actualiza un reserva
  updateReservas(reserva:any){

    console.log(reserva)    

    return this.http.put(this.baseURL+ "/" + reserva.id, reserva);
  }
  
  //Este metodo elimina un reserva
  deleteReserva(id:number){
    return this.http.delete(this.baseURL + "/" + id);
  }

  //Este metodo obtiene o busca un reserva
  getReservaById(id:number){
    return this.http.get(this.baseURL+"/"+id);
  }

}


