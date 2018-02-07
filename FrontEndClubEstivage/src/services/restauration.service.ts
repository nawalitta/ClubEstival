import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { Restauration } from 'models/model.restauration';




@Injectable()
export class RestaurationService{

 constructor(public http:Http) { }

 getRestaurations(motCle:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherRestaurations?mc="+motCle+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }

 saveHebergement(restauration:Restauration){
 	return this.http.post("http://localhost:1994/restaurations",restauration)
  	.map(resp=> resp.json());

 }
 
  getRestaurationById(id:number){
 	return this.http.get("http://localhost:1994/restaurations/"+id+"")
  	.map(resp=> resp.json());

 }

  getDisponibiliteHebergementByIdRestauration(idRestauration:number){
 	return this.http.get("http://localhost:1994/DisponibiliteRestauration?idRestauration="+idRestauration)
  	.map(resp=> resp.json());

 }



 

}
	
  

