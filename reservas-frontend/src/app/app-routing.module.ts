import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';

const routes: Routes = [
  {path: 'roles',component:ListaRolesComponent},
  {path: ' ',redirectTo:'roles',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
