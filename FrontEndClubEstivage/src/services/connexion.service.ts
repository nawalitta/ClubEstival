import {Injectable} from "@angular/core" ; 
import { Http } from '@angular/http';
import { User } from 'models/model.user';





@Injectable()
export class ConnexionService{

 constructor(public http:Http) { }
	// users: any;
	 //user:User= new User();


 /*connexion(username: string , password : string){
//var users ;
var a = false ;  

//this.users= this.GetUser() ; 
this.GetUser().subscribe(data=>{
			this.users=data;
			console.log(data);
		},err=> {
		     console.log(err);
		}); 

console.log("user:" +  this.users.username );
//for (var i = 0; i < this.users.length; i++) {
	if(this.users.username == username &&  this.users.password == password){
		a=true ; 

//	}
}
return a ; 
}*/




   GetUser(){
 
 

 return this.http.get("http://localhost:1994/users").map(resp=> resp.json()) ;
    
console.log("Ok") ;


}

}
	
  



