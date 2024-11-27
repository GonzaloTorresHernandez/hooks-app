import { useState } from "react";

export const useForm = ( inicialForm = {} ) => {
    // para manejar cualquier formulario 

    const [formState, setFormState] = useState( inicialForm );

    const onInputChange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    };

    const onResetForm = () => {
        setFormState( inicialForm );
    };

    return {
        ...formState,   // cargamos la propiedades del formState
        formState,
        onInputChange,
        onResetForm,
    }
}