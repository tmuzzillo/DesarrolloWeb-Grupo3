import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  //Esta URL obtiene el listado de todos los roles en el back
  private baseURL = "http://localhost:8080/roles/todos";

  constructor(private httpClient: HttpClient) { }

  //Este metodo obtiene los roles
  getListaRoles():Observable<Rol[]>{
    return this.httpClient.get<Rol[]>(`${this.baseURL}`);
  }
}
