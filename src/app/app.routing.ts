import { HomeComponent } from "./components/home/home.component";

import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core'

const appRoutes: Routes= [
    {path: "", component: HomeComponent},
    // {path: "personajes/:idserie", component: PersonajesComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)