import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ItemDetailsGuard } from "src/app/services/guards/item-details.guard";
import { SharedModule } from "../shared/shared.module";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemComponent } from "./unoptimalized-items-list/item/item.component";
import { UnoptimalizedItemsListComponent } from "./unoptimalized-items-list/unoptimalized-items-list.component";

@NgModule({
    declarations: [
      ItemComponent,
      ItemDetailsComponent,
      UnoptimalizedItemsListComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild([
        { path: 'items', component: UnoptimalizedItemsListComponent },
        { path: 'items/:id', canActivate: [ ItemDetailsGuard ], component: ItemDetailsComponent }]), // guard pozwalajacy na restrykcje dostepu do podstrony 
        // na bazie wyniku funkcji canActivate (patrz na implementacje guarda) - w tym przypadku routing do strony szczegółów nie zostanie wykonany jesli parametr
        // :id nie będzie cyfrą
      SharedModule
      ]
  })
  export class ItemModule { }