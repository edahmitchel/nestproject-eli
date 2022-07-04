import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FragranceService } from './fragrance.service';


@Controller('fragrance')
export class FragranceController {
  constructor(private readonly fragranceService: FragranceService) {}

@Get("all")
getAll(){
  return "hello"
}
}
