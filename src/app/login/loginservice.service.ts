import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  isUserLoggedIn = false;
  isAdminLoggedIn = false;

constructor(private http: HttpClient) { }
isUserLogin() {
  if (this.isUserLoggedIn) {
    return true;
  } else {
    return false;
  }
}
isAdminLogin() {
  if (this.isAdminLoggedIn) {
    return true;
  } else {
    return false;
  }
}

}
