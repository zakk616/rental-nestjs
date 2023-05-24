import { Inject, Injectable } from '@nestjs/common';
import { Car } from './vehicle/car.model';
import { Bike } from './vehicle/bike.model';

@Injectable()
export class RentalService {
  constructor(
    @Inject(Car) private readonly car: Car,
    @Inject(Bike) private readonly bike: Bike,
  ) {}
  
  rentCar(): string {
    this.car.rent();
    return this.car.getInfo();
  }

  rentBike(): string {
    this.bike.rent();
    return this.bike.getInfo();
  }
}
