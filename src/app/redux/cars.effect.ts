import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AddCar, CAR_ACTION} from './cars.action';
import {mergeMap, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Car, Cars} from '../car.model';
import {CarsService} from '../services/cars.service';

@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, private service: CarsService) {
  }

  @Effect() loadCars = this.actions$.pipe(ofType(CAR_ACTION.ADD_CAR))
    .pipe(switchMap((action: AddCar) => {
      return this.service.preloadCars();
    }))
    .pipe(mergeMap((cars: Car[]) => {
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ];
    }));
}
