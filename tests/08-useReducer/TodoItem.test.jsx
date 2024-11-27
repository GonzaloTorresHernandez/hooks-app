import { TodoItem } from '../../src/08-useReducer/components/TodoItem'
import { fireEvent, render, screen } from "@testing-library/react";

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el TODO pendiente', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className ).toBe('align-self-center ');

    });

    test('Debe de mostrar el TODO completado', () => {

        todo.done = true;

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onToggleTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className ).toContain('text-decoration-line-through');

    });

    test('el span debe llamar el toggleTodo cuando se hace click', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });


    test('el btn debe llamar el deleteTodo cuando se hace click', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const btnElement = screen.getByRole('button');
        fireEvent.click(btnElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

});