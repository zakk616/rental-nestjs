import { Module } from '@nestjs/common';
import { Car } from '../vehicle/car.model';
import { Bike } from '../vehicle/bike.model';

@Module({
  providers: [Car, Bike],
  exports: [Car, Bike],
})
export class VehicleRentalModule {}
