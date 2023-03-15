import { ProjetosComponent } from './components/projetos/projetos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'habilidades', component: HabilidadesComponent},
  { path: 'projetos', component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
