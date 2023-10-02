import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoList } from 'src/app/models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly L_KEY_TODO_LIST = "todo-list";
  private todoListsArray: TodoList[] = [];

  constructor() {
  }

  getTodoLists(): TodoList[] {
    const todoListString = localStorage.getItem(this.L_KEY_TODO_LIST);
    if (todoListString) {
      this.todoListsArray = JSON.parse(todoListString);
    } else {
      this.todoListsArray = [];
    }
    return this.todoListsArray;
  }

  addList(listName: string) {
    this.todoListsArray.push(new TodoList(listName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListsArray));
  }

  addListItem(listId: number, itemName: string) {
    const listObject = this.todoListsArray.filter(lisItem => lisItem.id == listId)[0];
    listObject.todos.push(new TodoItem(itemName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListsArray));
  }
}
