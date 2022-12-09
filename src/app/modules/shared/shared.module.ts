import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LowPricePipe } from './pipes/low-price.pipe';
import { FullStockPipe } from './pipes/full-stock.pipe';

@NgModule({
    declarations: [
    LowPricePipe,
    FullStockPipe
  ],
    imports: [
      CommonModule,
    ],
    exports: [
      LowPricePipe,
      FullStockPipe
    ]
  })
  export class SharedModule { }