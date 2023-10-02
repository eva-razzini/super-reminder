import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoList } from 'src/app/models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoListArray: TodoList[] = [];

  constructor() {
    const todoList = new TodoList('default');
    todoList.todos.push(new TodoItem('Somthing to do'));
    todoList.todos.push(new TodoItem('Some other thing to do'));

    const todoList2 = new TodoList('work');
    todoList.todos.push(new TodoItem('work to do'));
    todoList.todos.push(new TodoItem('Some more work to do'));
    todoList.todos.push(new TodoItem('And again work to do'));

    const todoList3 = new TodoList('personnal');

    this.todoListArray.push(todoList);
    this.todoListArray.push(todoList2);
    this.todoListArray.push(todoList3);
   }

   getTodoLists() {
    return this.todoListArray;
   }
}
