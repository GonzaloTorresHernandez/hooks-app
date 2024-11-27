import { useState } from "react"

export const useCounter = ( valorInicial = 10) => {

    const [ counter, setCounter ] = useState( valorInicial );

    const incrementa = (value = 1) => {
        setCounter( counter + value);
    };

    const decrementa = (value = 1) => {
        if (counter === 0) return;
        setCounter( counter - value);
    }

    const reseteo = () => {
        setCounter( valorInicial );
    }

    return {
        counter: counter,
        incrementa,
        decrementa,
        reseteo
    }
}