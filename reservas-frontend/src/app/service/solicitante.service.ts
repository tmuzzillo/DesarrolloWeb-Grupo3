import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los solicitantees en el back
  private baseURL = "http://localhost:8080";

  //Este metodo obtiene los solicitantes
  getSolicitantes(){
    return this.http.get(this.baseURL+"/getSolicitantes");
  }

  //Este metodo registra un solicitante
  public registerSolicitante(solicitanteData: any){
    return this.http.post(this.baseURL + '/registerSolicitante', solicitanteData);
  }

  //Este metodo actualiza un solicitante
  updateSolicitantes(solicitante:any){
    return this.http.put(this.baseURL + '/updateSolicitantes', solicitante);
  }
  
  //Este metodo elimina un solicitante
  deleteSolicitante(id:number){
    return this.http.delete(this.baseURL + '/deleteSolicitante?id=' + id);
  }

  //Este metodo obtiene o busca un solicitante
  getSolicitanteById(id:number){
    return this.http.get(this.baseURL+"/solicitantes"+id);
  }
}
