import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { User } from 'models/model.user';




@Injectable()
export class SemaineService{

 constructor(public http:Http) { }


getSemaines(id:number){
 	return this.http.get("http://localhost:1994/semaines"+id)
  	.map(resp=> resp.json());

 }



 
}
	