import {useRef} from "react";

const App_useRef3 = () => {

    const inputElement = useRef(null);

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Forcus Input</button>
        </>
    );
};

export default App_useRef3;