import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Zarejestrowanie serwisu jako globalnego - dostepny dla kazdego komponentu w aplikacji (rekomendowany sposob rejestracji service)
})
export class DataService {
  private dataUrl = '../assets/data.settings.json'; //plik z danymi do wyswietlenia / w tym miejscu można uzyc URL do api
  
  private _items: Item[] = [{
      no: 1,
      name: 'One',
      quantity: 2,
      price: 25.34,
      isClicked: false
    }, {
      no: 2,
      name: 'Two',
      quantity: 4,
      price: 26.00,
      isClicked: false
    }, {
      no: 3,
      name: 'Three',
      quantity: 6,
      price: 5.12,
      isClicked: false
    },
      {}
  ];

  get items(): Item[] {
    return this._items;
  }

  getProducts(): Observable<Item[]> {
    return this.http.get(this.dataUrl) as Observable<Item[]>;
  }

  getProductDetails(id: number | null): Observable<Item | undefined> {
      //return this.http.get(`${this.dataUrl}/${id}`) as Observable<Item>; //wywołanie zewnetrznego API -> endpoint do konkretnego itemu, na bazie parametru id
      return this.getProducts().pipe(map(items => items.find(i => i.no === id))); //Pobieranie detailsow itemu na bazie zapytania o liste produktow (przypadek pobierania z pliku) -> pobieramy liste i filtrujemy po id
  }

  constructor(private http: HttpClient) { }
}
