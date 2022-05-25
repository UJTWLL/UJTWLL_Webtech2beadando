import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { HttpUserController } from './auth/http-user-controller.service';
import { UserController } from './auth/user.controller.service';
import { HttpProductController } from './settings/car/http-car-controller.service';
import { CarController } from './settings/car/car.controller.service';
import { CarGuard } from 'src/app/pages/carPage/car.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:
    [
      CarGuard,
      { provide: UserController, useClass: HttpUserController },
      { provide: CarController, useClass: HttpProductController },
    ]
})
export class DomainModule {
  constructor(@Optional() @SkipSelf() parentModule: DomainModule) {
    if (parentModule) {
      throw new Error(
        'DomainModule is already loaded. Import it in the AppModule only');
    }
  }
}
