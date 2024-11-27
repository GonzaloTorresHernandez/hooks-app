import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {

  const inicialState = [{
    id: 1,
    description: 'demo todo',
    done: false,
  }]

  test('Debe de regresar el estado inicial', () => {
    const newState = todoReducer(inicialState, {});
    expect(newState).toBe(inicialState);
  });

  test('Debe de agregar un Todo', () => {
    const action = {
      type: '[Todo] Add Todo',
      payload: {
        id: 2,
        description: 'nuevo todo #2',
        done: false,
      }
    };

    const newState = todoReducer(inicialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe de eliminar un TODO', () => {

    const action = {
      type: '[Todo] Remove Todo',
      payload: 1
    };

    const newState = todoReducer(inicialState, action);
    expect(newState.length).toBe(0);
  });

  test('Debe de cambiar un TODO', () => {

    const action = {
      type: '[Todo] Toggle Todo',
      payload: 1
    };

    const newState = todoReducer(inicialState, action);
    expect(newState[0].done).toBeTruthy();
  });

});