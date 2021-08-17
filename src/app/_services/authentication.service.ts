import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
       //var authenticationURL = `${environment.apiUrl}/login`;

       const httpOptions = {
         headers: new HttpHeaders({
           'Access-Control-Allow-Origin': '*',
           'Content-Type': 'application/json'
         }),
         'responseType': 'text', observe:'response'
       };

       return this.http.post('http://localhost:7777/security/login',{ username: username, password: password },httpOptions
     ).pipe(map(response =>{
        var jwtToken = response.headers.get('authorization');
        localStorage.setItem('currentUserToken', jwtToken);
        return jwtToken;
     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUserToken');
    }
}
