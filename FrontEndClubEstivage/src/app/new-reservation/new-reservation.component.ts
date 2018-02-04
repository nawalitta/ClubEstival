import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ReservationsService } from 'services/reservations.service';
import { HebergementsService } from 'services/hebergements.service';
import { Reservation } from 'models/model.reservation';
import { Hebergement } from 'models/model.hebergement';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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


  constructor(public reservationsservice: ReservationsService,
              public hebergementsservice: HebergementsService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
  	
  		 let id = this.route.snapshot.paramMap.get('id');

         this.hebergementsservice.getHebergementById(id)
		.subscribe(data=>{
			this.hebergement=data;
		},err=> {
		     console.log(err);
		});	

  }

  
 
  ajouterReservation(){
  	this.reservationsservice.saveReservation(this.reservation)
  		.subscribe(data=>{
			console.log(data);
		},err=> {
		     console.log(err);
		});
  }


}
