import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    register(credentials) {
        this.http.post<any>(`http://localhost:60763/api/account/`, credentials)
            .subscribe(res => {
                console.log(res);
                localStorage.setItem('token', res);
                console.log(localStorage.getItem('token'));
            });
    }

}