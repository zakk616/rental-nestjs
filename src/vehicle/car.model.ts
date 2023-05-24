import { Vehicle } from './vehicle.interface';

export class Car implements Vehicle {
  rent(): void {
    console.log('Car rented successfully.');
    // Additional car-specific rental logic
  }

  return(): void {
    console.log('Car returned successfully.');
    // Additional car-specific return logic
  }

  getInfo(): string {
    return 'Car: Sedan, 4 doors, AC, Automatic Transmission';
  }
}
