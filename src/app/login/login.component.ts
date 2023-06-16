import { LoginserviceService } from './loginservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup;
  submitted=false;
constructor(private formbuilder :FormBuilder, private http:HttpClient, private router:Router,private loginservice:LoginserviceService) { }
  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]]
    })
  }
  login(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }
    else{
      this.http.get<any>("http://localhost:3000/register").subscribe(res=> {
        const user=res.find((a:any)=>{
          return(a.email===this.loginForm.value.email && a.password=== this.loginForm.value.password);
        })
        if(user){
          alert("login success")
          this.loginservice.isUserLoggedIn=true;
          this.loginForm.reset();
          this.router.navigate(['pricing'])
        }
        if(this.loginForm.invalid){
          return
        }
        else{
          this.http.get<any>("http://localhost:3000/admin").subscribe(res=>{
            const admin = res.find((a:any)=>{
              return (a.userid == this.loginForm.value.userid) && (a.password == this.loginForm.value.password);
            })
            if(admin){
              alert("Admin Login sucessfully.")
              this.loginservice.isAdminLoggedIn = true;
              this.loginForm.reset();
              this.router.navigate(['admin'])
            }
       else{
              alert("user not found")
            }
          },err=>{
            alert("something went wrong")
          })
        }
      })
    }
  }
}




