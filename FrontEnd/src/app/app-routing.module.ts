import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditExpComponent } from './components/experiencia/edit-exp.component';
import { NuevaExpComponent } from './components/experiencia/nueva-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExpComponent},
  {path: 'editexp/:id', component: EditExpComponent},
  {path: 'nuevaedu', component: NuevaEducacionComponent},
  {path : 'editedu/:id', component: EditeducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
