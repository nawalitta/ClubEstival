import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { Reservation } from 'models/model.reservation';




@Injectable()
export class ReservationsService{

 constructor(public http:Http) { }

 getReservations(motCle:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherReservations?mc="+motCle+"&size="+size+"&page="+page+"")
  	.map(resp=> resp.json());

 }

 saveReservation(reservation:Reservation){
 	return this.http.post("http://localhost:1994/reservations",reservation)
  	.map(resp=> resp.json());

 }

 updateReservation(reservation: Reservation){
 	return this.http.put("http://localhost:1994/reservation/"+reservation.idReservation,reservation)
  	.map(resp=> resp.json());
 }


 getReservationById(id:number){
 	return this.http.get("http://localhost:1994/reservation/"+id+"")
  	.map(resp=> resp.json());
 }

deleteReservation(id:number){
 	return this.http.delete("http://localhost:1994/reservation/"+id+"")
  	.map(resp=> resp.json());
 }

getAllReservation(){
		return this.http.get("http://localhost:1994/reservations")
  	.map(resp=> resp.json());
}

}
	
  







