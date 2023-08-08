import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los reservaes en el back
  private baseURL = "http://192.168.0.120:8080/reservas";

  //Este metodo obtiene los reservas
  getReservas(){
    return this.http.get(this.baseURL+"/todos");

  }

  //Este metodo registra un reserva
  public registerReserva(reservaData: any){
    return this.http.post(this.baseURL + '/registerReserva', reservaData);
  }

  //Este metodo actualiza un reserva
  updateReservas(reserva:any){

console.log(reserva)

    return this.http.put(this.baseURL + '/updateReservas', reserva);
  }
  
  //Este metodo elimina un reserva
  deleteReserva(id:number){
    return this.http.delete(this.baseURL + '/deleteReserva?id=' + id);
  }

  //Este metodo obtiene o busca un reserva
  getReservaById(id:number){
    return this.http.get(this.baseURL+"/reservas"+id);
  }

}


