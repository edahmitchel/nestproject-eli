import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FragranceService } from './fragrance.service';


@Controller('fragrance')
export class FragranceController {
  constructor(private readonly fragranceService: FragranceService) { }

  @Get("all")
  getAll() {
    return this.fragranceService.getProducts
  }
  @Get(':id')
  getFragrance(@Param('id') fragId: string) {
    return this.fragranceService.getSingleFragrance(fragId);
  }

  @Post()
  addFragrance(
    @Body('title') fragTitle: string,
    @Body('description') fragDesc: string,
    @Body('price') fragPrice: number,
  ) {
    const generatedId = this.fragranceService.insertFragrance(
      fragTitle,
      fragDesc,
      fragPrice,
    );
    return { id: generatedId };
  }
  @Patch(':id')
  updateFragrance(
    @Param('id') fragId: string,
    @Body('title') fragTitle: string,
    @Body('description') fragDesc: string,
    @Body('price') fragPrice: number,
  ) {
    this.fragranceService.updateFragrance(fragId, fragTitle, fragDesc, fragPrice);
    return null;
  }

  @Delete(':id')
  removeFragrance(@Param('id') fragId: string) {
    this.fragranceService.deleteFragrance(fragId);
    return null;
  }


}
