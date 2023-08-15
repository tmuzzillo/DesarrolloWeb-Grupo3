import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EspacioService {

  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los espacios en el back
  private baseURL = "http://localhost:8080/espacios";

  //Este metodo obtiene los espacios
  getEspacios(){
    return this.http.get(this.baseURL+"/todos");
  }

  //Este metodo registra un espacio
  public registerEspacio(espacioData: any){
    return this.http.post(this.baseURL + '/registerEspacio', espacioData);
  }

  //Este metodo actualiza un espacio
  updateEspacios(espacio:any){
    return this.http.put(this.baseURL + '/updateEspacios', espacio);
  }
  
  //Este metodo elimina un espacio
  deleteEspacio(id:number){
    return this.http.delete(this.baseURL + '/deleteEspacio?id=' + id);
  }

  //Este metodo obtiene o busca un espacio
  getEspacioById(id:number){
    return this.http.get(this.baseURL+"/espacios"+id);
  }
}
