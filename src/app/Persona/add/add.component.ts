import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  persona:Persona = new Persona();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  modelPersona = new Persona();

  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("SE AGREGO EL REGISTRO CORRECTAMENTE !!");
      this.router.navigate(["listar"]);
    })
  }
}
