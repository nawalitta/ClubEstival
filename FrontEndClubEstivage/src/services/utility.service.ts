import {Injectable} from "@angular/core";




@Injectable()
export class UtilityService {

    isLogged(): Promise<boolean> {
        if(typeof (Storage) !== 'undefined') {
            if(sessionStorage.length!= 0) {
                return Promise.resolve(true);
            }
        }
        return Promise.resolve(false);
    }






    

}