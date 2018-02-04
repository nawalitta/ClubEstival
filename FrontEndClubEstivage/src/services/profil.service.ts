import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';





@Injectable()
export class ProfilService{



 constructor(public http:Http) { }

 GetInfoUser(){

  var id ;
  			if(typeof (Storage) !== 'undefined') {

           id=sessionStorage.getItem('currId') ; 
           console.log(id);

            }

 return this.http.get("http://localhost:1994/clients/"+id).map(resp=> resp.json()) ;
    



}
	
  }