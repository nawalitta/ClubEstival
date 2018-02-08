import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { User } from 'models/model.user';





@Injectable()
export class MailService{

 constructor(public http:Http) { }


   sendMail(mail:string){
 
 

 return this.http.get("http://localhost:1994/mail/"+mail).map(resp=> resp.json()) ;
    


}

}
	
  



