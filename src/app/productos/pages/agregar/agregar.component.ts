import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  mensaje: string = 'Andres Camilo';
  color: string = 'red';

  constructor(private form: FormBuilder) { }
  miFormulario: FormGroup = this.form.group({
    'nombre': ['', Validators.required]
  })


  ngOnInit(): void {
  }


  tieneError(campo: string): boolean{
    return this.miFormulario.get(campo)?.invalid ?? false;
  }
  changeName(){
    this.mensaje = 'Esto debe ser otro nombre';
  }
  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
