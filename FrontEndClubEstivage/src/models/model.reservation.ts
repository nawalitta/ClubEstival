import { Hebergement } from 'models/model.hebergement';

export class Reservation{
	
	idReservation:number;
	nbrPersonne:number;
	nbrSemaine:number;
	nomReservation:string="";
	total:number;
	typePaiement:string="";
	idClient:number;
    idHebergement:number;
    idRestauration:number;
    idSemaine:number;
    hebergement:Hebergement;
	

	constructor() { 
		this.hebergement = new Hebergement();

				}


}