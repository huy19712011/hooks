import './App.css';
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(c => c + 1);
    };

    const addTodo = () => {
        setTodos(t => [...t, "New todo"]);
    };

    return (
        <>
            <h1>useCallback hook</h1>
            <Todos todos={todos} addTodo={addTodo}/>
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default App;

const Todos = ({todos, addTodo}) => {

    return (
        <>
            <h2>My todos</h2>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}>Add todo</button>
        </>
    );
};