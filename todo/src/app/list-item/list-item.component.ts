import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  listItem = {
    title:'Do My Video',
    dueDate: '23/06/2023',
    completed: true,
    favourite: true
  };
}
