import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
  //providers: [DataService] // mozliwosc zarejestrowania service lokalnie - 
                            // bedzie on dostępny tylko w tym komponencie i wszystkich zagnieżdzonych w nim komponentach (preferowane jest rejestrowanie globalne)

})
export class ItemDetailsComponent implements OnInit {
  title = 'Item details';
  item: Item | null | undefined;
  id: number = 0;

  item$: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
    private registeredService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.item$ = this.registeredService.getProductDetails(this.id).subscribe(data => this.item = data);
  }

  ngOnDestroy(): void {
    this.item$?.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/items']);
  }

}
