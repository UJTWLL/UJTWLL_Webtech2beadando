import { HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserController } from './user.controller.service';
import { UserDTO } from './user/user';

@Injectable()
export class HttpUserController implements UserController {
    private readonly BASE_URL = `http://localhost:5000`;
    public defaultHeaders = new HttpHeaders();
    public encoder: HttpParameterCodec;
    constructor(private httpClient: HttpClient) { }
    public login(request: UserDTO): Observable<UserDTO> {
        return this.httpClient.post(`${this.BASE_URL}/login`, request).pipe(
            map((res: UserDTO) => res)
        );
    }
    public register(request: UserDTO): Observable<UserDTO> {
        return this.httpClient.post(`${this.BASE_URL}/register`, request).pipe(
            map((res: UserDTO) => res)
        );
    }
}
