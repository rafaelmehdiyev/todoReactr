import './todo.css'
function ToDo(props) {
	const {task,deleteTodo,toggleComplete} = props;
	const label = task.complete ? 'Uncomplete' : 'Complete';
	const todoClass = task.complete ? "todo completed" : "todo";
	return (
		<>
			<li className={todoClass}>
				{task.name}
				<button onClick={toggleComplete}>{label}</button>
				<button onClick={deleteTodo}>Delete</button>
			</li>
		</>
	)
}

export default ToDo