import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FragranceDTO } from './dto/createFragrance.dto';
import { Fragrance } from './fragrance.model';
import { FragranceService } from './fragrance.service';


@Controller('fragrance')
export class FragranceController {
  constructor(private readonly fragranceService: FragranceService) { }

  @Get('all')
  getAll():Promise<Fragrance[]> {
   return this.fragranceService.findAll();
  //   return this.fragranceService.getFragrance()
  }
   @Get(':id')
  getFragrance(@Param('id') fragId: string) {
      return this.fragranceService.findOne(fragId);
   }

  @Post()
  addFragrance(
    @Body() reqBody:FragranceDTO ,
  ): Promise<Fragrance> {
    return this.fragranceService.create(reqBody);
  } 
    }
  // @Patch(':id')
  // updateFragrance(
  //   @Body() reqBody:FragranceDTO,
  //   @Param('id') id :string
  // ) {
  //   this.fragranceService.updateFragrance(id,reqBody);
  //   return null;
  // }

  // @Delete(':id')
  // removeFragrance(@Param('id') fragId: string) {
  //   this.fragranceService.deleteFragrance(fragId);
  //   return null;
  // }



