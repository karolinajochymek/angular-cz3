import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullStock'
})
export class FullStockPipe implements PipeTransform {

  transform(value: any, quantity: any): unknown {
    return quantity > 4 ? `${value} - full stock` : value;
  }

}
