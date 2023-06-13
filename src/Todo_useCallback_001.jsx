import {memo} from "react";

const Todo_useCallback_001 = ({todos, addTodo}) => {

    return(
        <>
            <h2>My Todos</h2>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

export default memo(Todo_useCallback_001);