import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { Todo } from '../../redux/todo/todo.model';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(
    private store: Store<AppState>
  ) {
    this.readTodosState();
   }

  ngOnInit() {
  }

  private readTodosState() {
    this.store.select('todos')
    .subscribe((todos) => {
      this.todos = todos;
    });
  }
}
