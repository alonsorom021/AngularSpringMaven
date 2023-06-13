import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
  modelPersona:Persona = new Persona;
  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPersonaById(+id)
    .subscribe(data=>{
      this.modelPersona = data;
    })
  }

  Actualizar(persona : Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      alert("SE ACTUALIZO EL REGISTRO!!");
      this.router.navigate(["listar"]);
    })
  }
}
