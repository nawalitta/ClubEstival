import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { RestaurationService } from 'services/restauration.service';
import { Restauration } from 'models/model.restauration';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-new-restaurations',
  templateUrl: './new-restaurations.component.html',
  styleUrls: ['./new-restaurations.component.css']
})

export class NewRestaurationsComponent implements OnInit {

  
  restauration:Restauration= new Restauration();



  constructor(public restaurationservice: RestaurationService,  private router: Router) { }

  ngOnInit() {

  }


  ajouterRestauration(){

  	this.restaurationservice.saveRestauration(this.restauration)
  		.subscribe(data=>{
			console.log(data);
			this.router.navigate(['restaurations']);

		},err=> {
		     console.log(err);
		});
  }



}
