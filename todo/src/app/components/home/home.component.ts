import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todoList = [{
    title: 'Do My Video',
    dueDate: '23/06/2023',
    completed: false,
    favourite: false
  }, {
    title: 'Se laver',
    dueDate: '10/06/2023',
    completed: true,
    favourite: false
  }, {
    title: 'Manger',
    dueDate: '23/06/2023',
    completed: false,
    favourite: false
  }, {
    title: 'Se doucher',
    dueDate: '10/06/2023',
    completed: true,
    favourite: false
  }, {
    title: 'Se lever',
    dueDate: '23/06/2023',
    completed: false,
    favourite: false
  }, {
    title: 'Se lecher',
    dueDate: '10/06/2023',
    completed: true,
    favourite: false
  }, ];

}
