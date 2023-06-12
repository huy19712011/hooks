import {useEffect, useRef, useState} from "react";

const App_useRef4 = () => {

    const [inputValue, setInputValue] = useState('');

    const previousValue = useRef(null);

    useEffect(() => {
        previousValue.current = inputValue;
    }, [inputValue]);


    return (
        <>
            <input type="text" onChange={(event) => setInputValue(event.target.value)}/>
            <h3>Current value: {inputValue}</h3>
            <h3>Previous value: {previousValue.current}</h3>
        </>
    );
};

export default App_useRef4;