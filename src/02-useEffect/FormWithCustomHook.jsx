import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        password: '',
        email: '',
    });

    // const { username, password, email } = formState;

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={ onInputChange }/>
            <input type="password" className="form-control mt-2" placeholder="password" name="password" value={password} onChange={ onInputChange }/> 
            <input type="email" name="email" className="form-control mt-2" placeholder="gonzalotorreshernandez@gmail.com" value={email} onChange={ onInputChange }/>

            <button className="btn btn-primary mt-2" onClick={ onResetForm }> Borrar </button>
        </>
    );
}