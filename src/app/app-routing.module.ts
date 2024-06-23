import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrasferenciaComponent } from './Components/trasferencia/trasferencia.component';

const routes: Routes = [
  { path: '', component: TrasferenciaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
