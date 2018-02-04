import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService } from '/Users/mac/Documents/ClubEstival/FrontEndClubEstivage/src/services/clients.service';
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


const appRoutes: Routes = [
	{ path: 'clients', component: ClientsComponent },
	{ path: 'new-client', component: NewClientComponent },
	{ path: 'reservations', component: ReservationsComponent },
	{ path: 'new-reservation/:id', component: NewReservationComponent },
	{ path: 'hebergements', component: HebergementsComponent },
	{ path: 'new-hebergement', component: NewHebergementsComponent },
	{ path: 'edit-reservation/:id', component: EditReservationComponent},
	{ path: 'delete-reservation/:id', component: DeleteReservationComponent },
	{ path: '',
	  redirectTo: '/clients',
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
    DeleteReservationComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes), HttpModule,FormsModule
  ],
  providers: [ClientsService, ReservationsService, HebergementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
