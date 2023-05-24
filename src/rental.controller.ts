import { Controller, Get, Inject } from '@nestjs/common';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get('rentbike')
  rentbike(): string {
    return this.rentalService.rentBike();
  }

  @Get('rentcar')
  rentcar(): string {
    return this.rentalService.rentCar();
  }
}
