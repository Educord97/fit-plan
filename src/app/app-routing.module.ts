import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ImcComponent } from './components/pages/imc/imc.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { TreinosComponent } from './components/pages/treinos/treinos.component';
import { ImcDeleteComponent } from './components/pages/imc/imc-delete/imc-delete.component';
import { TreinosDeleteComponent } from './components/pages/treinos/treinos-delete/treino-delete.component';
import { TreinosUpdateComponent } from './components/pages/treinos/treinos-update/treinos-update.component';

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
    component: ImcDeleteComponent
  },
  {
    path: "treinos-criados/update/:id",
    component: TreinosUpdateComponent
  },
  {
    path: "treinos-criados/delete/:id",
    component: TreinosDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
