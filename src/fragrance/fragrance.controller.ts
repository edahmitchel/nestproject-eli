import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FragranceDTO } from './dto/createFragrance.dto';
import { Fragrance } from './fragrance.model';
import { FragranceService } from './fragrance.service';


@Controller('fragrance')
export class FragranceController {
  constructor(private readonly fragranceService: FragranceService) { }

  @Get("all")
  getAll() {
    return this.fragranceService.getFragrance()
  }
  // @Get(':id')
  // getFragrance(@Param('id') fragId: string) {
  //   return this.fragranceService.getSingleFragrance(fragId);
  // }

  @Post()
  addFragrance(
    @Body() reqBody:FragranceDTO ,
  ):Fragrance[] {
    // return reqBody;
    return this.fragranceService.store(reqBody)
  }
  @Patch(':id')
  updateFragrance(
    @Body() reqBody:FragranceDTO,
    @Param('id') id :string
  ) {
    this.fragranceService.updateFragrance(id,reqBody);
    return null;
  }

  @Delete(':id')
  removeFragrance(@Param('id') fragId: string) {
    this.fragranceService.deleteFragrance(fragId);
    return null;
  }


}
