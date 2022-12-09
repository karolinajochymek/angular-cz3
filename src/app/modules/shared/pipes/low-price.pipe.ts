import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowPrice'
})
export class LowPricePipe implements PipeTransform {

  transform(value: any, price: any): unknown {
    return price < 10 ? `${value} - low price` : value;
  }

}
