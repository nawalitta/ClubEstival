import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Reservation } from 'models/model.reservation';
import {UtilityService} from "services/utility.service";

import "rxjs/add/operator/map";
import { ReservationsService } from 'services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  pageClients:any;

  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public http:Http, public reservationsservice: ReservationsService, private router: Router,private utility:UtilityService ) { }

  ngOnInit() {

this.utility.isLogged().then((result: boolean) => {
          if(!result) {
                           this.router.navigate(['connexion']);

            }

           // else{
             //  this.profile();

            //}
        })


  	this.reservationsservice.getAllReservation()
  		.subscribe(data=>{
			this.pageClients=data; 
		},err=> {
		     console.log(err);
		});

  }

  doSearch(){

  	this.reservationsservice.getReservations(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
			this.pages=new Array(data.totalPages);
		},err=> {
		     console.log(err);
		});


  }

  chercherReservation(){

  	this.doSearch();

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
			this.router.navigate(['reservations']);
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
