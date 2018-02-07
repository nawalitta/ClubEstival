import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  constructor(private router:Router) { }

  logged:boolean = false;
  isAdmin:boolean ;


   ngOnInit() {

if(sessionStorage.getItem("isAdmin") != null) {


console.log("HELLOOOWWW") ;
	this.logged = true ;
  this.isAdmin= sessionStorage.getItem("isAdmin");

  console.log("hellow" + this.isAdmin) ;
}



 
console.log("coucou" + this.logged) ;


    
  }



logout(){


	sessionStorage.clear();
	this.logged = false ; 
  this.isAdmin = false ; 

	this.router.navigate(['connexion'] ) ;    

}









}
