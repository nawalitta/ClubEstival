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
			this.pages=new Array(data.totalPages);
		},err=> {
		     console.log(err);
		});


  }

  chercherClient(){

  	this.doSearch();

  }

  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }
}
