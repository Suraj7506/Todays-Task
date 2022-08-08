import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private http : HttpClient) { }

  

   isLoggedIn(){
   return localStorage.getItem('userDetails')
  }




}
