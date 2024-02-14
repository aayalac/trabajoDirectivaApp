import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Entrada {
  titulo: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, FormsModule, NgStyle,NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: Entrada[];

  constructor() {
    this.entradas = [
      {titulo: "Python cada dia mas presente"},
      {titulo: "Java presente hace mas de 20 años"},
      {titulo: "Javascript cada vez mas funcional"},
      {titulo: "Kotlin potencia tus apps"},
      {titulo: "¿Donde quedó pascal?"}
    ];
  }

  registrarUsuario() {
    this.registrado = true
    this.mensaje = "Usuario registrado con éxito!"
  }
}