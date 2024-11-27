import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'ovni',
        email: 'ovni@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        // console.log(target.name);
        // console.log(target.value);
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('fromState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);



    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={ onInputChange }/>
            <input type="email" name="email" className="form-control mt-2" placeholder="gonzalotorreshernandez@gmail.com" value={email} onChange={ onInputChange }/>
            <hr />
            {
               ( username === 'ovni' ) && <Message/>
            }
        </>
    );
}