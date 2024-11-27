import { renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm'
import { act } from "react";

describe('Pruebas en useForm', () =>{

    const inicialForm = {
        name: 'Gonzalo',
        email: 'gonzalo@gmail.com'
    }

    test('Debe de regresar los valores por defecto', () => {
        const { result } = renderHook( () => useForm(inicialForm));
        expect(result.current).toEqual({
            name: inicialForm.name,
            email: inicialForm.email,
            formState: inicialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';
        const { result } = renderHook( () => useForm(inicialForm));
        const { onInputChange, name} = result.current;

        expect(name).toBe(inicialForm.name);

        act( () => onInputChange({target: {name: 'name', value: newValue}}));
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe de resetar el formulario', () => {

        const newValue = 'Juan';
        const { result } = renderHook( () => useForm(inicialForm));
        const { onInputChange, name, onResetForm} = result.current;

        expect(name).toBe(inicialForm.name);

        act( () => onInputChange(
            {target: {name: 'name', value: newValue}}
        ));

        act( () => onResetForm());

        expect(result.current.name).toBe(inicialForm.name);
        expect(result.current.formState.name).toBe(inicialForm.name);
    });

});