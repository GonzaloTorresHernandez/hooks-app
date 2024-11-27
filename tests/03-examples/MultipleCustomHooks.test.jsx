import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en <MultipleCustomHooks/>', () =>{

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        incrementa: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null 
        });

        render(<MultipleCustomHooks/>);

        expect( screen.getByText('Cargando'));
        expect( screen.getByText('Informacion de Pokemon'));

        const nextBtn = screen.getByRole('button', {name: 'Siguiente'});
        expect(nextBtn.disabled).toBeFalsy();

      });


    test('Debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: { id: 1, name: 'Pokemon', sprites: { front_default: 'img1', front_shiny: 'img2'}}, 
            isLoading: false, 
            hasError: null 
        });

        render(<MultipleCustomHooks/>);
        expect( screen.getByText('#1 - Pokemon')).toBeTruthy();
        
    });

    test('Debe de llamar la funcion de Incrementar', () => {

        useFetch.mockReturnValue({
            data: { id: 1, name: 'Pokemon', sprites: { front_default: 'img1', front_shiny: 'img2'}}, 
            isLoading: false, 
            hasError: null 
        });

        render(<MultipleCustomHooks/>);
        const nextBtn = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click(nextBtn);
        
        expect(mockIncrement).toHaveBeenCalled();
    });

});