import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepo: Repository<Position>,
  ) {}

  async findAll(): Promise<Position[]> {
    try {
      return await this.positionRepo.find();
    } catch (error) {
      console.error('Error al obtener todas las posiciones:', error);
      return [];
    }
  }

async findPosition(id: number): Promise<Position | { message: string }> {
  try {
    const position = await this.positionRepo.findOneBy({ id });
    if (!position) {
      return { message: `No se encontró la posición con ID ${id}` };
    }
    return position;
  } catch (error) {
    console.error(`Error al buscar posición con ID ${id}:`, error);
    return { message: `Ocurrió un error al buscar la posición con ID ${id}` };
  }
}

  async create(createPositionDto: CreatePositionDto): Promise<Position | {}> {
    try {
      const position = this.positionRepo.create(createPositionDto);
      return await this.positionRepo.save(position);
    } catch (error) {
      console.error('Error al crear nueva posición:', error);
      return {};
    }
  }

     async removePosition(id: number) {
    try {
      const position = await this.positionRepo.findOneBy({ id });

      if (!position) {
        throw new NotFoundException(`Posición con ID ${id} no encontrada`);
      }

      await this.positionRepo.remove(position);

      return { message: `Posición con ID ${id} eliminada correctamente` };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al eliminar la posición: ${error.message}`,
      );
    }
  }

  async updatePosition(id: number, updateDto: UpdatePositionDto) {
  try {
    const position = await this.positionRepo.findOneBy({ id });

    if (!position) {
      throw new NotFoundException(`Posición con ID ${id} no encontrada`);
    }

    const updated = this.positionRepo.merge(position, updateDto);
    return await this.positionRepo.save(updated);
  } catch (error) {
    throw new InternalServerErrorException(
      `Error al actualizar posición: ${error.message}`,
    );
  }
}
}