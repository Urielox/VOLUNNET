//import { HttpModule, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {environment} from "../environments/environment";
//import {AngularFireModule} from "@angular/fire";
//import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {InitComponent} from "./init.component";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AgmCoreModule } from '@agm/core';

//import { CommentComponent } from './comment/comment.component';
//import { CommentContainerComponent } from './comment-container/comment-container.component';
import {LoginComponent} from "./Login/login.component";
import {RegistroComponent} from "./Registro/registro.component";
import {MapaComponent} from "./Mapa/mapa.component";
/*import {InicioComponent} from "./Inicio/inicio.component";
import {SoporteComponent} from "./soporte/soporte.component";
import {BibliotecaComponent} from "./Biblioteca/biblioteca.component";
import {ConsejosComponent} from "./Consejos/consejos.component";
import {CulturaComponent} from "./Cultura/cultura.component";*/

const appRoutes: Routes = [
  {path: '', component: AppComponent },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'mapa', component: MapaComponent}
  /*{path: 'inicio', component: InicioComponent},
  {path: 'soporte', component: SoporteComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'consejos', component: ConsejosComponent},
  {path: 'cultura', component: CulturaComponent}*/
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InitComponent,
    RegistroComponent,
    MapaComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      //HttpModule,
      ReactiveFormsModule,
      HttpClientModule,
      //Angular Material
      RouterModule.forRoot(appRoutes),
      //AngularFireModule.initializeApp(environment.firebase),
      //AngularFireStorageModule,
      
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAGdKVBuL6FMyz7sW82A5neV8fkCKbD8hU'
      }),

      //Angular Material
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSnackBarModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
