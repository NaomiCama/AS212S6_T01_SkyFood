import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrasferenciaComponent } from './Components/trasferencia/trasferencia.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: 'transferencia', component: TrasferenciaComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
