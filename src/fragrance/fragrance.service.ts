import { Injectable,NotFoundException } from '@nestjs/common';
import { Fragrance } from './fragrance.model';


@Injectable()
export class FragranceService {
    private fragrances:Fragrance[]=[]
    insertFragrance(title: string, desc: string, price: number) {
        const fragranceId = Math.random().toString();
        const newFragrance = new Fragrance(fragranceId, title, desc, price);
        this.fragrances.push(newFragrance);
        return fragranceId;
      }
    
      getProducts() {
        return [...this.fragrances];
      }
    
      getSingleFragrance(fragranceId: string) {
        const fragrance = this.findFragrance(fragranceId)[0];
        return { ...fragrance };}

        updateFragrance(fragranceId: string, title: string, desc: string, price: number) {
            const [fragrance, index] = this.findFragrance(fragranceId);
            const updatedFragrance = { ...fragrance};
            if (title) {
              updatedFragrance.title = title;
            }
            if (desc) {
              updatedFragrance.description = desc;
            }
            if (price) {
              updatedFragrance.price = price;
            }
            this.fragrances[index] = updatedFragrance;
          }
        
          deleteFragrance(fragranceId: string) {
              const index = this.findFragrance(fragranceId)[1];
              this.fragrances.splice(index, 1);
          }
          private findFragrance(id: string): [Fragrance, number] {
            const fragIndex = this.fragrances.findIndex(frag => frag.id === id);
            const fragrance = this.fragrances[fragIndex];
            if (!fragrance) {
              throw new NotFoundException('Could not find fragrance.');
            }
            return [fragrance, fragIndex];
          }
      }
    
 

