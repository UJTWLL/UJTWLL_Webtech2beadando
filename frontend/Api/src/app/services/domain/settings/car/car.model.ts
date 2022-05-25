import { CarDTO as CarDTO, CarResponseDTO as CarResponseDTO } from './car';

export interface Car {
    _id: string;
    licensePlateNumber: string;
    brand: string;
    type: string;
    horsepower: number;
    price: number;
}

export interface CarResponse {
    _id: string;
}
export function toCars(productResponse: CarDTO[]): Car[] {
    return productResponse.map(dto => toCar(dto));
}

export function toCar(CarDTO: CarDTO): Car {
    return {
        _id: CarDTO._id,
        licensePlateNumber: CarDTO.licensePlateNumber,
        brand: CarDTO.brand,
        type: CarDTO.type,
        horsepower: CarDTO.horsepower,
        price: CarDTO.price
    };
}

export function toCreatedCar(CarDTO: CarResponseDTO): CarResponse {
    return {
        _id: CarDTO._id,
    };
}

