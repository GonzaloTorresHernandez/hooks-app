import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {

    const [valorInput, setValorInput] = useState('');

    const onInputChange = (event) => {
        setValorInput(event.target.value);
    }

    const enviarForm = (event) => {
        event.preventDefault();
        if (valorInput.trim().length <= 1) return;
        const NewTodo = {
            id: new Date().getTime(),
            desciption: valorInput,
            done: false,
        };
        onNewTodo(NewTodo);
        setValorInput('');
    }

    return (
        <>
            <form onSubmit={ enviarForm } aria-label="form">
                <input type="text" placeholder='¿Que hay que hacer?' className="form-control" onChange={ onInputChange } value={valorInput}/>
                <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
            </form>
        </>
    );
}