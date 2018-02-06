import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HebergementsService } from 'services/hebergements.service';
import { Hebergement } from 'models/model.hebergement';




@Component({
  selector: 'app-hebergements',
  templateUrl: './hebergements.component.html',
  styleUrls: ['./hebergements.component.css']
})
export class HebergementsComponent implements OnInit {


  pageClients:any;

  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  semaineDisponbilite:any;
  hebergementSelectionne:Hebergement;

  constructor(public http:Http, public hebergementsservice: HebergementsService, private router: Router ) { }

  ngOnInit() {
  	this.doSearch();
  	
  }
  

  doSearch(){

  	this.hebergementsservice.getHebergements(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
 
		},err=> {
		     console.log(err);
		});




  }

  gotoPageHbergement(idHebergement:number){

  	  this.router.navigate(['list-hebergement',idHebergement ]);

  }


  chercherHebergement(){

  	this.doSearch();

  }
  reserverHebergement(id:number){
  	

  }
  modifierHebergement(id:number){
  	this.router.navigate(['edit-hebergement',id]);
  }
  supprimerHebergement(hebergement:Hebergement){
  	let confirme=window.confirm('Est vous sure ?');
  	if(confirme==true){
  	this.hebergementsservice.deleteHebergement(hebergement.idHebergement)
  		.subscribe(data=>{
  			console.log("data");
  			this.pageClients.content.splice(
  					this.pageClients.content.indexOf(hebergement), 1
  				); 
			this.ngOnInit();
			this.router.navigate(['hebergements']);
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
