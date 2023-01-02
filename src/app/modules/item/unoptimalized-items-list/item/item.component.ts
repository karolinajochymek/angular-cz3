import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { generateRandomNumber, generateRandomNumbersArray } from 'src/app/modules/shared/utils/pseudo-random-generator';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = {};
  @Output() clickedItem = new EventEmitter<number>();
  upperIndexes: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.upperIndexes = generateRandomNumbersArray(0, 4, generateRandomNumber(1, 5));
  }

  onClick(): void {
    if (this.item?.no) {
      this.clickedItem.emit(this.item.no);
    }
  }

}
