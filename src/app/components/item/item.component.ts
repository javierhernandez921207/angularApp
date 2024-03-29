import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../models/Item";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle(item: Item) {
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }

  onDelete(item: Item) {
    // el evento que estoy emitiendo en el Output
    this.deleteItem.emit(item);
  }
}
