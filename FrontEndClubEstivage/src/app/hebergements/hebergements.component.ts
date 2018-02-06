import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { HebergementsService } from 'services/hebergements.service';
import {UtilityService} from "services/utility.service";
import { Router } from '@angular/router';



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

  constructor(public http:Http, public hebergementsservice: HebergementsService ,private router: Router,  private utility:UtilityService) { }

  ngOnInit() {


this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        })


  	
  }
  

  doSearch(){

  	this.hebergementsservice.getHebergements(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
 
		},err=> {
		     console.log(err);
		});


  }

  chercherHebergement(){

  	this.doSearch();

  }

  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }
}
