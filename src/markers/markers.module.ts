import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marker } from './entities/marker.entity';
import { MarkersController } from './markers.controller';
import { MarkersService } from './markers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Marker])],
  controllers: [MarkersController],
  providers: [MarkersService],
})
export class MarkersModule {}
