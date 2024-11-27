import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage/>', () => {

    const user = {
        user: 1,
        email: 'gonzalo@gmail.com'
    }
    
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage/>
            </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('Debe de mostrar el componente CON el usuario', () => {
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage/>
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
    });

});