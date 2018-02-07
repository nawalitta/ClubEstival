import { Hebergement } from 'models/model.hebergement';
import { Semaine } from 'models/model.semaine';
import { Client } from 'models/model.client';
import { Restauration } from 'models/model.restauration';


export class Reservation{
	
	idReservation:number;
	nbrPersonne:number;
	nbrSemaine:number;
	nomReservation:string="";
	total:number;
	typePaiement:string="";
	client:Client;
    restauration:Restauration;
    semaine:Semaine;
    hebergement:Hebergement;
	

	constructor() { 
		this.hebergement = new Hebergement();
        this.semaine = new Semaine();
        this.client= new Client();
        this.restauration=new Restauration();

				}


}