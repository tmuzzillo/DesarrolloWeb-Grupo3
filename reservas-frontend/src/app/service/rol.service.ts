import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../model/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los roles en el back

  private baseURL = "http://localhost:8080/roles";


  //Este metodo obtiene los roles
  getRoles(){
    return this.http.get(this.baseURL+"/todos");
  }
  

  // Este método obtiene los recursos paginados
  getRolesPaginados(page: number, size: number): Observable<HttpResponse<Rol[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Rol[]>(this.baseURL, { params, observe: 'response' });
  }

  //Este metodo registra un rol
  public registerRol(rolData: any){
    return this.http.post(this.baseURL + '/registerRol', rolData);
  }

  //Este metodo actualiza un rol
  updateRoles(rol:any){
    return this.http.put(this.baseURL + '/updateRoles', rol);
  }
  
  //Este metodo elimina un rol
  deleteRol(id:number){
    return this.http.delete(this.baseURL + '/deleteRol?id=' + id);
  }

  //Este metodo obtiene o busca un rol
  getRolById(id:number){
    return this.http.get(this.baseURL+"/roles"+id);
  }
}
