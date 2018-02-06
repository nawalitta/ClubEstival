import { Component, OnInit } from '@angular/core';
import { User } from 'models/model.user';
import { UserService } from 'services/user.service';
import { Router } from '@angular/router';
import { Client } from 'models/model.client';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

 


  constructor(public userservice: UserService , private router:Router) { }

  ngOnInit() {
  }



user:User = new User()  ;
//ficheclient:Client = new Client() ; ; 
	//mode:number=1;

//console.log(this.user.username);
  ajouterUser(){

   // user:User = new User(this.user.username,this.user.password,this.ficheclient);

    console.log("Voila 1 " + this.user) ;
  	this.userservice.saveUser(this.user)
  		.subscribe(data=>{
			console.log("voilaaa" + data);
      this.router.navigate(['connexion'] ) ; 

		},err=> {
		     console.log(err);
		});
  }

  login(){
this.router.navigate(['connexion'] ) ;    

  }




}
