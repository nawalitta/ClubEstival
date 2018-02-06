import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { User } from 'models/model.user';





@Injectable()
export class MailService{

 constructor(public http:Http) { }


   sendMail(){
 
 

 return this.http.get("http://localhost:1994/mail").map(resp=> resp.json()) ;
    


}

}
	
  



