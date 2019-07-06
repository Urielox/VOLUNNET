import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'voluNet';
  constructor(private router: Router){

  }
  ngOnInit() {
    //this.router.navigate(['/Login']);
    /*this.usuarioService.getUsuarios().subscribe(usuarios => {
     //console.log(usuarios);
      this.usuarios = usuarios;
    }, err => {
      console.error(err);
    });
    this.publicacionService.getPublicaciones().subscribe(publicaciones => {
      console.log(publicaciones);
      this.usuarios = publicaciones;
    }, err => {
      console.error(err);
    });*/
  }
}



