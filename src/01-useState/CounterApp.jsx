import { useState } from "react";

export const CounterApp = () => {

    const [ {contador1, contador2, contador3}, setContador] = useState({
        contador1: 10,
        contador2: 20,
        contador3: 30,
    });

    const apretarBtn = () => {

       setContador({
        contador1: contador1 + 1,
        contador2: contador2 + 1,
        contador3: contador3 + 1,
    });
    };

    return (
        <>
            <h1>Counter1: { contador1 } </h1>
            <h1>Counter2: { contador2 } </h1>
            <h1>Counter3: { contador3 } </h1>
            <hr />
            <button className="btn" onClick={ () => apretarBtn()}>
                +1
            </button>
        </>
    );
};