import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HebergementsService } from 'services/hebergements.service';
import {UtilityService} from "services/utility.service";
import { Router } from '@angular/router';

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
  mode:string=1;

  constructor(public http:Http, public hebergementsservice: HebergementsService ,private router: Router,  private utility:UtilityService) { }

  ngOnInit() {


this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        });
       if(sessionStorage.getItem('isAdmin')=="1"){
          this.mode=1;
           }else{
            this.mode=2;
           }

    this.doSearch();
}


 
  

  doSearch(){

  	this.hebergementsservice.getHebergements(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
      this.pages=new Array(data.totalPages);
 
		},err=> {
		     console.log(err);
		});




  }

  gotoPageHbergement(idHebergement:number){

  	  this.router.navigate(['list-hebergement',idHebergement ]);

  }


  chercherHebergement(){
    
    console.log(this.motCle);


  	this.doSearch();

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
