import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./hooks/useTodo";


export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo();

    return (
        <>
            <h1>TodoApp ({todosCount }), <small>pendientes: {pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } onDeleteTodo={ (id) => handleDeleteTodo(id)} onToggleTodo={ (id) =>  handleToggleTodo(id) }/>
                </div>
                <div className="col-5">
    
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ (todo) => handleNewTodo(todo) }/>
                  </div>
            </div>

        </>
    );
}