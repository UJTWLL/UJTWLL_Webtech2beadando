import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponse } from './car.model';
import { CreateCarDTO as CreateCarDTO, CarDTO as CarDTO, } from './car';

@Injectable()
export abstract class CarController {
    public abstract getCars(): Observable<CarDTO[]>;
    public abstract createCar(request: CreateCarDTO): Observable<CarResponse>;
    public abstract editCar(request: CarDTO): Observable<CarDTO>;
    // tslint:disable-next-line: variable-name
    public abstract deleteCar(_id: string);
}
