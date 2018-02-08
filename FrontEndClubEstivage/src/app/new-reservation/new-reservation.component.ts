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
import { MailService } from 'services/mail.service';

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
              private mailService : MailService,
              private route: ActivatedRoute,
              private  clientsservice:ClientsService,
              private router: Router
            
              ) { }

  ngOnInit() {
  	
  		 let id =sessionStorage.getItem('hebergement');
         let idSemaine = sessionStorage.getItem('semaine');
         let idRestauration = sessionStorage.getItem('restauration');
         this.hebergementsservice.getHebergementById(id)
		.subscribe(data=>{
			this.hebergement=data;
			console.log("mm");
			console.log(this.hebergement);
		},err=> {
		     console.log(err);
		});	

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

        
         


		 this.hebergementsservice.getSemaine(idSemaine)
		.subscribe(data=>{
			this.semaine=data;
			console.log("mmsemaines");
			console.log(this.semaine);
		},err=> {
		     console.log(err);
		});	
        


		this.clientsservice.getClient(sessionStorage.getItem('clientId'))
        .subscribe(data=>{
			this.client =data;
			console.log("mm");
			console.log(this.client);
		},err=> {
		     console.log(err);
		});	


  }


public sender() {

  this.mailService.sendMail(this.client.email).
  subscribe(data=>{
      //this.mail=data;
      console.log(data) ; 
    
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
			this.sender();
			 if(sessionStorage.getItem('isAdmin')=="1"){
          			this.router.navigate(['reservations']);
           }else{
            		this.router.navigate(['/list-reservation-client']);
           }
		

		},err=> {
		     console.log(err);
		});



  }




}
