import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Reservation } from 'models/model.reservation';
import { ReservationsService } from 'services/reservations.service';

@Component({
  selector: 'app-list-reservation-client',
  templateUrl: './list-reservation-client.component.html',
  styleUrls: ['./list-reservation-client.component.css']
})
export class ListReservationClientComponent implements OnInit {


  pageClients:any;
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  reservationSelectionne:Reservation;
  mode:number=1;


  constructor(public http:Http, public reservationsservice: ReservationsService, private router: Router) { }

  ngOnInit() {
  		this.doSearch();
  }


doSearch(){


	this.mode=1;

	this.reservationsservice.consulterReservationByIdClient(sessionStorage.getItem('currId'), this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
			console.log(data);
			console.log(sessionStorage.getItem('currId'));
		},err=> {
		     console.log(err);
		});


}


gotoPageReservation(id:number){
	//this.router.navigate(['list-reservation-client-by-id',id]);

	this.mode=2;


	this.reservationsservice.consulterReservationById(id,sessionStorage.getItem('currId'), this.currentPage, this.size)
		.subscribe(data=>{
			this.reservationSelectionne=data;
		},err=> {
		     console.log(err);
		});


}

 modifierReservation(id:number){
  	this.router.navigate(['edit-reservation',id]);
  }
  supprimerReservation(res:Reservation){
  	let confirme=window.confirm('Est vous sure ?');
  	if(confirme==true){
  	this.reservationsservice.deleteReservation(res.idReservation)
  		.subscribe(data=>{
  			this.pageClients.content.splice(
  					this.pageClients.content.indexOf(res), 1
  				); 
			this.ngOnInit();
			 if(sessionStorage.getItem('isAdmin')=="1"){
					this.router.navigate(['reservations']);
			     }else{
			     	this.router.navigate(['list-reservation-client']);
			     }
		},err=> {
		     console.log(err);
		});
  	}
  }


  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }

}
