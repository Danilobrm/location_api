import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { LocationService } from '../services/location.service';
import { Request, Response } from 'express';
import { Location } from '../../domain/entities/location.entity';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('create')
  async createLocation(
    @Body() body: { name: string; city: string; state: string },
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response<{ message: string; status: number }>> {
    const user_id = req.user_id;

    await this.locationService.createLocation(
      body.name,
      body.city,
      body.state,
      user_id,
    );

    return res.json({
      statusCode: res.statusCode,
      message: 'localização criada com sucesso!',
    });
  }

  @Get(':id')
  async getLocationById(@Param() param: { id: string }): Promise<Location> {
    const location_id = param.id;

    return await this.locationService.getLocationById(location_id);
  }

  @Get()
  async getAllLocations(@Query('name') name?: string): Promise<Location[]> {
    return await this.locationService.getAllLocations(name);
  }

  @Patch('edit/:id')
  async editLocation(
    @Body() body: { name: string; city: string; state: string },
    @Param() param: { id: string },
    @Res() res: Response,
  ): Promise<Response<{ message: string; status: number }>> {
    const location_id = param.id;
    await this.locationService.updateLocation(location_id, {
      ...body,
    });

    return res.json({
      statusCode: res.statusCode,
      message: 'dados de localização alterados com sucesso!',
    });
  }

  @Delete('delete/:id')
  async deleteLocation(
    @Param() param: { id: string },
    @Res() res: Response,
  ): Promise<Response<{ message: string; status: number }>> {
    const location_id = param.id;

    const deletedLocation =
      await this.locationService.deleteLocation(location_id);

    return res.json({
      statusCode: res.statusCode,
      message: `a localização '${deletedLocation.name}' foi deletada.`,
    });
  }
}
