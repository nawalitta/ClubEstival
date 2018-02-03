import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { User } from 'models/model.user';




@Injectable()
export class UserService{

 constructor(public http:Http) { }



 saveUser(user:User){
 	return this.http.post("http://localhost:1994/users",user)
  	.map(resp=> resp.json());

 }


 
}
	
  



