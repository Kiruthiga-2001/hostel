import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'hostel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "HMS";

  constructor(private loginService: LoginserviceService) { }
  get isUserLogin() {
    return this.loginService.isUserLogin();
  }
  get isAdminLogin() {
    return this.loginService.isAdminLogin();
  }

  ngOnInit() {
  }



}



