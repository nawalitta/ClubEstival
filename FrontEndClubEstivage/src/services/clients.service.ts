import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { Client } from 'models/model.client';




@Injectable()
export class ClientsService{

 constructor(public http:Http) { }

 getClients(motCle:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherClients?mc="+motCle+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }

 saveClient(client:Client){
 	return this.http.post("http://localhost:1994/clients",client)
  	.map(resp=> resp.json());

 }

 getClientsByTypeHebergement(typeHebergement:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/clientsbyHebergement?typeHebergement="+typeHebergement+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }
}    
	
  







