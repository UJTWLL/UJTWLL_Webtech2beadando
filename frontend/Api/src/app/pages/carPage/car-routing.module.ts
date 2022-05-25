import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCarComponent } from './create-car/create-car.component';
import { ListCarComponent } from './listCarPage/list-car.component';

const routes: Routes = [
    { path: 'cars', component: ListCarComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarRoutingModule { }
