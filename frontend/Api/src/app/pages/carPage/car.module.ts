import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarComponent } from './listCarPage/list-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarRoutingModule } from './car-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ListCarComponent, CreateCarComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CarModule { }
