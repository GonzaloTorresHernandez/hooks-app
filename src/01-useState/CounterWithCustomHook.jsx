import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, incrementa, decrementa, reseteo } = useCounter();


    return (
        <>
            <h1>CounterWithCustomHook: {counter} </h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => incrementa(2) }>
                +1
            </button>
            <button className="btn btn-danger" onClick={ () => decrementa() }>
                -1
            </button>
            <button className="btn btn-success" onClick={ () => reseteo() }>
                reset
            </button>
        </>
    );
};