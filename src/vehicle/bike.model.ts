import { Vehicle } from './vehicle.interface';

export class Bike implements Vehicle {
  rent(): void {
    console.log('Bike rented successfully.');
    // Additional bike-specific rental logic
  }

  return(): void {
    console.log('Bike returned successfully.');
    // Additional bike-specific return logic
  }

  getInfo(): string {
    return 'Bike: Sport Bike, 2-seater, 150cc engine';
  }
}
