import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceCubos } from './services/service.cubos';
import { ServiceSeguridad } from './services/service.seguridad';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CubomarcaComponent } from './components/cubomarca/cubomarca.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CerrarsesionComponent } from './components/cerrarsesion/cerrarsesion.component';
import { MenuususarioComponent } from './components/menuususario/menuususario.component';
import { ComprasrealizadasComponent } from './components/comprasrealizadas/comprasrealizadas.component';
import { PerfilseguridadComponent } from './components/perfilseguridad/perfilseguridad.component';
import { CreatecompraComponent } from './components/createcompra/createcompra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CubomarcaComponent,
    DetallescuboComponent,
    LoginComponent,
    RegistroComponent,
    CerrarsesionComponent,
    MenuususarioComponent,
    ComprasrealizadasComponent,
    PerfilseguridadComponent,
    CreatecompraComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing
  ],
  providers: [appRoutingProviders, ServiceCubos, ServiceSeguridad],
  bootstrap: [AppComponent]
})
export class AppModule { }
