import { render, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";

describe('Pruebas en el useCounter', () => {

    test('Debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, incrementa, decrementa, reseteo} = result.current;

        expect( counter ).toBe(10);
        expect( incrementa ).toEqual( expect.any(Function) );
        expect( decrementa ).toEqual( expect.any(Function) );
        expect( reseteo ).toEqual( expect.any(Function) );
    });

    test('Debe retornar con el valor inicial de 100', () => {

        const valorInicial = 100;
        const { result } = renderHook( () => useCounter(valorInicial));
        const { counter } = result.current;

        expect( counter ).toBe(100);
    });

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, incrementa } = result.current;

        act(() => incrementa());
        expect(result.current.counter).toBe(11);
    });

    test('Debe de incrementar el contador con un valor personalizado', () => {
  
        const { result } = renderHook( () => useCounter());
        const { counter, incrementa } = result.current;

        act(() => incrementa(10));
        expect(result.current.counter).toBe(20);
    });

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, decrementa } = result.current;

        act(() => decrementa());
        expect(result.current.counter).toBe(9);
    });

    test('Debe reiniciar el contador', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, decrementa, reseteo } = result.current;

        act(() => decrementa(9));
        expect(result.current.counter).toBe(1);

        act( () => reseteo());
        expect( result.current.counter).toBe(10);

    });


});