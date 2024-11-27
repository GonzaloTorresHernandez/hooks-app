export const todoReducer = (inicialState = [], action) => {

    switch ( action.type ) {
        case '[Todo] Add Todo':
                return [ ...inicialState, action.payload];
            break;

        case '[Todo] Remove Todo':
                return inicialState.filter( (todo) => {
                    return todo.id !== action.payload;
                });
            break;

        case '[Todo] Toggle Todo':
                return inicialState.map( (todo) => {

                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }

                    return todo;
                });
            break;
    
        default:
            return inicialState;
            break;
    }
}