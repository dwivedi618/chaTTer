import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }
  
  requestOTP(email){
    return this.http.post(`${environment.apiUrl}send-otp`,{email: email});
  }

}
