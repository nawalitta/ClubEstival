import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { User } from 'models/model.user';





@Injectable()
export class ConnexionService{

 constructor(public http:Http) { }


   GetUser(){
 
 

 return this.http.get("http://localhost:1994/users").map(resp=> resp.json()) ;
    
//console.log("Ok") ;


}

}
	
  



