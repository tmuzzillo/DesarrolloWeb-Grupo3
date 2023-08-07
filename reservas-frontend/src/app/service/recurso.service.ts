import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los recursoes en el back
  private baseURL = "http://localhost:8080";

  //Este metodo obtiene los recursos
  getRecursos(){
    return this.http.get(this.baseURL+"/getRecursos");
  }

  //Este metodo registra un recurso
  public registerRecurso(recursoData: any){
    return this.http.post(this.baseURL + '/registerRecurso', recursoData);
  }

  //Este metodo actualiza un recurso
  updateRecursos(recurso:any){
    return this.http.put(this.baseURL + '/updateRecursos', recurso);
  }
  
  //Este metodo elimina un recurso
  deleteRecurso(id:number){
    return this.http.delete(this.baseURL + '/deleteRecurso?id=' + id);
  }

  //Este metodo obtiene o busca un recurso
  getRecursoById(id:number){
    return this.http.get(this.baseURL+"/recursos"+id);
  }
}