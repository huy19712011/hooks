import {useEffect, useRef, useState} from "react";

const App_useRef2 = () => {

    const [inputValue, setInputValue] = useState('');

    // count will run infinitely
    // const [count, setCount]= useState(0);
    // useEffect(() => setCount(c => c + 1));

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });


    // const count = useRef(0);
    // useEffect(() => {count.current = count.current + 1}); // note: return object {count.current: count.current}, {} here is mandatory!!!

    return (
        <>
            <input type="text" onChange={(event) => setInputValue(event.target.value)}/>
            <h3>Input value: {inputValue}</h3>
            <h3>Render count: {inputValue.length}</h3>
            {/*<h3>Render count: {count}</h3>*/}
            <h3>Render count: {count.current}</h3>
        </>
    );
};

export default App_useRef2;