import Todo_useCallback_001 from "./Todo_useCallback_001";
import {useCallback, useState} from "react";

const App_useCallback_01 = () => {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    /* 1.
        Try running this and click the count increment button.

        You will notice that the Todos component re-renders even when the todos do not change.

        Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.

        This is because of something called "referential equality".

        Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.
    */
    /* 1.
        const addTodo = () => {
            setTodos((todos) => {
                return [...todos, "New Todo"];
            });
        };
    */


/* 2.
    To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

       Use the useCallback Hook to prevent the Todos component from re-rendering needlessly
*/
    const addTodo = useCallback(() => {
        setTodos((t) => {
            return [...t, "New Todo"];
        });
    }, [todos]);

    const increment = () => {
        setCount(c => c + 1);
    };

    return (
        <>
            <Todo_useCallback_001 todos={todos} addTodo={addTodo}/>
            <hr/>
            <div>
                Coutn: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default App_useCallback_01;