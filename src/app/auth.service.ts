import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private kiipApi = environment.kiipApiUrl+"/login"

  constructor(private http: HttpClient) { }

  public isLoggedIn(): boolean{
    const token = localStorage.getItem('accessToken') || "";
    return !!localStorage.getItem('accessToken') && this.isValidToken(token);
  }

  public login(user: User): Observable<any>{
    return this.http.post<any>(this.kiipApi, user);
  }

  private isValidToken(token:String): boolean{

    return false;
  }
}
