import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/08-useReducer/hooks/useTodo";


jest.mock('../../src/08-useReducer/hooks/useTodo');

describe('Pruebas en <TodoApp/>', () => {

    useTodo.mockReturnValue({
        todos: [
            {id:1, desciption: 'Todo 1', done: false},
            {id:2, desciption: 'Todo 2', done: true}
        ], 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        todosCount: 2, 
        pendingTodosCount: 1
    });
    
    test('Debe de mostrar el componente correctamente', () => {
        render(<TodoApp/>);
        // screen.debug();
        expect( screen.getByText('Todo 1')).toBeTruthy();
        expect( screen.getByText('Todo 2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();
    });

});