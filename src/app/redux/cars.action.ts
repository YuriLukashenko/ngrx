// tslint:disable-next-line:no-namespace
import {Action} from '@ngrx/store';
import {Car} from '../car.model';

export namespace CAR_ACTION {
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const UPDATE_CAR = 'UPDATE_CAR';
  export const LOAD_CARS = 'LOAD_CARS';
}

export class AddCar implements Action {
  readonly type = CAR_ACTION.ADD_CAR;

  constructor(public payload: Car) {}
}

export class DeleteCar implements Action {
  readonly type = CAR_ACTION.DELETE_CAR;

  constructor(public payload: Car) {}
}

export class UpdateCar implements Action {
  readonly type = CAR_ACTION.UPDATE_CAR;

  constructor(public payload: Car) {}
}

export class LoadCar implements Action {
  readonly type = CAR_ACTION.LOAD_CARS;

  constructor(public payload: Car[]) {
  }
}
