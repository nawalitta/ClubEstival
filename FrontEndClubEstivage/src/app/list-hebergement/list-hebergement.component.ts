import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import "rxjs/add/operator/map";
import { HebergementsService } from 'services/hebergements.service';
import { Hebergement } from 'models/model.hebergement';



@Component({
  selector: 'app-list-hebergement',
  templateUrl: './list-hebergement.component.html',
  styleUrls: ['./list-hebergement.component.css']
})
export class ListHebergementComponent implements OnInit {



  hebergementSelectionne:Hebergement;
  semaineDisponbilite:any;
  mode:boolean=false;


  constructor(public http:Http,
  			 public hebergementsservice: HebergementsService,
  			 private router: Router,
  			 private route: ActivatedRoute ) { }

  ngOnInit() {

       	let idHebergement = this.route.snapshot.paramMap.get('id');

        
        this.hebergementsservice.getSemaines()
		.subscribe(data=>{
            console.log("disp")
			this.semaineDisponbilite=data;
            this.mode=false;
		 console.log(this.semaineDisponbilite);
            
		},err=> {

		     console.log(err);

		});
         

  		this.hebergementsservice.getDisponibiliteHebergementByIdHebergement(idHebergement)
		.subscribe(data=>{

			if(data != null){
                  this.semaineDisponbilite=data;
                  this.mode=true;
			
			}
			console.log("disp--")
            console.log(this.semaineDisponbilite);
		},err=> {
		     console.log(err);
		});


		this.hebergementsservice.getHebergementById(idHebergement)
		.subscribe(data=>{
			this.hebergementSelectionne=data;
			console.log("cc2");
            console.log(this.hebergementSelectionne);
 
		},err=> {
		     console.log(err);
		});


  
  }

  dirigeVersNewReservation(id:number,semaine:number){
  	  sessionStorage.setItem('semaine',semaine);
  	   sessionStorage.setItem('hebergement',id);

  	  this.router.navigate(['restaurations']);
  	  //this.router.navigate(['new-reservation',id,semaine]);

  }

}
