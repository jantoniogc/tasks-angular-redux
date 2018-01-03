import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../redux/todo/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { TodoRemoveAction, TodoToggleAction, TodoUpdateAction } from '../../redux/todo/todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  checkField: FormControl;
  textField: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
    .subscribe((value) => {
      const action = new TodoToggleAction(this.todo.id);
      this.store.dispatch(action);
    });
    this.textField = new FormControl('', [Validators.required]);
   }

  ngOnInit() {
  }

  deleteTodo() {
    const action = new TodoRemoveAction(this.todo.id);
    this.store.dispatch(action);
  }
  updateText() {
    const action = new TodoUpdateAction(this.todo.id, this.textField.value);
    this.store.dispatch(action);
  }

}
