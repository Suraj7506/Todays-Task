import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyapiService } from './myapp/myapi.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  hello= 'assets/lions.png';


  // list = [1,2,3,4,5];
  
//DOB property will store a reference variable the data type of 
//this property is going to be element Ref


//Use of Viewchild Decorator it assigns a property with a reference to an html element 
// or to a component or a directive
// Using Viewchild decorator we can also get access to a component or a directive

//   @ViewChild('dobInput') dateOfBirth!: ElementRef;
// @ViewChild('ageInput') age!: ElementRef;

// calculateAge(){
//   let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
//   let currentYear = new Date().getFullYear();
//   let age = currentYear - birthYear;
//   this.age.nativeElement.value = age;

//   // console.log(this.dateOfBirth);
//   // console.log(this.age);

// }

constructor(
  private service: MyapiService,
  private router  : Router
){

}

isLoggedIn(){
 return this.service.isLoggedIn()
}
logout(){
  localStorage.removeItem('userDetails');
  this.router.navigate(['login']);
}
refresh(){
  this.router.navigate(['category']);

}

}
