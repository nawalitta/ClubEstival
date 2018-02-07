import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import "rxjs/add/operator/map";
import { RestaurationService } from 'services/restauration.service';
import { Restauration } from 'models/model.restauration';



@Component({
  selector: 'app-list-restauration',
  templateUrl: './list-restauration.component.html',
  styleUrls: ['./list-restauration.component.css']
})
export class ListRestaurationComponent implements OnInit {

 
  restaurationSelectionne:Restauration= new Restauration();
 


  constructor(public http:Http,
  			 public restaurationservice: RestaurationService,
  			 private router: Router,
  			 private route: ActivatedRoute ) { }

  ngOnInit() {
  

       	let idRestauration = this.route.snapshot.paramMap.get('id');

    

		this.restaurationservice.getRestaurationById(idRestauration)
		.subscribe(data=>{
			this.restaurationSelectionne=data;
		
 
		},err=> {
		     
		     console.log(err);

		});


  
  }

  dirigeVersNewReservation(id:number){
  	   sessionStorage.setItem('restauration',id);
  	  this.router.navigate(['new-reservation']);

  }
}
