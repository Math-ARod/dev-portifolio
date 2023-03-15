import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HabilidadesComponent,
    ProjetosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
