import { ListaEspaciosComponent } from './lista-espacios/lista-espacios.component';
import { ListaRecursosComponent } from './lista-recursos/lista-recursos.component';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { ListaSolicitantesComponent } from './lista-solicitantes/lista-solicitantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'roles',component:ListaRolesComponent},
  {path: 'solicitantes',component:ListaSolicitantesComponent},
  {path: 'recursos',component:ListaRecursosComponent},
  {path: 'espacios',component:ListaEspaciosComponent},
  {path: ' ',redirectTo:'roles',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
