import { Client } from 'models/model.client';


export class User{


	idUser:number;
	username:string;
	password:string;
	actived:boolean;
	role:number;
	ficheClient:Client; 
	
	constructor() { 
		this.ficheClient= new Client(); 

				}


}