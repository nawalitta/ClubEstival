import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { Client } from 'models/model.client';
import { User } from 'models/model.user';




@Injectable()
export class ClientsService{

 constructor(public http:Http) { }

 getClients(motCle:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherClients?mc="+motCle+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }


 getClientsNonValide(){
 	return this.http.get("http://localhost:1994/usersNonActive")
  	.map(resp=> resp.json());

 }


 saveClient(client:Client){
 	return this.http.post("http://localhost:1994/clients",client)
  	.map(resp=> resp.json());

 }
 deleteClient(client:Client){
 	return this.http.delete("http://localhost:1994/clients",client.idClient)
  	.map(resp=> resp.json());

 }


 activateClient(client: any){
 	console.log(client.username) ;
 	return this.http.put("http://localhost:1994/users/"+client.idUser,client)
  	.map(resp=> resp.json());
 }

 getClientsByTypeHebergement(typeHebergement:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/clientsbyHebergement?typeHebergement="+typeHebergement+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }
  getClientsByTypeRestauration(typeRestauration:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/clientsbyRestauration?typeRestauration="+typeRestauration+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }

 getClient(id:number){
 	return this.http.get("http://localhost:1994/clients/"+id)
  	.map(resp=> resp.json());

 }

}    
	
  







