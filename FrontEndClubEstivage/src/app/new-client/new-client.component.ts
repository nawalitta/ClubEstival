import { Component, OnInit } from '@angular/core';
import { Client } from 'models/model.client';
import { ClientsService } from 'services/clients.service';
import { Router } from '@angular/router';
import {UtilityService} from "services/utility.service";


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

	client:Client= new Client();
	mode:number=1; 


  constructor(public clientsservice: ClientsService , private router: Router,private utility:UtilityService) { }

  ngOnInit() {



this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        })



  }


  ajouterClient(){
  	this.clientsservice.saveClient(this.client)
  		.subscribe(data=>{
			console.log(data);
		},err=> {
		     console.log(err);
		});
  }

}
