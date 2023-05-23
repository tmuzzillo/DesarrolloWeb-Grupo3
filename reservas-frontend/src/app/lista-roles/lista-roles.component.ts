import { RolService } from '../rol.service';
import { Rol } from './../rol';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})
export class ListaRolesComponent implements OnInit{
  roles:Rol[];

  constructor(private rolService:RolService) { }

  ngOnInit(): void{
    this.getRoles();
    
  }

  private getRoles(){
    this.rolService.getListaRoles().subscribe(data => {
      this.roles = data;
    });
  }
}
