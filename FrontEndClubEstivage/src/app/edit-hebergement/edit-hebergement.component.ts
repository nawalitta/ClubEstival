import { Component, OnInit } from '@angular/core';
import { HebergementsService } from 'services/hebergements.service';
import { Hebergement } from 'models/model.hebergement';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-hebergement',
  templateUrl: './edit-hebergement.component.html',
  styleUrls: ['./edit-hebergement.component.css']
})
export class EditHebergementComponent implements OnInit {


  mode:number=1;

  hebergement:Hebergement= new Hebergement();


  constructor(
              public hebergementsservice: HebergementsService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {

  	let id = this.route.snapshot.paramMap.get('id');

		this.hebergementsservice.getHebergementById(id)
		.subscribe(data=>{
			this.hebergement=data;
	        	
		},err=> {
		     console.log(err);
		});	

  }



  modifierHebergement(){
	  this.hebergementsservice.updateHebergement(this.hebergement)
	  		.subscribe(data=>{
	  			console.log(data);
				alert("Mise à jour effectuée");
				this.router.navigate(['hebergements']);
			},err=> {
				console.log(err);
			     alert("Problème !! ");
			});
  }

}
