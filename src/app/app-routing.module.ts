import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ImcComponent } from './components/pages/imc/imc.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { TreinosComponent } from './components/pages/treinos/treinos.component';
import { ImcDeleteDialogComponent } from './components/pages/imc/imc-delete-dialog/imc-delete-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'imc',
    component: ImcComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'treinos',
    component: TreinosComponent,
  },
  {
    path: "imcs/delete/:id",
    component: ImcDeleteDialogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
