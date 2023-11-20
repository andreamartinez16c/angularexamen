import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceCubos } from './services/service.cubos';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CubomarcaComponent } from './components/cubomarca/cubomarca.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CerrarsesionComponent } from './components/cerrarsesion/cerrarsesion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CubomarcaComponent,
    DetallescuboComponent,
    LoginComponent,
    RegistroComponent,
    CerrarsesionComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing
  ],
  providers: [appRoutingProviders, ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
