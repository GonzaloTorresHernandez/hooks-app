

const inicialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

/*
    reducer es simplemente una FUNCION PURA que resibe 2 argumenteos
    este SIEMPRE debe retornar un STATE

    este debe resibir como parametros:
        - state (en caso de no llegar siempre debe tener el valor inicial)
        - action este se debe indicar el como quieres que cambie el estado

 */
const todoReducer = ( state = inicialState, action = {} ) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la pieda del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};

todos = todoReducer( todos, addTodoAction );

console.log({state: todos});