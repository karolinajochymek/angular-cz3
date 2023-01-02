import { Pipe, PipeTransform } from '@angular/core';
import { generateRandomLettersText, generateRandomNumber } from '../utils/pseudo-random-generator';

@Pipe({
  name: 'textGenerator'
})
export class TextGeneratorPipe implements PipeTransform {

  transform(value: unknown): string {
    const generatedTxt = generateRandomLettersText(generateRandomNumber(5, 10));
    return `${value} of ${generatedTxt}`;
  }

}
