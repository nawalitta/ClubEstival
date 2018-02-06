import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { Hebergement } from 'models/model.hebergement';




@Injectable()
export class HebergementsService{

 constructor(public http:Http) { }

 getHebergements(motCle:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherHebergements?mc="+motCle+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }

 saveHebergement(hebergement:Hebergement){
 	return this.http.post("http://localhost:1994/hebergements",hebergement)
  	.map(resp=> resp.json());

 }
 
  getHebergementById(id:number){
 	return this.http.get("http://localhost:1994/hebergement/"+id+"")
  	.map(resp=> resp.json());

 }

 

}
	
  

