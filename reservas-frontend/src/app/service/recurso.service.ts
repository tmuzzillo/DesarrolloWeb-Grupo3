import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurso } from '../model/recurso';
import { Page } from '../page';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los recursoes en el back
  private baseURL = "http://localhost:8080/recursos";

  //Este metodo obtiene los recursos
  /*
  getRecursos(){
    return this.http.get(this.baseURL);
  }
  */
  
   // Este método obtiene los recursos paginados
   getRecursosPaginados(page: number, size: number): Observable<HttpResponse<Recurso[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Recurso[]>(this.baseURL, { params, observe: 'response' });
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