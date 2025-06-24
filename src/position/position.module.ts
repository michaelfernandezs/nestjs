import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { Position } from './entities/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Position])], // 👈 esto es lo que faltaba
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}
