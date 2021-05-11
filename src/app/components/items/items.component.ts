import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/Item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

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
        id: 0,
        title: 'pera',
        price: 15,
        quantity: 6,
        completed: true
      }
    ];
  }

}
