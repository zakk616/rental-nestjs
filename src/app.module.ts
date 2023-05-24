import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { VehicleRentalModule } from './vehicle-rental/vehicle-rental.module';

@Module({
  imports: [VehicleRentalModule],
  controllers: [AppController, RentalController],
  providers: [AppService, RentalService],
})
export class AppModule {}
