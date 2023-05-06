import {useState} from 'react'
import ToDo from "./Components/ToDo.jsx";

function App() {
    const [toDos, setToDos] = useState([
        {
            name: 'Task 1',
            complete: true,
            id: 1
        },
        {
            name: 'Task 2',
            complete: false,
            id: 2
        }
    ]);

    const addToDo = (event) => {
        event.preventDefault();
        const newTodo = {
            name: event.target.todoName.value,
            complete:false,
            id: toDos.length + 1
        }
        setToDos(toDos.concat(newTodo))
        event.target.todoName.value = ''
    }

    const toggleComplete = id => {
        const todoIndex = toDos.findIndex(x => x.id === id)
        const updatedToDos = [...toDos] // make a copy of the array
        updatedToDos[todoIndex].complete = !updatedToDos[todoIndex].complete // modify the copy
        setToDos(updatedToDos) // update the state with the modified copy
    }


    const deleteTodoById = id => {
        const todo = toDos.find(x => x.id === id)
        setToDos(toDos.filter(x => x.id !== todo.id))
    }
    return (
        <>
            <form onSubmit={addToDo}>
                <input type="text" name="todoName"/>
                <button type='submit'>Add</button>
            </form>
            <ul>
                {toDos.map((todo) =>
                    <ToDo
                        task={todo}
                        toggleComplete={()=>toggleComplete(todo.id)}
                        deleteTodo={() => deleteTodoById(todo.id)}
                        key={todo.id}
                    />
                )}
            </ul>
        </>
    )
}

export default App
