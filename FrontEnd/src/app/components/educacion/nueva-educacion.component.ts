import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { EducacionComponent } from './educacion.component';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombreE: string= '';
  descripcionE: string= '';
  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(expe).subscribe(data=>{
      alert("Educacion añadida con éxito");
      this.router.navigate(['']);
    }, err=>{
      alert("Error al intentar añadir educacion");
      this.router.navigate(['']);
    })
  }


}
