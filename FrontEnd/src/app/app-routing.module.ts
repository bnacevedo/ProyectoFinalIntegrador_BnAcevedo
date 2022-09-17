import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaExpComponent } from './components/experiencia/nueva-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
