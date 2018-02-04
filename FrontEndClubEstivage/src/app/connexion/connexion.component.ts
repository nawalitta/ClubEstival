import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'services/connexion.service';
import {UtilityService} from "services/utility.service";
import {AppComponent} from "app/app.component";

import {Message} from 'primeng/primeng';
//import { User } from 'models/model.user';

//import {AuthService} from "services/auth.service";
//import {UtilityService} from "services/utility.service";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})




export class ConnexionComponent implements OnInit {
	    private msgs: Message[] = [];
	   username:string ; 
     password:string ; 
     user:any ;

  constructor(private router:Router, private appComponent:AppComponent ,  private connexionService : ConnexionService , private utility:UtilityService) { }

  ngOnInit() {

     this.utility.isLogged().then((result: boolean) => {
            if(result) {
                this.router.navigate(['profil']);
            }
        })
  }




loginUser() {


 this.connexionService.GetUser()
    .subscribe(data=>{
      this.user=data;
      console.log("coucou") ;
     

for (var i = 0; i < this.user.length; i++) {
  console.log("boucle") ;

    if (this.user[i].username === this.username && this.user[i].password === this.password ) {
  
  if(typeof (Storage) !== 'undefined') {
                    sessionStorage.setItem('currName',this.user[i].username);

                    sessionStorage.setItem('currId',this.user[i].idUser);

                }
                              this.appComponent.ngOnInit();
                                    this.router.navigate(['profil'] ) ; 


}}

    },err=> {
         console.log(err);
    });



}  
register() {
this.router.navigate(['inscription'] ) ;    



}


    }







