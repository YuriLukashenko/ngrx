import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car.model';
import {CarsService} from '../services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;

  constructor(private service: CarsService) {
  }

  onDelete() {
    this.service.deleteCar(this.car);
  }

  onBuy() {
    const carCopy = Object.assign({}, this.car);
    console.log(carCopy);
    carCopy.isSold = true;
    this.service.updateCar(carCopy);
  }
}
