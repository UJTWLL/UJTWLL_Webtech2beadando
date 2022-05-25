import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarDTO, CarResponseDTO } from './car';
import { CarController } from './car.controller.service';
import { toCreatedCar, toCars } from './car.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private controller: CarController) { }

    getCars(): Observable<CarDTO[]> {
        return this.controller.getCars().pipe(map((response: CarDTO[]) => {
            return response ? toCars(response) : null;
        }));
    }
    
    createCar(licensePlateNumber: string, brand: string, type: string, horsepower: number, price: number) {
        return this.controller.createCar({ licensePlateNumber, brand, type, horsepower, price }).pipe(map((response: CarResponseDTO) => {
            return response ? toCreatedCar(response) : null;
        }));
    }

    // tslint:disable-next-line: variable-name
    editCar(_id: string, licensePlateNumber: string, brand: string, type: string, horsepower: number, price: number) {
        return this.controller.editCar({ _id, licensePlateNumber, brand, type, horsepower, price }).pipe();
    }

    // tslint:disable-next-line: variable-name
    deleteCar(_id: string) {
        return this.controller.deleteCar(_id).pipe();
    }

}
