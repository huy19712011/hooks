import {useEffect, useState} from "react";

const App_useEffect_02 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);

        // Clean up the timer at the end of the useEffect Hook
        return () => clearTimeout(timer);
    }, []);


    return (
        <h3>I've rendered {count} times</h3>
    );
};

export default App_useEffect_02;