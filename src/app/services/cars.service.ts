import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {map} from 'rxjs/operators';
import {subscribeToPromise} from 'rxjs/internal-compatibility';
import {Car} from '../car.model';
import {AddCar, DeleteCar, LoadCar, UpdateCar} from '../redux/cars.action';
import {Observable} from 'rxjs';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  preloadCars(): Observable<Car[]> {
    return this.http.get<Car[]>(CarsService.BASE_URL + 'cars');
  }

  loadCars(): void {
    this.preloadCars()
      .subscribe((cars: Car[]) => {
        this.store.dispatch(new LoadCar(cars));
    });
  }

  addCar(car: Car) {
    this.http.post(CarsService.BASE_URL + 'cars', car)
      .subscribe((respCar: Car) => {
        this.store.dispatch(new AddCar(respCar));
      });
  }

  deleteCar(car: Car) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .subscribe(_ => {
        this.store.dispatch(new DeleteCar(car));
      });
  }

  updateCar(car: Car) {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .subscribe((respCar: Car) => {
        this.store.dispatch(new UpdateCar(respCar));
      });
  }
}
