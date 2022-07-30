import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FragranceDTO } from './dto/createFragrance.dto';
import { Fragrance } from './fragrance.entity';
// import { Fragrance } from './fragrance.model';


@Injectable()
export class FragranceService {

  constructor(
     @InjectRepository(Fragrance)
     private fragranceRepository: Repository<Fragrance>,
  ) {}
   
 async findAll():Promise<Fragrance[]>{
  return await this.fragranceRepository.find()
}    

findOne(id:string):Promise<Fragrance>{
  return this.fragranceRepository.findOneBy({id})
}
async create(fragranceDTO:FragranceDTO):Promise<Fragrance>{
  const fragrance = this.fragranceRepository.create(fragranceDTO);
  await this.fragranceRepository.save(fragrance);
  return fragrance
}

async remove(id:string):Promise<void>{
  await this.fragranceRepository.delete(id)
}
 
  
}
    
//     store(fragrance:FragranceDTO) {
// const {size, price, discount,stock,name} = fragrance
//         const Id = Math.random().toString();
//         const newFragrance = new Fragrance(Id,name,size, price,stock, discount,);
//         this.fragrances.push(newFragrance);
//         return this.fragrances;
//       }
//     // store(fragrance:FragranceDTO){
//     //   this.fragrances.push(fragrance);
//     //   return fragrance;

//     // }
//       getFragrance() {
//         return [...this.fragrances];
//       }
    
//       getSingleFragrance(fragranceId: string) {
//         const fragrance = this.findFragrance(fragranceId)[0];
//         return [...this.fragrances ];}

//         updateFragrance( id:string,
//            frag:FragranceDTO) {
//             const {size, price, discount,stock,name} = frag
 
//             const [fragrance, index] = this.findFragrance(id);
//             const updatedFragrance = { ...fragrance};
//             if (discount) {
//               updatedFragrance.discount = discount;
//             }
//             if (stock) {
//               updatedFragrance.stock = stock;
//             }
//             if (price) {
//               updatedFragrance.price = price;
//             }
//             if (size) {
//               updatedFragrance.size= size;
//             }
//             if (name) {
//               updatedFragrance.name = name;
//             }
//             this.fragrances[index] = updatedFragrance;
//           }
        
//           deleteFragrance(fragranceId: string) {
//               const index = this.findFragrance(fragranceId)[1];
//               this.fragrances.splice(index, 1);
//           }
//           private findFragrance(id: string): [Fragrance, number] {
//             const fragIndex = this.fragrances.findIndex(frag => frag.id === id);
//             const fragrance = this.fragrances[fragIndex];
//             if (!fragrance) {
//               throw new NotFoundException('Could not find fragrance.');
//             }
//             return [fragrance, fragIndex];
//           }
      
    
 

