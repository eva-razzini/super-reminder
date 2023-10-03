import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input()
  listItem: any;
  
  toggleFavourite() {
    this.listItem.favourite = !this.listItem.favourite;
  }
  
}