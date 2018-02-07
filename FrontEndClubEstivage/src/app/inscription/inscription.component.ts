import { Component, OnInit } from '@angular/core';
import { User } from 'models/model.user';

import { UserService } from 'services/user.service';
import { Router } from '@angular/router';
import { Client } from 'models/model.client';
import { ClientsService } from 'services/clients.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


    private username: string;
    private password: string;
    private nomClient: string;
    private adresse : string;
    private email : string ; 
    private tel :string ;

  constructor(public userservice: UserService , private router:Router, private clientsService:ClientsService) { }

  ngOnInit() {

  }


  //mode:number=1;

//console.log(this.user.username);
  ajouterUser(){

 
let ficheclient: Client = {
            nomClinet: this.username,
            adresse: this.password , 
            email: this.email , 
            tel: this.tel 

          }

           


    //console.log("Voila 1 " + user.username) ;
    console.log("Voila  " + ficheclient) ;


this.clientsService.saveClient(ficheclient)
      .subscribe(data=>{
      console.log("voilaaa" + data.nomClient);


let user: User = {
            username: this.username,
            password: this.password
            ficheClient: data;
        }

     this.userservice.saveUser(user)
      .subscribe(data=>{
      console.log("voilaaa" + data);
      this.router.navigate(['connexion'] ) ; 

    },err=> {
         console.log(err);
    });
  }
    ,err=> {
         console.log(err);
    });

}

   

  



  login(){
this.router.navigate(['connexion'] ) ;    

  }




}
