import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUpForm! : FormGroup
  age: any;
  public totalItem : number = 0;
  public searchTerm !: string;
  // selectedProp: string | undefined;
  arrayList: Array<any> = ['Admin','Supervisor'] 

  constructor(private formBuilder : FormBuilder,private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['', Validators.required],
      fullname:['', Validators.required],
      number:['',Validators.required],
      
      
    
    
    })

    // {
    //   // this.selectedText = new SelectText();    
    //    this.arrayList.push({  text: "Admin" });
    //   this.arrayList.push({  text: "Supervisor" });
    // }





  }


  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signUpForm.value)
   .subscribe(res=>{
     alert("Signup Successfull");
     this.signUpForm.reset();
     this.router.navigate(['login']);
   },err=>{
     alert("Something Went Wrong")
   })
   }

}
