import { useMemo, useState } from "react";
import { useCounter } from "../hooks";


const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i< iterationNumber; i++){
        console.log('Ahi vamos...');
    };

    return `${iterationNumber} iteracion realizadas`;
}

export const MemoHook = () => {

    const {counter, incrementa} = useCounter(1000);
    const [ show, setShow ] = useState(true);

    // memorisa un valor
    const memoriValor = useMemo( () => {
        return heavyStuff( counter )
        // memoriza este valor cada vez que la dependencia cambie
    }, [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />
            <h4>{ memoriValor }</h4>

            <button className="btn btn-primary" onClick={ () => incrementa() }>+1</button>
            <button className="btn btn-outline-primary" onClick={ () => setShow( !show ) }> Show - { JSON.stringify(show) }</button>
        </>
    );
}