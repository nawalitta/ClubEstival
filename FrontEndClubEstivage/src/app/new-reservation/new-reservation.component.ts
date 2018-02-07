import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ReservationsService } from 'services/reservations.service';
import { HebergementsService } from 'services/hebergements.service';
import {  RestaurationService } from 'services/restauration.service';
import { Reservation } from 'models/model.reservation';
import { Hebergement } from 'models/model.hebergement';
import { Restauration } from 'models/model.restauration';
import {Semaine} from 'models/model.semaine';
import {Client} from 'models/model.client';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClientsService } from 'services/clients.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {
  
  reservation:Reservation= new Reservation();

  mode:number=1;

  hebergement:Hebergement= new Hebergement();
  restauration:Restauration= new Restauration();
  semaine:Semaine= new Semaine();
  client:Client= new Client();
  resOrNo:boolean = false;


  constructor(public reservationsservice: ReservationsService,
              public hebergementsservice: HebergementsService,
              public restaurationservice: RestaurationService,
              private route: ActivatedRoute,
              private  clientsservice:ClientsService,
              private router: Router
            
              ) { }

  ngOnInit() {
  	
  		 let id =sessionStorage.getItem('hebergement');
         let idSemaine = sessionStorage.getItem('semaine');
         let idRestauration = sessionStorage.getItem('restauration');

         if(idRestauration != null){
         this.resOrNo = true;
          this.restaurationservice.getRestaurationById(idRestauration)
		.subscribe(data=>{
			this.restauration=data;
			console.log("mm");
			console.log(this.restauration);
		},err=> {
		     console.log(err);
		});	
	}

        
         this.hebergementsservice.getHebergementById(id)
		.subscribe(data=>{
			this.hebergement=data;
			console.log("mm");
			console.log(this.hebergement);
		},err=> {
		     console.log(err);
		});	


		 this.hebergementsservice.getSemaine(idSemaine)
		.subscribe(data=>{
			this.semaine=data;
			console.log("mmsemaines");
			console.log(this.semaine);
		},err=> {
		     console.log(err);
		});	
        


		this.clientsservice.getClient(sessionStorage.getItem('currId'))
        .subscribe(data=>{
			this.client =data;
			console.log("mm");
			console.log(this.client);
		},err=> {
		     console.log(err);
		});	


  }

 
  ajouterReservation(){
  	
    
    if(this.resOrNo){

   		 this.reservation.restauration = this.restauration;

	}else{

		this.reservation.restauration =null;

	}
	this.reservation.semaine=this.semaine; 

    
    this.reservation.client = this.client;

    this.reservation.hebergement=this.hebergement;
  	this.reservationsservice.saveReservation(this.reservation)
  		.subscribe(data=>{
			console.log(data);
			console.log(data.idReservation);
			sessionStorage.removeItem('hebergement');
			sessionStorage.removeItem('semaine');
			sessionStorage.removeItem('restauration');
			this.router.navigate(['reservations']);

		},err=> {
		     console.log(err);
		});
  }


}
