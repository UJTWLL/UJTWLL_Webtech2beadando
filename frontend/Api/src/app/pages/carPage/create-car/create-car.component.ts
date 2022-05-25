import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateCarDTO } from 'src/app/services/domain/settings/car/car';
import { ProductService } from 'src/app/services/domain/settings/car/product.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private service: ProductService) { }

  carFormGroup = new FormGroup({
    licensePlateNumber: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[A-Z]{3}[0-9]{3}')]),
    brand: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    type: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    horsepower: new FormControl('', [Validators.required, Validators.min(1)]),
    price: new FormControl('', [Validators.required, Validators.min(1)])
  });
  car: CreateCarDTO;
  ngOnInit(): void { }

  success() {
    this.snackBar.open('Sikeres létrehozás', '', {
      duration: 3000,
    });
  }
  error() {
    this.snackBar.open('Sikertelen létrehozás', '', {
      duration: 3000,
    });
  }
  createProduct = () => {
    this.car = {
      licensePlateNumber: this.carFormGroup.get('licensePlateNumber').value,
      brand: this.carFormGroup.get('brand').value,
      type: this.carFormGroup.get('type').value,
      horsepower: this.carFormGroup.get('horsepower').value,
      price: this.carFormGroup.get('price').value
    };
    this.service.createCar(this.car.licensePlateNumber, this.car.brand, this.car.type, this.car.horsepower, this.car.price).subscribe(val => {
      if (val != null) {
        this.success();
      }

    }, (err) => {
      this.error();
    });
  }
}