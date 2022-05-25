import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserDTO } from './user/user';

@Injectable()
export abstract class UserController {
    public abstract login(request: UserDTO): Observable<UserDTO>;
    public abstract register(request: UserDTO): Observable<UserDTO>;
}
