import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'services/reservations.service';
import { HebergementsService } from 'services/hebergements.service';
import { Reservation } from 'models/model.reservation';
import { Hebergement } from 'models/model.hebergement';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {

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

		this.reservationsservice.getReservationById(id)
		.subscribe(data=>{
			this.reservation=data;
	        	
		},err=> {
		     console.log(err);
		});	

  }

  
 
  modifierReservation(){
  	
	  this.reservationsservice.updateReservation(this.reservation)
	  		.subscribe(data=>{
	  			console.log(data);
				alert("Mise à jour effectuée");
				 if(sessionStorage.getItem('isAdmin')==1){
					this.router.navigate(['reservations']);
			     }else{
			     	this.router.navigate(['list-reservation-client']);
			     }
			},err=> {
				console.log(err);
			     alert("Problème !! ");
			});

	  
  }


}
