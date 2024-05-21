import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { HelperService } from '../helper/helper.service'
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private router: Router, private http: HttpClient, private helperService: HelperService) {
  }

  Register(data: any,): Observable<any> {
    return this.http.post<any>(environment.apiUrl + "/Register", data)
  }

  login(data: any,): Observable<boolean> {

    return this.http.post<any>(environment.apiUrl + `/Login`, data).pipe(map((res: any) => {
      if (res.success) {
        var userData: User = {
          token: res.data.token,
          role: res.data.roles,
          username: res.data.userName,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
        };
        localStorage.setItem('user', JSON.stringify(userData));
        this.helperService.setLogInUser = userData;
      }
      return res.success;
    }));
  }

  logout() {
    localStorage.removeItem('user');
    this.helperService.setLogInUser = null;
    this.router.navigate(['/login']);
  }

  Get(apiendpoint: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + apiendpoint, { headers: this.helperService.getUserToken() })
  }

  Post(apiendpoint: string, data: any,): Observable<any> {
    return this.http.post<any>(environment.apiUrl + apiendpoint, data, { headers: this.helperService.getUserToken() })
  }

  Put(apiendpoint: string, data: any,): Observable<any> {
    return this.http.put<any>(environment.apiUrl + apiendpoint, data, { headers: this.helperService.getUserToken() })
  }

}
