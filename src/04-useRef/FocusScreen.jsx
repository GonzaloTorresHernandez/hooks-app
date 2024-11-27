import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
    // useRef  permite mantener una referencia y cuando cambia no dispara una recarga del componente

    const onClick = () => {
        // console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text" 
                placeholder="ingrese su nombre" 
                className="form-control"/>

            <button className="btn btn-primary mt-2" onClick={ onClick }>Set Focus</button>
        </>
    );
}