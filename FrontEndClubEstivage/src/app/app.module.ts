import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService } from '/Users/mac/Documents/ClubEstival/FrontEndClubEstivage/src/services/clients.service';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewClientComponent } from './new-client/new-client.component';


const appRoutes: Routes = [
	{ path: 'clients', component: ClientsComponent },
	{ path: 'new-client', component: NewClientComponent },
	{ path: '',
	  redirectTo: '/clients',
	  pathMatch: 'full'
    }

]
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes), HttpModule,FormsModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
