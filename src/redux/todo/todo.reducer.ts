import { Action } from '@ngrx/store';
import { Todo } from './todo.model';
import { AllActions, TODO_ADD } from './todo.actions';

export function todosReducer(oldState: Todo[] = [], action: AllActions): Todo[] {
  switch (action.type) {
    case TODO_ADD: {
      return [
        ...oldState,
        action.newTodo
      ];
    }
    default: {
      return oldState;
    }
  }
}
