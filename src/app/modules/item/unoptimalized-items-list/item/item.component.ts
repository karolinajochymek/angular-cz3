import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = {};
  @Output() clickedItem = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.item?.no) {
      this.clickedItem.emit(this.item.no);
    }
  }

}
