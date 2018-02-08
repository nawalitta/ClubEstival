import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { PdfmakeModule } from 'ng-pdf-make';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
import { MailService } from 'services/mail.service';
import { HttpModule} from '@angular/http';


import { ClientsService } from 'services/clients.service';
import { ProfilService } from 'services/profil.service';
import { UserService } from 'services/user.service';


import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionService } from 'services/connexion.service';

import { RestaurationService } from 'services/restauration.service';
import {UtilityService} from "services/utility.service";




import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ReservationsService } from 'services/reservations.service';
import { HebergementsService } from 'services/hebergements.service';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewClientComponent } from './new-client/new-client.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { HebergementsComponent } from './hebergements/hebergements.component';
import { RestaurationsComponent } from './restaurations/restaurations.component';
import { NewHebergementsComponent } from './new-hebergements/new-hebergements.component';
import { NewRestaurationsComponent } from './new-restaurations/new-restaurations.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { ProfilComponent } from './profil/profil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ActivateClientComponent } from './activate-client/activate-client.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ListHebergementComponent } from './list-hebergement/list-hebergement.component';
import { ListRestaurationComponent } from './list-restauration/list-restauration.component';
import { EditHebergementComponent } from './edit-hebergement/edit-hebergement.component';
import { EditRestaurationComponent } from './edit-restauration/edit-restauration.component';
import { ListRestaurationClientComponent } from './list-restauration-client/list-restauration-client.component';
import { ListReservationClientComponent } from './list-reservation-client/list-reservation-client.component';


const appRoutes: Routes = [
	{ path: 'clients', component: ClientsComponent },
	{ path: 'new-client', component: NewClientComponent },
	{ path: 'reservations', component: ReservationsComponent },
	{ path: 'new-reservation', component: NewReservationComponent },
	{ path: 'hebergements', component: HebergementsComponent },
	{ path: 'new-hebergement', component: NewHebergementsComponent },
	{ path: 'new-restauration', component: NewRestaurationsComponent },
	{ path: 'edit-reservation/:id', component: EditReservationComponent},
	{ path: 'edit-hebergement/:id', component: EditHebergementComponent},
	{ path: 'delete-reservation/:id', component: DeleteReservationComponent },
	{ path: 'edit-restauration/:id', component: EditRestaurationComponent},
	{ path: 'connexion', component: ConnexionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'restaurations', component: RestaurationsComponent },
  { path: 'list-hebergement/:id', component: ListHebergementComponent },
  { path: 'profil_admin', component: ProfilAdminComponent },
  { path: 'clients_inactif', component: ActivateClientComponent },
  { path: 'list-restauration/:id', component: ListRestaurationComponent},
  { path: 'list-reservation-client', component: ListReservationClientComponent},
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
    ReservationsComponent,
    NewReservationComponent,
    HebergementsComponent,
    RestaurationsComponent,
    NewHebergementsComponent,
    NewRestaurationsComponent,
    EditReservationComponent,
    DeleteReservationComponent,
    ConnexionComponent,
    ProfilComponent,
    InscriptionComponent,

    ActivateClientComponent,
    ProfilAdminComponent,

    ListHebergementComponent,
    ListRestaurationComponent,
    EditHebergementComponent,
    EditRestaurationComponent,
    ListReservationClientComponent
    
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes), HttpModule,FormsModule 
  ],
  providers: [ClientsService,MailService, ReservationsService, PdfmakeService ,RestaurationService, HebergementsService,ProfilService,ConnexionService,UserService,UtilityService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }