import { HomeComponent } from "./components/home/home.component";
import { CubomarcaComponent } from "./components/cubomarca/cubomarca.component";
import { DetallescuboComponent } from "./components/detallescubo/detallescubo.component";
import { LoginComponent } from "./components/login/login.component";

import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core'

const appRoutes: Routes= [
    {path: "", component: HomeComponent},
    {path: "cuboMarca/:marca", component: CubomarcaComponent},
    {path: "detallescubo/:idcubo", component: DetallescuboComponent},
    {path: "login", component: LoginComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)