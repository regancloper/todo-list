export interface Todo {
	item: string;
}

export interface TodoAction {
	type: string;
	payload: Todo;
}

export interface ReduxState {
	todos: Todo[];
}
