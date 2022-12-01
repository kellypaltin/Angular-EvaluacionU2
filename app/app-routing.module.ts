import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/productos/listar/listar.component';

const routes: Routes = [
  {path: '', component: ListarComponent},   
  {path: "products/list", component: ListarComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
