import { combineReducers } from 'redux';
import { Todo, TodoAction } from '../types/types';

const todosReducer = (todos: Todo[] = [], action: TodoAction) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...todos, action.payload];
		// case 'DELETE_TODO':
		// 	return todos.filter(todo => todo.item !== action.payload.item);
		default:
			return todos;
	}
};

export default combineReducers({
	todos: todosReducer,
});
