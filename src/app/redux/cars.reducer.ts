import {Car} from '../car.model';
import {Action} from '@ngrx/store';
import {AddCar, UpdateCar, CAR_ACTION, DeleteCar, LoadCar} from './cars.action';

const initialState = {
  cars: []
};

export function carsReducer(state =  initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      const idx = state.cars.findIndex(c => c.id === action.payload.id);
      return {
        ...state,
        cars: [...state.cars.slice(0, idx), action.payload, ...state.cars.slice(idx + 1)]
      };
    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };
    default:
      return state;
  }
}

export type CarsAction = AddCar | DeleteCar | UpdateCar| LoadCar;
