import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {carsReducer} from './redux/cars.reducer';
import {CarsService} from './services/cars.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {CarsEffect} from './redux/cars.effect';
import {RouterModule} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer}),
    HttpClientModule,
    EffectsModule.forRoot([CarsEffect]),
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
