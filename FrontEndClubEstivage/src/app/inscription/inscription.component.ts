import { Component, OnInit } from '@angular/core';
import { User } from 'models/model.user';
import { UserService } from 'services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

 


  constructor(public userservice: UserService , private router:Router) { }

  ngOnInit() {
  }



user:User= new User();
	//mode:number=1;


//console.log(this.user.username);
  ajouterUser(){
  	this.userservice.saveUser(this.user)
  		.subscribe(data=>{
			console.log(data);
      this.router.navigate(['connexion'] ) ; 

		},err=> {
		     console.log(err);
		});
  }





}
