import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/Item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 10,
        quantity: 5,
        completed: false
      },
      {
        id: 1,
        title: 'pera',
        price: 15,
        quantity: 6,
        completed: true
      },
      {
        id: 2,
        title: 'mango',
        price: 6,
        quantity: 6,
        completed: false
      },
      {
        id: 3,
        title: 'platano',
        price: 10,
        quantity: 2,
        completed: false
      }
    ];
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
      .filter(x => !x.completed)
      .map(x => x.price * x.quantity)
      .reduce((acc, item) => acc += item, 0);
  }

  toggleItem(item: Item) {
    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id !== item.id);
    this.getTotal();
  }


}
