import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { HebergementsService } from 'services/hebergements.service';
import { Hebergement } from 'models/model.hebergement';

@Component({
  selector: 'app-new-hebergements',
  templateUrl: './new-hebergements.component.html',
  styleUrls: ['./new-hebergements.component.css']
})
export class NewHebergementsComponent implements OnInit {

  hebergement:Hebergement= new Hebergement();
  mode:number=1; 


  constructor(public hebergementsservice: HebergementsService) { }

  ngOnInit() {
  }


  ajouterHebergement(){
  	this.hebergementsservice.saveHebergement(this.hebergement)
  		.subscribe(data=>{
			console.log(data);
		},err=> {
		     console.log(err);
		});
  }



}
