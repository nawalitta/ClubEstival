import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilService } from 'services/profil.service';

import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user:any ;
  currentUser:any;

  constructor (   public profilservice : ProfilService   , @Inject(SESSION_STORAGE) private storage: WebStorageService ) { }


  ngOnInit() {


this.profilservice.GetInfoUser()
		.subscribe(data=>{
			this.user=data;
			console.log(this.user) ; 
		
		},err=> {
		     console.log(err);
		});

this.currentUser = this.storage.get('currentuser');

  }
















}
