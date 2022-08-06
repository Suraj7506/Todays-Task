import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
isuserLoggedIn(){
  return !!localStorage.getItem('userDetails')
}

}
