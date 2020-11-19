import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoAction } from '../types/types';
import { addTodo } from '../actions';

interface AddItemProps {
	addTodo: (item: string) => TodoAction;
}

interface AddItemState {
	item: string;
}

class AddItem extends Component<AddItemProps, AddItemState> {
	constructor(props: AddItemProps) {
		super(props);
		this.state = {
			item: '',
		};
	}

	addItem() {
		this.props.addTodo(this.state.item);
		this.setState({ item: '' });
	}

	render() {
		return (
			<div className="container mt-3">
				<div className="form-group">
					<input
						type="text"
						value={this.state.item}
						className="form-control"
						placeholder="Enter new todo:"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							this.setState({ item: e.target.value })
						}
					/>
					<button
						className="btn btn-primary mt-2"
						onClick={() => this.addItem()}
					>
						Add Task
					</button>
				</div>
			</div>
		);
	}
}

export default connect(null, { addTodo })(AddItem);
