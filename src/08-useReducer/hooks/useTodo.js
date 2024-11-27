import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

// valor que contendra un valor inicial 
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[Todo] Add Todo',
            payload: todo
        };
        dispatch( action );
    };

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[Todo] Remove Todo',
            payload: id
        };
        dispatch( action );
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: '[Todo] Toggle Todo',
            payload: id
        };
        dispatch( action );
    };

    const todosCount = () => {
        return todos.length;
    }

    const pendingTodosCount = () => {
        return todos.filter( (todo) => {
            return !todo.done
        }).length;
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }

}