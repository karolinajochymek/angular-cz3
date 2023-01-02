import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LowPricePipe } from './pipes/low-price.pipe';
import { FullStockPipe } from './pipes/full-stock.pipe';
import { UpperCaseByLastIndxPipe } from './pipes/upper-case-by-last-indx.pipe';
import { TextGeneratorPipe } from './pipes/text-generator.pipe';

@NgModule({
    declarations: [
    LowPricePipe,
    FullStockPipe,
    UpperCaseByLastIndxPipe,
    TextGeneratorPipe
  ],
    imports: [
      CommonModule,
    ],
    exports: [
      LowPricePipe,
      FullStockPipe,
      UpperCaseByLastIndxPipe,
      TextGeneratorPipe
    ]
  })
  export class SharedModule { }