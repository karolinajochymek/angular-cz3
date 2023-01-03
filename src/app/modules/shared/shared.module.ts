import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LowPricePipe } from './pipes/low-price.pipe';
import { FullStockPipe } from './pipes/full-stock.pipe';
import { UpperCaseByLastIndxPipe } from './pipes/upper-case-by-last-indx.pipe';
import { TextGeneratorPipe } from './pipes/text-generator.pipe';
import { SimpleCheckPermissionDirective } from './directives/simple-check-permission.directive';
import { CheckPermissionDirective } from './directives/check-permission.directive';
import { ColorChangeDirective } from './directives/color-change.directive';

@NgModule({
    declarations: [
    LowPricePipe,
    FullStockPipe,
    UpperCaseByLastIndxPipe,
    TextGeneratorPipe,
    SimpleCheckPermissionDirective,
    CheckPermissionDirective,
    ColorChangeDirective
  ],
    imports: [
      CommonModule,
    ],
    exports: [
      LowPricePipe,
      FullStockPipe,
      UpperCaseByLastIndxPipe,
      TextGeneratorPipe,
      SimpleCheckPermissionDirective,
      CheckPermissionDirective,
      ColorChangeDirective
    ]
  })
  export class SharedModule { }