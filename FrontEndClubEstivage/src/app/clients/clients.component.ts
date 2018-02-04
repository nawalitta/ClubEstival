import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ClientsService } from 'services/clients.service';




@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  pageClients:any;

  motCle:string="";
  typeHebergement:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public http:Http, public clientsservice: ClientsService ) { }

  ngOnInit() {

  	
  }
  

  doSearch(){

  	this.clientsservice.getClients(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;

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

  

  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }
}
