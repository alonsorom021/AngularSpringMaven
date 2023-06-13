import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl:'./listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas:Persona[];

  constructor (private service:ServiceService, private router:Router){}

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{this.personas = data;
    })
  }

  Editar (persona:Persona):void{
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      alert("SE ELIMINO EL REGISTRO CORRECTAMENTE !!!");
      this.personas = this.personas.filter(p=>p !== persona);
    })
  }
}
