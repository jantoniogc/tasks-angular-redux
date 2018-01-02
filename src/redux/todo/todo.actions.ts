import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export const TODO_ADD = '[Todos] add';

export class TodoAddAction implements Action {
  readonly type = TODO_ADD;

  constructor(
    public newTodo: Todo
  ) { }
}

export type AllActions = TodoAddAction;
