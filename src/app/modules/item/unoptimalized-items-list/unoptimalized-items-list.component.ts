import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-unoptimalized-items-list',
  templateUrl: './unoptimalized-items-list.component.html',
  styleUrls: ['./unoptimalized-items-list.component.scss']
})
export class UnoptimalizedItemsListComponent implements OnInit {

  items: Item[] = [];
  items$: Subscription = new Subscription();

  filter: string = '';

  constructor(private registeredService: DataService) { }

  get filteredItems(): Item[] {
    return this.items.filter(x => x.name?.toLocaleLowerCase()?.includes(this.filter.toLocaleLowerCase()))
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.items$.unsubscribe();
  }

}
