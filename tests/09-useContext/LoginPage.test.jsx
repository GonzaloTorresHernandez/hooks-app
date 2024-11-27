import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";



describe('Pruebas en <LoginPage/>', () => {
    
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        );
        screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('Debe de mostrar el usuario al hacer click en el boton', () => {
        
        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{user:null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );
         const btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect( setUserMock ).toHaveBeenCalledWith({id: 1, name: 'Gonzalo', email: 'juan@gmail.com'});
    });

});