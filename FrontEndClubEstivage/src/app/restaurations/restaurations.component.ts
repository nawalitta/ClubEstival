import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RestaurationService } from 'services/restauration.service';
import { Hebergement } from 'models/model.hebergement';

@Component({
  selector: 'app-restaurations',
  templateUrl: './restaurations.component.html',
  styleUrls: ['./restaurations.component.css']
})
export class RestaurationsComponent implements OnInit {

  pageClients:any;

  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  semaineDisponbilite:any;
  hebergementSelectionne:Hebergement;

  constructor(public http:Http, public restaurationsservice: RestaurationService, private router: Router ) { }
  ngOnInit() {
  	this.doSearch();
  	
  }
  

  doSearch(){

  	this.restaurationsservice.getRestaurations(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
 
		},err=> {
		     console.log(err);
		});




  }

  gotoPageRestauration(idRestauration:number){

  	  this.router.navigate(['list-restauration',idRestauration ]);

  }


  chercherRestauration(){

  	this.doSearch();

  }
  
 gotoNewReservation(){
 	 this.router.navigate(['new-reservation']);
 }

  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }

}
