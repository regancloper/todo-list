// Action creator
export const addTodo = (item: string) => {
	return {
		type: 'ADD_TODO',
		payload: {
			item: item,
		},
	};
};
