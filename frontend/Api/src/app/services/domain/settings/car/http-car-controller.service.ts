import { HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarController } from './car.controller.service';
import { CarDTO, CarResponseDTO, CreateCarDTO } from './car';
import { CarResponse } from './car.model';

@Injectable()
export class HttpProductController implements CarController {
    private readonly BASE_URL = `http://localhost:5000/api/car`;
    public defaultHeaders = new HttpHeaders();
    public encoder: HttpParameterCodec;
    constructor(private httpClient: HttpClient) { }
    public createCar(request: CreateCarDTO): Observable<CarResponseDTO> {
        return this.httpClient.post(`${this.BASE_URL}/add`, request).pipe(
            map((res: CarResponse) => res)
        );
    }
    public editCar(request: CarDTO): Observable<CarDTO> {
        return this.httpClient.put(`${this.BASE_URL}/${request._id}`, request).pipe(
            map((res: CarDTO) => res)
        );
    }
    // tslint:disable-next-line: variable-name
    public deleteCar(_id: string) {
        return this.httpClient.post(`${this.BASE_URL}/delete/${_id}`, null).pipe();
    }
    public getCars(): Observable<CarDTO[]> {
        return this.httpClient.post(`${this.BASE_URL}`, null).pipe(
            map((res: CarDTO[]) => res)
        );
    }

}
