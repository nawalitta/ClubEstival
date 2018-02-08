import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'services/clients.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UtilityService} from "services/utility.service";

@Component({
  selector: 'app-activate-client',
  templateUrl: './activate-client.component.html',
  styleUrls: ['./activate-client.component.css']
})
export class ActivateClientComponent implements OnInit {

  constructor( public clientService : ClientsService ,private router: Router,private utility:UtilityService ,private route: ActivatedRoute,) { }
  clientInactif: any;
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  ngOnInit() {

 
    this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        });


    this.doSearch() ;


}



doSearch(){


    this.clientService.getClientsNonValide()
    .subscribe(data=>{
      this.clientInactif=data;
      this.pages=new Array(data.totalPages);

      console.log(this.clientInactif);

    },err=> {
         console.log(err);
    });
  
}



activer(c: any){

 		console.log(c.idUser);
    c.actived = true ;

        console.log(c.actived);

		this.clientService.activateClient(c)
    .subscribe(data=>{
          console.log(data);
        alert("Mise à jour effectuée");
        this.ngOnInit() ;
      },err=> {
        console.log(err);
           alert("Problème !! ");
      });
  
}



gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();

  }











}
