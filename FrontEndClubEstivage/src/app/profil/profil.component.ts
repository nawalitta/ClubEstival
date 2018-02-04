import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilService } from 'services/profil.service';
import {UtilityService} from "services/utility.service";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user:any ;
  currentUser:any;


  constructor (  private router:Router, public profilservice : ProfilService , private utility:UtilityService)   { }


  ngOnInit() {


 this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            else{
                this.profile();

            }
        })


  }


profile() {

this.profilservice.GetInfoUser()
    .subscribe(data=>{
      this.user=data;
      console.log(this.user) ; 
    
    },err=> {
         console.log(err);
    });



}










}
