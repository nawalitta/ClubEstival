import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'services/connexion.service';
import {UtilityService} from "services/utility.service";
import {AppComponent} from "app/app.component";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})




export class ConnexionComponent implements OnInit {
	   username:string ; 
     password:string ; 
     user:any ;

  constructor(private router:Router, private appComponent:AppComponent ,  private connexionService : ConnexionService , private utility:UtilityService) { }

  ngOnInit() {

   /*  this.utility.isLogged().then((result: boolean) => {
            if(result) {
              
                  if(sessionStorage.getItem("isAdmin")){

                     this.router.navigate(['profil_admin']);
                  }
                  else{
                  this.router.navigate(['profil']);
                }
            
        })*/
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

                    sessionStorage.setItem('isAdmin',this.user[i].role);


                    sessionStorage.setItem('currId',this.user[i].idUser);
}
          console.log("admin ??  " + sessionStorage.getItem("isAdmin"));

                              this.appComponent.ngOnInit();
                                if(sessionStorage.getItem("isAdmin")==0){
                  this.router.navigate(['profil']);
                }
              
              else if(sessionStorage.getItem("isAdmin")==1){

                     this.router.navigate(['profil_admin']);
                  }
                

                                   // this.router.navigate(['profil'] ) ; 

              


}

}

    },err=> {
         console.log(err);
    });



}  
register() {
this.router.navigate(['inscription'] ) ;    



}


    }







