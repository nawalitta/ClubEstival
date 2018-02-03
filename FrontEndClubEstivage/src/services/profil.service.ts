import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';





@Injectable()
export class ProfilService{



 constructor(public http:Http) { }

 GetInfoUser(){
 
 

 return this.http.get("http://localhost:1994/clients/1").map(resp=> resp.json()) ;
    



}
	
  }