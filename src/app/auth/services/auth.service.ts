import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { environment } from "src/environments/environment";
import { authResponseInterface } from "../types/authResponse.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        // const url = 'https://conduit.productionready.io/api/tags';
        const url = environment.apiUrl + '/users';

        return this.http
        .post<authResponseInterface>(url, data)
        .pipe(map((response: authResponseInterface)=> response.user))
    }
}