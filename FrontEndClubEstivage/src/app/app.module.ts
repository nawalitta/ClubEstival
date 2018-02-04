import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';




import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService } from 'services/clients.service';
import { ProfilService } from 'services/profil.service';
import { UserService } from 'services/user.service';


import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionService } from 'services/connexion.service';
import {AuthService} from "services/auth.service";
import {UtilityService} from "services/utility.service";


import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewClientComponent } from './new-client/new-client.component';
import { ProfilComponent } from './profil/profil.component';
import { InscriptionComponent } from './inscription/inscription.component';

const appRoutes: Routes = [
	{ path: 'clients', component: ClientsComponent },
	{ path: 'new-client', component: NewClientComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'inscription', component: InscriptionComponent },

	{ path: '',
	  redirectTo: '/connexion',
	  pathMatch: 'full'
    }

]
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent,
    ConnexionComponent,
    ProfilComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule, 
    StorageServiceModule,
     RouterModule.forRoot(appRoutes),
      HttpModule,FormsModule
  ],
  providers: [ClientsService,ProfilService,ConnexionService,UserService,UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
