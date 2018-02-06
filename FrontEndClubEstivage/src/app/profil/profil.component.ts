import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
import { MailService } from 'services/mail.service';

import { ClientsService } from 'services/client.service';
import { ProfilService } from 'services/profil.service';
import {UtilityService} from "services/utility.service";

import * as jsPDF from 'jspdf' ;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  mail:any ;
  user:any ;
  currentUser:any;

   
  constructor ( private http: Http, private mailService : MailService , public router:Router, public profilservice : ProfilService , private utility:UtilityService ,private pdfmake: PdfmakeService)   { }



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



/*public download() {


const  pdf = new jsPDF() ; 
var img = new Image;


console.log(this.user.nomClient);


    pdf.text("Nom :" , 50,80 ) ;
    pdf.text( this.user.nomClient,100,80) ; 
    pdf.text("Adresse :",50,100 ) ;
    pdf.text( this.user.adresse,100,100) ; 
    //pdf.text( this.user.mail,60,100) ; 
    pdf.text("Tel :",50;120 ) ;

    pdf.text( this.user.tel,100,120) ; 

    //pdf.save("test.pdf");
img.onload = function() {
    pdf.addImage(this,80,10,50, 50);
    pdf.save("test.pdf");

};
img.crossOrigin = "";  
img.src = "../assets/club.JPG";  


} */ 

public download() {

  this.mailService.sendMail().
  subscribe(data=>{
      this.mail=data;
      console.log(this.mail) ; 
    
    },err=> {
         console.log(err);
    });



}


/*public download() {
       
        
var server  = email.server.connect({
   user:    "nawal.zakri1@gmail.com", 
   password:"W1SnhpGfbkqFUyJx", 
   host:    "smtp-relay.sendinblue.com", 
   ssl:     true
   port:    587
});
 
// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "You have signed up", 
   from:    "nawal.zakri1@gmail.com", 
   to:      "nawal.zakri1@insa-cvl.fr",
   subject: "Welcome to my app",
   attachment: 
   [
      {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
     
   ]
}, function(err, message) { 
    if(err)
    console.log(err);
    else
    res.json({success: true, msg: 'sent'});
 });
        
    } */

 





}
