import React from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';

const App = () => {
	return (
		<div className="container">
			<AddItem />
			<hr />
			<TodoList />
		</div>
	);
};

export default App;
