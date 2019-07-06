import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'registro-component',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  //usuario: Usuario;
    //Por si lo uso: private usuarioService: UsuarioService,
  constructor(private router: Router) {
    //this.usuario = new Usuario();
  }
/*
  login() {
    console.log(this.usuario)
    this.usuarioService.login(this.usuario)
      .subscribe(res => {
        console.log(res);
        let token = res;
        // @ts-ignore
        sessionStorage.setItem('token', token.token);
        // @ts-ignore
        sessionStorage.setItem('id', token.id);
        this.router.navigate(['/inicio']);
      }, err => {
        console.error(err);
        alert("El usuario o la contraseña son incorrectas");
      });
  } */

  ngOnInit() {
  }
}
