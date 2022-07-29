import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  
  constructor(private form: FormBuilder) { }
  miFormulario: FormGroup = this.form.group({
    'nombre': ['', Validators.required]
  })


  ngOnInit(): void {
  }


  tieneError(campo: string): boolean{
    return this.miFormulario.get(campo)?.invalid ?? false;
  }

}
