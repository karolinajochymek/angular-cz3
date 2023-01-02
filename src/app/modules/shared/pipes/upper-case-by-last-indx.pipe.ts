import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseByLastIndx'
})
export class UpperCaseByLastIndxPipe implements PipeTransform {

  transform(value: string, upperIndexes: number[]): string {
    if (!value || !upperIndexes || upperIndexes.length === 0) {
      return value;
    }

    const valueArray = value.split('');

    upperIndexes.forEach(indexFromLast => {
      valueArray[valueArray.length - 1 - indexFromLast] = valueArray[valueArray.length - 1 - indexFromLast].toUpperCase();
    });

    return valueArray.join('');
  }

}
