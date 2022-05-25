export interface CarDTO {
  _id: string;
  licensePlateNumber: string;
  brand: string;
  type: string;
  horsepower: number;
  price: number;
}

export interface CreateCarDTO {
  licensePlateNumber: string;
  brand: string;
  type: string;
  horsepower: number;
  price: number;
}

export interface CarResponseDTO {
  _id: string;
}
