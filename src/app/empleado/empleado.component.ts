import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Juan';

  apellido = 'Díaz';

  edad = 28;

  empresa = 'Píldoras Informáticas';

  guardaEmpresa(nuevaEmpresa: string) {
    this.empresa = nuevaEmpresa;
  }
  // getEdad() {
  //   return this.edad;
  // }
  constructor() {}

  ngOnInit(): void {}
}
