import React from 'react';
import { connect } from 'react-redux';
import { ReduxState, Todo } from '../types/types';

interface TodoListProps {
	todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
	return (
		<div className="container">
			<h3>Things to Get Done:</h3>
			<ul>
				{todos.map(todo => {
					return <li key={todo.item}>{todo.item}</li>;
				})}
			</ul>
		</div>
	);
};

const mapStateToProps = (state: ReduxState) => {
	return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
