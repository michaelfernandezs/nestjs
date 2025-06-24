import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get('all')
  findAll() {
    return this.positionService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.positionService.findPosition(+id);
  }

  @Post('new')
  create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }


  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.positionService.removePosition(+id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updatePositionDto: CreatePositionDto,
  ) {
    return this.positionService.updatePosition(+id, updatePositionDto);
  }
}
