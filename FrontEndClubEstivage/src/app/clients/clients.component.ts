import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import {UtilityService} from "services/utility.service";
import { ClientsService } from "services/clients.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  pageClients:any;

  motCle:string="";
  typeHebergement:string="";
  typeRestauration:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public http:Http, public clientsservice: ClientsService ,private router: Router,  private utility:UtilityService) { }

  ngOnInit() {

    this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        })

      this.clientsservice.getClients(this.motCle, this.currentPage, this.size)
		     .subscribe(data=>{
			      this.pageClients=data;
               this.pages=new Array(data.totalPages);

		},err=> {
		     console.log(err);
		});
  	
  }
  

  doSearch(){

  	this.clientsservice.getClients(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
      this.pages=new Array(data.totalPages);

		},err=> {
		     console.log(err);
		});


  }

  chercherClient(){

  	this.doSearch();

  }

  chercherClientByTypeHebergement(){
  	this.clientsservice.getClientsByTypeHebergement(this.typeHebergement, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;

		},err=> {
		     console.log(err);
		});


  }
  chercherClientByTypeRestauration(){
  	this.clientsservice.getClientsByTypeRestauration(this.typeRestauration, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;

		},err=> {
		     console.log(err);
		});


  }

  

  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }
}
