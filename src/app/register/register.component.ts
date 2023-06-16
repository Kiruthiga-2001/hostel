import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder ,
    private http:HttpClient,private router:Router) { }

  ngOnInit():void {
    this.registerForm = this.formbuilder.group({
      name:['',[Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-Z]+$')]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]]

    })

  }
  register(){
    this.submitted=true
    if(this.registerForm.invalid){
      return
    }
     this.http.post("http://localhost:3000/register",this.registerForm.value)
     .subscribe(res=>{
      alert("Registeration successfully");
      this.registerForm.reset();
      this.router.navigate(['login']);

  }, err=>{
    alert("something went wrong")
  })

    }
}

