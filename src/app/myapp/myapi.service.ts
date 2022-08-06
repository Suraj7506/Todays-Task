import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private http : HttpClient) { }

  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;

    })) 
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;

    })) 
  }

  updateEmployee(data:any,id:number){
    console.log(data);
    
    return this.http.put<any>("http://localhost:3000/posts/" + id ,data)
    .pipe(map((res:any)=>{
      return res;

    })) 
  }

  deleteEmployee(id: number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;

    })) 
  }

   isLoggedIn(){
   return localStorage.getItem('userDetails')
  }




}
