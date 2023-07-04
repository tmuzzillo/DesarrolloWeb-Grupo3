import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  //Esta URL obtiene el listado de todos los roles en el back
  private baseURL = "http://192.168.100.108:8080";

  //Este metodo obtiene los roles
  getRoles(){
    return this.http.get(this.baseURL+"/getRoles");
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
