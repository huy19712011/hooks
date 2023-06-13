import {useEffect, useState} from "react";

const App_useEffect_01 = () => {

    const [count, setCount] = useState(0);

    /* 1.
        useEffect(() => {
            //Runs on every render
        });
    */
    /* 1.
        useEffect(() => {
            setTimeout(() => {
                setCount(c => c + 1);
            }, 1000);
        });
    */


/* 2.
    useEffect(() => {
        //Runs only on the first render
    }, []);
*/
/* 2.
    useEffect(() => {
        setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);
    }, []);
*/


/* 3.
    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
    }, [prop, state]);
*/
    useEffect(() => {
        setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);
    }, [count]);

    return (
        <h3>I've rendered {count} times</h3>
    );
};

export default App_useEffect_01;