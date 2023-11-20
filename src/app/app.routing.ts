import { HomeComponent } from "./components/home/home.component";
import { CubomarcaComponent } from "./components/cubomarca/cubomarca.component";
import { DetallescuboComponent } from "./components/detallescubo/detallescubo.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { CerrarsesionComponent } from "./components/cerrarsesion/cerrarsesion.component";
import { PerfilseguridadComponent } from "./components/perfilseguridad/perfilseguridad.component";
import { ComprasrealizadasComponent } from "./components/comprasrealizadas/comprasrealizadas.component";
import { CreatecompraComponent } from "./components/createcompra/createcompra.component";
import { MenuususarioComponent } from "./components/menuususario/menuususario.component";

import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core'

const appRoutes: Routes= [
    {path: "", component: HomeComponent},
    {path: "cuboMarca/:marca", component: CubomarcaComponent},
    {path: "detallescubo/:idcubo", component: DetallescuboComponent},
    {path: "login", component: LoginComponent},
    {path: "registro", component: RegistroComponent},
    {path: "cerrarsesion", component: CerrarsesionComponent},
    {path: "perfil", component: PerfilseguridadComponent},
    {path: "compras", component: ComprasrealizadasComponent},
    {path: "createcompra", component: CreatecompraComponent},
    {path: "menuUsuario", component: MenuususarioComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)