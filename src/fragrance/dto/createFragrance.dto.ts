import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class FragranceDTO {
  @IsNotEmpty()
  @IsBoolean()
  discount: boolean
  @IsString()
  @IsNotEmpty()
  name: string
  @IsNotEmpty()
  @IsNumber()
  size: number
  @IsNotEmpty()
  @IsNumber()
  price: number
  @IsNotEmpty()
  @IsNumber()
  stock: number

}