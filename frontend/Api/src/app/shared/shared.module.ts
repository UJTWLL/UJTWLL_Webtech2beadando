import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from '../services/domain/domain.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DomainModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DomainModule
  ],
  declarations: [],
  providers: [],
})
export class SharedModule { }

